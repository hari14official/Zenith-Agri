# Zenith Agri - Single Host Startup Script
# This script builds the frontend and starts the FastAPI backend to serve the application on a single port (8000).

Write-Host "--- Zenith Agri Single Host Startup ---" -ForegroundColor Cyan

# 1. Build Frontend
Write-Host "Step 1: Building Frontend..." -ForegroundColor Yellow
Set-Location frontend
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Frontend build failed!" -ForegroundColor Red
    exit $LASTEXITCODE
}
Set-Location ..

# 2. Start Backend
Write-Host "Step 2: Starting Backend Server..." -ForegroundColor Yellow
Set-Location backend

# Try to use venv if it exists
if (Test-Path "venv") {
    Write-Host "Using virtual environment..." -ForegroundColor Gray
    .\venv\Scripts\Activate.ps1
}

# Install requirements
pip install -r requirements.txt

# Start with uvicorn
Write-Host "Application will be available at: http://localhost:8000" -ForegroundColor Green
uvicorn main:app --host 0.0.0.0 --port 8000
