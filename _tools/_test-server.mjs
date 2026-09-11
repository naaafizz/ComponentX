// _tools/_test-server.mjs — TEMPORARY local stand-in for raw.githubusercontent.com
// Serves /naaafizz/ComponentX/main/<path> from the repo root. For CLI tests only.
import * as fs from "node:fs";
import path from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.PORT || 8890);

const server = createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  // path like /naaafizz/ComponentX/main/components/button/button.md
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length >= 4 && parts[0] === "naaafizz" && parts[1] === "ComponentX" && parts[2] === "main") {
    const rel = parts.slice(3).map(decodeURIComponent).join(path.sep);
    const file = path.join(ROOT, rel);
    if (fs.existsSync(file)) {
      const body = fs.readFileSync(file);
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8", "content-length": body.length });
      res.end(body);
      return;
    }
  }
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("not found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`test-server listening on 127.0.0.1:${PORT}`);
});