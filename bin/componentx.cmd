@echo off
rem ComponentX CLI shim (Windows)
set "CX_HOME=%~dp0.."
node "%CX_HOME%\bin\componentx.mjs" %*
