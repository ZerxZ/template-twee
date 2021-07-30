@echo off

:: Set working directory
pushd %~dp0
@set TWEEGO_PATH="%~dp0devTools\tweego\StoryFormats"

:: Run the appropriate compiler for the user's CPU architecture.
if %PROCESSOR_ARCHITECTURE% == AMD64 (
	CALL "%~dp0devTools\tweego\tweego_win64.exe" -d "%~dp0\dist\index.html"  -o "%~dp0\decompile\script.twee" 
) else (
	CALL "%~dp0devTools\tweego\tweego_win86.exe" -d "%~dp0\dist\index.html"   -o "%~dp0\decompile\script.twee" 
)