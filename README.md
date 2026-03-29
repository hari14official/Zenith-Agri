<div align="center">

<img src="https://img.shields.io/badge/Zenith-Agri-2d6a4f?style=for-the-badge&logo=leaf&logoColor=white" height="45"/>

# 🌾 Zenith Agri — Agriculture Management System

**An AI-powered, full-stack agriculture intelligence platform for smart farming, land analysis, crop health diagnostics, and agronomy knowledge — built for India's diverse agro-climatic zones.**

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br/>

> 🚀 **Live Preview:** `http://localhost:5173` (dev) &nbsp;·&nbsp; `http://localhost:80` (Docker)

</div>

---

## ✨ Features

| 🤖 AI Analysis | 📚 Knowledge Hub |
|---|---|
| Soil photo upload with GPS-based crop recommendations | 6+ expert articles with deep multi-section content |
| Crop disease detection via computer vision | Real-time full-text search across all articles |
| Tamil Nadu map default (OpenStreetMap + Leaflet) | Category filter tabs (Grains, Vegetables, Fruits...) |
| Search location by name via Nominatim API | "Explore Details" opens full multi-page article view |

| 🗺️ Interactive Map | 🎨 Premium Design |
|---|---|
| Click to drop pin anywhere on the map | Split-screen Login/Signup with agri background |
| Search and auto-navigate by city or region name | 3-column Navbar: Brand · Links · Sign Out |
| Coordinate input for precision selection | Stats cards, hover animations, glassmorphism |
| Defaults to Tamil Nadu coordinates | AgribusinessInfo ERP delivery timeline |

---

## 🏗️ Project Architecture

```
AMS/
├── 📁 frontend/                     # React + Vite + TailwindCSS
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing: hero, stats, modules
│   │   │   ├── Login.jsx            # Split-screen auth
│   │   │   ├── Signup.jsx           # Registration + role selection
│   │   │   ├── FarmerDashboard.jsx  # Analytics, stats, research cards
│   │   │   ├── AdminDashboard.jsx   # Admin control panel
│   │   │   ├── LandAnalysis.jsx     # AI soil + crop (Leaflet map)
│   │   │   ├── KnowledgeHub.jsx     # Research library + search
│   │   │   └── ExploreMore.jsx      # Platform showcase
│   │   └── components/
│   │       ├── Navbar.jsx           # Sticky 3-column responsive navbar
│   │       ├── Footer.jsx           # Site footer
│   │       └── AgribusinessInfo.jsx # ERP delivery model section
│   ├── Dockerfile                   # Multi-stage Node → Nginx
│   └── nginx.conf                   # SPA routing + API proxy
│
├── 📁 backend/                      # FastAPI + Python 3.11
│   ├── main.py                      # API routes, CORS, SPA host
│   ├── requirements.txt             # Python dependencies
│   ├── schema.sql                   # Database schema
│   └── Dockerfile                   # Python 3.11-slim container
│
├── docker-compose.yml               # Frontend + Backend orchestration
├── .dockerignore                    # Excludes venv, node_modules
└── README.md                        # This file
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18 + Vite 5 | Fast SPA with Hot Module Replacement |
| **Styling** | TailwindCSS 3 | Utility-first responsive design system |
| **Icons** | Lucide React | 300+ modern SVG icons |
| **Maps** | Leaflet.js + React-Leaflet | Interactive geolocation maps |
| **Routing** | React Router v6 | Client-side SPA navigation |
| **Backend** | FastAPI (Python 3.11) | High-performance async REST API |
| **ASGI Server** | Uvicorn | Production-grade Python server |
| **Validation** | Pydantic v2 | Request/response schema validation |
| **Containers** | Docker + Compose | Reproducible multi-service deployment |
| **Web Server** | Nginx Alpine | Static serving + API reverse proxy |

---

## 🚀 Quick Start

### Option A — Local Development

**Prerequisites:** Node.js 20+ · Python 3.11+

```bash
# Clone
git clone https://github.com/yourusername/zenith-agri-ams.git
cd zenith-agri-ams
```

**Backend:**
```bash
cd backend
python -m venv venv

# Activate (Windows)
venv\Scripts\activate
# Activate (macOS/Linux)
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
> 📖 API Docs: **http://localhost:8000/docs**

**Frontend** (new terminal):
```bash
cd frontend
npm install
npm run dev
```
> 🌐 App: **http://localhost:5173**

---

### Option B — Docker (One Command) 🐳

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop)

```bash
git clone https://github.com/yourusername/zenith-agri-ams.git
cd zenith-agri-ams
docker compose up --build
```

| Service | URL |
|---|---|
| 🌐 Frontend (Nginx) | http://localhost:80 |
| ⚙️ Backend API | http://localhost:8000 |
| 📖 Swagger Docs | http://localhost:8000/docs |
| 📘 ReDoc | http://localhost:8000/redoc |

```bash
# Stop everything
docker compose down

# Rebuild after changes
docker compose up --build --force-recreate

# View logs
docker compose logs -f

# Individual service logs
docker compose logs -f backend
docker compose logs -f frontend
```

