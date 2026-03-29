from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional, Any
from datetime import datetime
import os

# Initialize FastAPI App
app = FastAPI(
    title="Agriculture Management System API",
    description="Backend API for AMS powered by FastAPI, handling ML inference routes and DB operations.",
    version="1.0.0"
)

# CORS configuration for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models (Schemas) ---

class UserSchema(BaseModel):
    id: int
    name: str
    email: str
    role: str

class FertilizerSchema(BaseModel):
    name: str
    usage_instructions: str

class ArticleCreateSchema(BaseModel):
    crop_name: str
    ideal_soil_type: str
    required_moisture_level: str
    ideal_climate: str
    season: str
    cultivation_process: str
    fertilizers: List[FertilizerSchema]

class ArticleResponseSchema(ArticleCreateSchema):
    id: int
    admin_id: int
    created_at: datetime

class AnalysisResultSchema(BaseModel):
    soil_type: str
    moisture_level: str
    current_weather: dict
    recommended_crops: List[dict]
    actionable_steps: dict

# --- Dependency Injection (Mocked Database Session & Auth) ---

def get_db():
    # Yield database session here
    db = "Mock_DB_Session"
    yield db

def get_current_user():
    # Example: Extract JWT and return User
    return {"id": 1, "role": "Admin", "name": "Admin User"}

# --- Routes: Authentication ---

@app.post("/api/auth/login", tags=["Auth"])
async def login(email: str = Form(...), password: str = Form(...)):
    """Authenticate user and return JWT token."""
    return {"access_token": "mock_token", "token_type": "bearer", "role": "Admin"}

# --- Routes: Admin (Knowledge Base Management) ---

@app.get("/api/admin/dashboard", tags=["Admin Dashboard"])
async def get_admin_dashboard_stats(user: dict = Depends(get_current_user), db: Any = Depends(get_db)):
    """Fetch statistics for the Admin Dashboard."""
    if user["role"] != "Admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    return {
        "total_articles": 142,
        "active_farmers": 850,
        "recent_activity": [
            {"action": "New user registered", "time": "2 mins ago"},
            {"action": "Article 'Wheat Cultivation' updated", "time": "1 hour ago"}
        ]
    }

@app.post("/api/admin/articles", response_model=ArticleResponseSchema, tags=["Admin Articles"])
async def create_article(article: ArticleCreateSchema, user: dict = Depends(get_current_user), db: Any = Depends(get_db)):
    """Publish a new agricultural research article."""
    if user["role"] != "Admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    
    # Insert logic to DB would go here
    return {**article.dict(), "id": 1, "admin_id": user["id"], "created_at": datetime.now()}

@app.get("/api/articles", response_model=List[ArticleResponseSchema], tags=["Knowledge Hub"])
async def get_articles(db: Any = Depends(get_db)):
    """Fetch all articles for both Admins and Farmers."""
    # Query DB
    return []

# --- Routes: Farmer (AI Land Analysis Flow) ---

@app.post("/api/farmer/analyze", response_model=AnalysisResultSchema, tags=["Farmer AI Analysis"])
async def analyze_land(
    lat: float = Form(...),
    lng: float = Form(...),
    image: UploadFile = File(...),
    user: dict = Depends(get_current_user),
    db: Any = Depends(get_db)
):
    """
    Core AI Feature:
    1. Upload & Process Image via OpenCV/TensorFlow to detect soil
    2. Fetch Weather from OpenWeatherMap using Lat/Lng coordinates
    3. Query SQL Database to match conditions with Admin Articles
    """
    
    # 1. Image Processing (Mocked ML Inference)
    # image_data = await image.read()
    # predicted_soil = ml_model.predict_soil_type(image_data)
    # predicted_moisture = ml_model.predict_moisture(image_data)
    detected_soil = "Loamy"
    detected_moisture = "Moderate"

    # 2. Weather API Integration (Mocked)
    # weather_response = httpx.get(f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lng}&appid={API_KEY}")
    current_weather = {
        "temperature": 24.5,
        "condition": "Partly Cloudy",
        "humidity": 60
    }

    # 3. Query DB for Recommendations
    # crops = db.query(ResearchArticles).filter(
    #     soil_type=detected_soil, 
    #     climate=current_weather['condition']
    # ).all()

    # 4. Save to AnalysisHistory DB table
    # db.add(AnalysisHistory(...))

    return AnalysisResultSchema(
        soil_type=detected_soil,
        moisture_level=detected_moisture,
        current_weather=current_weather,
        recommended_crops=[
            {
                "crop_name": "Wheat",
                "match_score": "95%",
                "article_id": 1
            }
        ],
        actionable_steps={
            "fertilizer": "Use NPK 10-20-10 prior to sowing. Given the moderate moisture, apply slightly less than standard to prevent nutrient runoff.",
            "watering_schedule": "Water every 3 days. The forecasted partly cloudy conditions will reduce evaporation rate by 15%.",
            "cultivation_process": "1. Plow the field... 2. Sow seeds..."
        }
    )

# --- SPA Hosting (Serving React Frontend on single host) ---
frontend_dist = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend', 'dist')
assets_dir = os.path.join(frontend_dist, 'assets')

if os.path.isdir(assets_dir):
    app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

@app.get("/{full_path:path}", include_in_schema=False)
async def serve_spa(full_path: str):
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API route not found")

    # Serve static assets located in the root of dist (e.g. vite.svg)
    file_path = os.path.join(frontend_dist, full_path)
    if os.path.isfile(file_path):
        return FileResponse(file_path)

    # Serve index.html to allow React Router to handle client-side routing
    index_file = os.path.join(frontend_dist, "index.html")
    if os.path.isfile(index_file):
        return FileResponse(index_file)
        
    raise HTTPException(status_code=404, detail="Frontend build not found")
