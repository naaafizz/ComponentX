# ComponentX one-line installer (Windows PowerShell)
#   irm https://raw.githubusercontent.com/naaafizz/ComponentX/main/install.ps1 | iex
$ErrorActionPreference = 'Stop'

$Repo = if ($env:COMPONENTX_REPO) { $env:COMPONENTX_REPO } else { 'naaafizz/ComponentX' }
$Branch = if ($env:COMPONENTX_BRANCH) { $env:COMPONENTX_BRANCH } else { 'main' }
$Base = "https://raw.githubusercontent.com/$Repo/$Branch"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error 'ComponentX needs Node.js 18+ — install it from https://nodejs.org'
}

$Tmp = Join-Path ([System.IO.Path]::GetTempPath()) ("componentx-" + [Guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force -Path $Tmp | Out-Null

try {
    Write-Host "  ⚡ fetching ComponentX CLI from $Repo@$Branch …"
    Invoke-WebRequest -UseBasicParsing -Uri "$Base/bin/componentx.mjs" -OutFile (Join-Path $Tmp 'componentx.mjs')
    & node (Join-Path $Tmp 'componentx.mjs') install @args
}
finally {
    Remove-Item -Recurse -Force $Tmp -ErrorAction SilentlyContinue
}
