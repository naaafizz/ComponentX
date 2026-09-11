#!/bin/sh
# ComponentX one-line installer (macOS / Linux)
#   curl -fsSL https://raw.githubusercontent.com/naaafizz/ComponentX/main/install.sh | sh
set -e

REPO="${COMPONENTX_REPO:-naaafizz/ComponentX}"
BRANCH="${COMPONENTX_BRANCH:-main}"
BASE="https://raw.githubusercontent.com/$REPO/$BRANCH"

if ! command -v node >/dev/null 2>&1; then
  echo "ComponentX needs Node.js 18+ — install it from https://nodejs.org" >&2
  exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "  ⚡ fetching ComponentX CLI from $REPO@$BRANCH …"
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$BASE/bin/componentx.mjs" -o "$TMP/componentx.mjs"
elif command -v wget >/dev/null 2>&1; then
  wget -qO "$TMP/componentx.mjs" "$BASE/bin/componentx.mjs"
else
  echo "ComponentX installer needs curl or wget." >&2
  exit 1
fi

exec node "$TMP/componentx.mjs" install "$@"