---

## 🔌 API Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/login` | Authenticate user · returns JWT | ❌ |
| `GET` | `/api/admin/dashboard` | Admin stats: articles, farmers, activity | Admin |
| `POST` | `/api/admin/articles` | Publish new agronomy article | Admin |
| `GET` | `/api/articles` | Fetch all published research | Any |
| `POST` | `/api/farmer/analyze` | AI analysis: soil image + GPS coords | Farmer |

#### Sample Request — Analyze Land
```bash
curl -X POST "http://localhost:8000/api/farmer/analyze" \
  -F "lat=11.1271" \
  -F "lng=78.6569" \
  -F "image=@soil_photo.jpg"
```

<details>
<summary>📄 Sample Response</summary>

```json
{
  "soil_type": "Loamy",
  "moisture_level": "Moderate",
  "current_weather": {
    "temperature": 28.5,
    "condition": "Partly Cloudy",
    "humidity": 65
  },
  "recommended_crops": [
    { "crop_name": "Paddy", "match_score": "98%", "article_id": 1 },
    { "crop_name": "Sugarcane", "match_score": "92%", "article_id": 5 }
  ],
  "actionable_steps": {
    "fertilizer": "Apply NPK 17-17-17 + Urea top dressing at transplanting",
    "watering_schedule": "Maintain 2-5 cm flooding during vegetative stage",
    "cultivation_process": "Prepare puddled fields, transplant at 20x15cm spacing"
  }
}
```

</details>

---

## 📱 Application Pages

### 🏠 Home
Full-screen hero · Stats bar (12,500+ farms, 40% water saved) · Modules section · AgribusinessInfo ERP timeline

### 🔐 Login / Signup
Split-screen card · Agricultural background · Google SSO placeholder · Role selection (Farmer / Admin)

### 🌾 Farmer Dashboard
Hero banner · 4 KPI stat cards · 3 feature cards with images · Tamil Nadu research article previews

### 🗺️ AI Land Analysis (4 steps)
1. Upload soil photo  →  2. Select location (map + search + coords)  →  3. AI inference  →  4. Soil report + crop guide

### 🔬 Crop Health Diagnosis
Enter crop name → Upload leaf photo → CV analysis → Disease name + treatment protocol + product recommendation

### 📚 Knowledge Hub
50vh hero image · Search bar · Category filter · Article grid → Full article with 5–7 illustrated sections

### 🌍 Explore More
Platform overview · Feature grid with images · Crops gallery · Sustainable breeding · CTA

---

## 📂 Route Map

| Route | Page | Role |
|---|---|---|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/signup` | Signup | Public |
| `/explore` | Explore More | Public |
| `/farmer` | Farmer Dashboard | Farmer |
| `/farmer/analysis` | AI Land Analysis | Farmer |
| `/farmer/hub` | Knowledge Hub | Farmer |
| `/admin` | Admin Dashboard | Admin |
| `/admin/hub` | Knowledge Hub (Admin) | Admin |

---


## 🤝 Contributing

```bash
# Fork → Clone → Branch
git checkout -b feat/my-feature

# Make changes, then commit
git commit -m "feat: add my feature"

# Push and open a Pull Request
git push origin feat/my-feature
```

**Commit Convention:**

| Prefix | Using For |
|---|---|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation |
| `style:` | UI/CSS changes |
| `refactor:` | Code cleanup |
| `chore:` | Config / build |

---

## 🗺️ Roadmap

- [ ] 🔐 JWT auth with refresh tokens
- [ ] 🌦️ Live OpenWeatherMap API integration
- [ ] 🤖 TensorFlow soil classification model
- [ ] 📊 Recharts yield analytics dashboard
- [ ] 🌐 Tamil language (தமிழ்) localization
- [ ] 📱 PWA (Progressive Web App)
- [ ] 📤 Export analysis reports as PDF
- [ ] 🔔 Push notifications for disease alerts
- [ ] 🗃️ PostgreSQL database integration
- [ ] ☁️ AWS / GCP / Azure deployment guides

---

## 👨‍💻 Acknowledgements

| Resource | Purpose |
|---|---|
| [Unsplash](https://unsplash.com) | High-quality agriculture photography |
| [OpenStreetMap](https://openstreetmap.org) | Free tile maps for Leaflet.js |
| [Nominatim](https://nominatim.openstreetmap.org) | Free reverse geocoding / location search |
| [Lucide React](https://lucide.dev) | Beautiful open-source SVG icons |
| [TNAU Agri Portal](http://agritech.tnau.ac.in) | Tamil Nadu cultivation protocol data |

---

## 📄 License

MIT License © 2026 Zenith Agri Team — See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ for the farmers of India 🌾**

⭐ **Star this repo if it helped you!**

[![GitHub stars](https://img.shields.io/github/stars/hari14official/zenith-agri-ams?style=social)](https://github.com/hari14official/zenith-agri-ams)

</div>
