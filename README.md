<div align="center">

<img src="https://img.shields.io/badge/Zenith-Agri-2d6a4f?style=for-the-badge&logo=leaf&logoColor=white" height="45"/>

# 🌾 Zenith Agri — Smart Agriculture Intelligence

<<<<<<< HEAD
**A premium, AI-powered agriculture platform for smart farming, precise land analysis, crop health diagnostics, and expert agronomy knowledge — optimized for unblocked, high-performance delivery.**
=======
**An AI-powered, full-stack agriculture intelligence platform for smart farming, land analysis, crop health diagnostics, and agronomy knowledge — built for India's diverse agro-climatic zones.**
>>>>>>> 025017c5aa12fc513dc4bf00e982a1098a0dd70d

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Google Maps](https://img.shields.io/badge/Google_Maps-API-4285F4?style=flat-square&logo=googlemaps&logoColor=white)](https://developers.google.com/maps)
[![OpenWeatherMap](https://img.shields.io/badge/Weather-API-EB6E4B?style=flat-square&logo=openweathermap&logoColor=white)](https://openweathermap.org/api)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-API-8E75C2?style=flat-square&logo=google-gemini&logoColor=white)](https://ai.google.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

> 🚀 **Live Preview:** `http://localhost:5173` &nbsp;·&nbsp; **High-Reliability Mode:** Local Static Assets + YouTube Video

</div>

---

## ✨ Features

| 🤖 AI & Weather Analysis | 📚 Knowledge Hub |
|---|---|
| **Google Maps Integration:** Precise location picking and place search | **Expanded Library:** 6+ deep-dive expert articles (Paddy, Tomato...) |
| **Real-time Weather:** Live feeds via OpenWeatherMap API | **Premium Layout:** 50vh hero images & full-width section images |
| **Gemini AI Engine:** Detailed cultivation, fertilization, and harvesting guides | **Rich Content:** Sourced from TNAU, ICAR, and Ministry of Agriculture |
| **Crop Suitability:** Real-time analysis of soil + weather vs crop needs | **Instant Search:** Full-text search and category filtering |

| 🗺️ Advanced Dashboard | 🏗️ Reliable Media Delivery |
|---|---|
| **Farmer/Admin Roles:** Customized layouts for different user types | **Local Images:** Curated local assets in `public/images/` for 100% uptime |
| **Dynamic About Page:** Full mission overview, advantages, and tech specs | **YouTube Backgrounds:** ISP-unblocked agriculture video playback |
| **Interactive Navbar:** Context-aware navigation with "About" section | **Asset Locking:** Consistent static images across all reloads |
| **Scheme Guidance:** Integrated state and central government subsidy tracking | **Zero Placeholders:** High-quality, real-world agricultural photography |

---

<<<<<<< HEAD

## 🛠️ Environment Configuration

Create a `.env` file in the `frontend/` directory:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_OPENWEATHERMAP_API_KEY=your_weather_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

---
=======
>>>>>>> 025017c5aa12fc513dc4bf00e982a1098a0dd70d

## 🚀 Installation & Setup

### 1. Clone & Install
```bash
git clone https://github.com/hari14official/Zenith-Agri.git
cd Zenith-Agri/frontend
npm install
```

### 2. Prepare Media Assets (Critical)
To ensure all high-quality images show up even if generic image CDNs are blocked on your network, run the local downloader:

```bash
# This downloads all required agricultural photography to public/images/
node download.js
```

### 3. Launch Development Server
```bash
npm run dev
```
> 🌐 App: **http://localhost:5173**

---

## 🔌 API Integrations

| Provider | Service | Implementation |
|---|---|---|
| **Google Maps** | Maps JavaScript API | Interactive coordinate marking & Places search |
| **OpenWeatherMap** | One Call API 3.0 | Real-time temp, humidity, and atmospheric pressure |
| **Google Gemini** | Generative AI SDK | Complex soil analysis and detailed article generation |
| **YouTube** | Iframe Player API | Reliable, unblocked agriculture background video |
| **Picsum/Unsplash** | Localized Images | Curated static assets via `download.js` |

---

<<<<<<< HEAD
## 🗺️ Roadmap Update & Future Vision

### 🚀 Completed (Phase 1)
- [x] 🌦️ **Live OpenWeatherMap API integration** - Real-time meteorological feeds.
- [x] 🗺️ **Google Maps API** - Precise location Marking & Places API search.
- [x] 🤖 **Gemini AI Engine** - Detailed cultivation, fertilization, and harvesting guides.
- [x] 🖼️ **High-reliability Media Delivery** - Local photography assets & YouTube Iframe background.
- [x] 📖 **Expanded Knowledge Hub** - Comprehensive agronomy research for 6+ crops.
- [x] 🏗️ **Dedicated "About" Platform Overview** - Full breakdown of Zenith Agri's mission.

### 📅 Next (Phase 2 - Intelligence & Accessibility)
- [ ] 🌐 **Tamil (தமிழ்) & Hindi (हिन्दी) Localization** - Full multi-language support.
- [ ] 📊 **Market Price Forecasting** - AI-driven prediction for mandi prices (APMC).
- [ ] 📤 **Export Reports as PDF** - One-click soil analysis and guide export.
- [ ] 📱 **Progressive Web App (PWA)** - Native feel with offline article access.
- [ ] 🔐 **Full JWT Authentication** - Secure tokens with session persistence.

### 🔭 Future (Phase 3 - IoT & Marketplace)
- [ ] 🕹️ **IoT Smart Irrigation Controls** - Remote pump control via mobile app integration.
- [ ] 🛒 **Direct-to-Consumer Marketplace** - Build a store for farmers to sell produce without middlemen.
- [ ] 🛰️ **Drone Imagery Analysis** - Upload aerial photos for farm-wide crop health maps.
- [ ] 💬 **Voice-First AI Assistant** - Hands-free voice commands for interaction in the field.
- [ ] 📈 **Financial Profitability Dashboard** - Track input costs vs yields for every hectare.
- [ ] 🔔 **Regional Pest Outbreak Alerts** - Real-time push notifications of threats in your district.
- [ ] 📦 **Inventory Management System** - Track seed, fertilizer, and equipment stocks.
=======

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
>>>>>>> 025017c5aa12fc513dc4bf00e982a1098a0dd70d

---

## 📄 License

<<<<<<< HEAD
MIT License © 2026 Zenith Agri Team — Built for the farmers of India
⭐ **Star this repo if it helped you!**
=======
MIT License © 2026 Zenith Agri Team — See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ for the farmers of India 🌾**

⭐ **Star this repo if it helped you!**

[![GitHub stars](https://img.shields.io/github/stars/hari14official/zenith-agri-ams?style=social)](https://github.com/hari14official/zenith-agri-ams)

</div>
>>>>>>> 025017c5aa12fc513dc4bf00e982a1098a0dd70d
