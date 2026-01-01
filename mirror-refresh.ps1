# Refresh public mirror excluding TaskFlow
param(
    [string]$PublicRepo = "https://github.com/AerielDay/public-portfolio-code.git"
)

$ErrorActionPreference = 'Stop'

# Paths
$Source = Resolve-Path (Join-Path $PSScriptRoot '.')
$Export = Join-Path (Split-Path $Source -Parent) 'portfolio-public-export'

# Reset export folder
if (Test-Path $Export) {
    Remove-Item -Recurse -Force $Export
}
New-Item -ItemType Directory -Path $Export | Out-Null

# Exclude absolute paths so TaskFlow never copies
$excludeDirs = @(
    (Join-Path $Source 'src\projects\taskflow'),
    (Join-Path $Source '.git'),
    (Join-Path $Source '.github'),
    (Join-Path $Source 'node_modules'),
    (Join-Path $Source 'dist')
)

# Copy with robocopy mirror mode
robocopy $Source $Export /MIR /XD $excludeDirs | Out-Null

Push-Location $Export

# Re-init repo fresh each time for predictable state
if (Test-Path '.git') {
    Remove-Item -Recurse -Force '.git'
}

git init | Out-Null

# Stage changes (if any)
git add .

$hasChanges = (git status --porcelain) -ne ''
if (-not $hasChanges) {
    Write-Host "No changes to mirror; exiting." -ForegroundColor Yellow
    Pop-Location
    exit 0
}

git commit -m "Mirror update (excluding taskflow)" | Out-Null

git remote add origin $PublicRepo | Out-Null

git branch -M main | Out-Null

git push -u origin main --force

Pop-Location

Write-Host "Mirror refreshed and pushed to $PublicRepo" -ForegroundColor Green
