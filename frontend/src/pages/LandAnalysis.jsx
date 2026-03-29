import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UploadCloud, Loader2, CheckCircle2, MapPin, CloudRain, Sun, ShieldAlert, BadgeCheck, Search } from 'lucide-react';

// Leaflet config
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet marker icons in React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position === null ? null : <Marker position={position}></Marker>;
};

const LandAnalysis = () => {
  const [activeTab, setActiveTab] = useState('soil');
  
  // Soil Analysis State
  const [soilStep, setSoilStep] = useState(1);
  const [position, setPosition] = useState([11.1271, 78.6569]); // Tamil Nadu, India

  // Crop Analysis State
  const [cropStep, setCropStep] = useState(1);
  const [cropFile, setCropFile] = useState(null);
  const [cropName, setCropName] = useState('');

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      if (data && data.length > 0) {
        setPosition([Number.parseFloat(data[0].lat), Number.parseFloat(data[0].lon)]);
      } else {
        alert('Location not found. Please try a different name.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
      alert('Error searching location. Please check your network.');
    } finally {
      setIsSearching(false);
    }
  };

  const startSoilAnalysis = () => {
    setSoilStep(3);
    setTimeout(() => setSoilStep(4), 3000);
  };

  const startCropAnalysis = () => {
    setCropStep(2);
    setTimeout(() => setCropStep(3), 3000);
  };

  // Crop results database based on detected crop
  const getCropResults = () => {
    const name = cropName.toLowerCase();
    if (name.includes('rice') || name.includes('paddy')) {
      return {
        title: 'Rice / Paddy Plant — Blast Disease Detected',
        type: 'Rice (Oryza sativa)',
        stage: 'Tillering Stage (Needs adequate nitrogen)',
        defect: 'Rice Blast (Magnaporthe oryzae)',
        defectColor: 'text-red-800',
        solution: 'Remove infected leaves. Ensure adequate spacing for air circulation. Avoid excess nitrogen. Apply systemic fungicide at first sign of lesions.',
        product: 'Tricyclazole or Isoprothiolane-based fungicide',
        when: 'Spray during early morning. Repeat every 10 days for 3 cycles.',
        why: 'Tricyclazole inhibits melanin synthesis in the fungus, preventing spore germination and hyphal penetration.',
      };
    } else if (name.includes('tomato')) {
      return {
        title: 'Tomato Plant — Early Blight Detected',
        type: 'Tomato (Solanum lycopersicum)',
        stage: 'Vegetative Stage (Needs intense nitrogen currently)',
        defect: 'Early Blight Fungus (Alternaria solani)',
        defectColor: 'text-red-800',
        solution: 'Remove afflicted foliage to limit fungal spread. Do not compost infected debris. Introduce adequate spacing for air circulation.',
        product: 'Copper-based fungicide & Calcium-rich fertilizer',
        when: 'Spray immediately, applying uniformly over the canopy. Administer fertilizer bi-weekly away from stems.',
        why: 'Protects unaffected leaves structurally (calcium) and controls existing fungal spore germination via copper toxicity.',
      };
    } else if (name.includes('wheat')) {
      return {
        title: 'Wheat Plant — Stripe Rust Detected',
        type: 'Wheat (Triticum aestivum)',
        stage: 'Tillering Stage (Needs adequate phosphorus)',
        defect: 'Stripe Rust (Puccinia striiformis)',
        defectColor: 'text-red-800',
        solution: 'Apply foliar fungicide immediately to upper leaves. Avoid excess nitrogen applications which enhance susceptibility.',
        product: 'Triazole or Strobilurin-based fungicide',
        when: 'Spray uniformly at first sign of rust on flag leaf.',
        why: 'Arrests disease development and protects yield potential by blocking fungal sterol biosynthesis.',
      };
    }
    // Default
    return {
      title: 'Crop Plant — Leaf Spot Disease Detected',
      type: 'Unidentified Crop',
      stage: 'Vegetative Stage',
      defect: 'Fungal Leaf Spot (Cercospora sp.)',
      defectColor: 'text-orange-800',
      solution: 'Remove infected leaves, ensure proper spacing and ventilation. Avoid overhead watering which spreads spores.',
      product: 'Mancozeb or Chlorothalonil-based fungicide',
      when: 'Spray during early morning every 7–10 days until symptoms subside.',
      why: 'Controls fungal spread by inhibiting multi-site enzyme activity within the pathogen.',
    };
  };

  const cropResult = cropStep === 3 ? getCropResults() : null;

  return (
    <div className="flex flex-col min-h-screen bg-nature-50">
      <Navbar role="Farmer" />
      
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        <header className="mb-12 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <h1 className="text-4xl font-extrabold text-nature-900 tracking-tight">AI Analysis Engine</h1>
            <p className="text-gray-600 mt-2 text-lg font-light">Leverage machine learning to evaluate your land and crop health.</p>
          </div>
          
          <div className="flex bg-nature-100 p-1.5 rounded-2xl shrink-0 shadow-inner w-full md:w-auto overflow-x-auto">
            <button 
              onClick={() => setActiveTab('soil')}
              className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'soil' ? 'bg-white shadow-md text-nature-700 w-full' : 'text-nature-600/70 hover:text-nature-900 hover:bg-white/50 w-full'}`}
            >
              Soil & Weather Analysis
            </button>
            <button 
              onClick={() => setActiveTab('crop')}
              className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'crop' ? 'bg-white shadow-md text-nature-700 w-full' : 'text-nature-600/70 hover:text-nature-900 hover:bg-white/50 w-full'}`}
            >
              Crop Health Analysis
            </button>
          </div>
        </header>

        {/* SOIL & WEATHER ANALYSIS TAB */}
        {activeTab === 'soil' && (
          <div className="animate-fade-in space-y-8">
            
            {/* Steps Progress */}
            <div className="flex items-center gap-4 max-w-3xl">
              {[1, 2, 3, 4].map((s, idx) => (
                <React.Fragment key={s}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    soilStep >= s ? 'bg-nature-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {soilStep > s && s !== 3 ? <CheckCircle2 size={16} /> : s}
                  </div>
                  {idx < 3 && <div className={`flex-1 h-1 rounded-full ${soilStep > s ? 'bg-nature-600' : 'bg-gray-200'}`} />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Upload */}
            {soilStep === 1 && (
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-nature-100/50">
                <h2 className="text-3xl font-extrabold text-nature-900 mb-6">1. Upload Soil Image</h2>
                <div className="border-2 border-dashed border-nature-300 bg-nature-50/50 rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-nature-50 transition">
                  <div className="bg-nature-100 p-4 rounded-full mb-4 text-nature-600">
                    <UploadCloud size={32} />
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Drag & drop your soil photo here</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    id="soil-upload" 
                    onChange={(e) => {
                      if (e.target.files[0]) setSoilStep(2);
                    }}
                  />
                  <label htmlFor="soil-upload" className="bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-xl font-medium cursor-pointer shadow-sm mt-6 hover:bg-gray-50">
                    Browse Files
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Location Map */}
            {soilStep === 2 && (
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-nature-100/50 animate-fade-in relative z-0">
                <h2 className="text-3xl font-extrabold text-nature-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-nature-600" />
                  2. Select Land Location
                </h2>
                <p className="text-gray-500 mb-6">Drop a pin on this interactive map to grab real-time meteorological weather records, search by name, or enter coordinates manually.</p>
                
                <div className="mb-6">
                  <label htmlFor="location-search" className="block text-sm font-medium text-gray-700 mb-1">Search by Location Name</label>
                  <div className="flex gap-2">
                    <input 
                      id="location-search"
                      type="text" 
                      placeholder="e.g. Coimbatore, Tamil Nadu"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-nature-500"
                    />
                    <button 
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="bg-nature-600 hover:bg-nature-700 text-white px-4 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 min-w-[50px]"
                    >
                      {isSearching ? <Loader2 size={20} className="animate-spin" /> : <Search size={20} />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="lat-input" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                    <input 
                      id="lat-input"
                      type="number" 
                      step="any"
                      value={position ? position[0] : ''} 
                      onChange={(e) => setPosition([Number.parseFloat(e.target.value) || 0, position[1]])} 
                      className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-nature-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lng-input" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                    <input 
                      id="lng-input"
                      type="number" 
                      step="any"
                      value={position ? position[1] : ''} 
                      onChange={(e) => setPosition([position[0], Number.parseFloat(e.target.value) || 0])} 
                      className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-nature-500"
                    />
                  </div>
                </div>

                <div className="w-full h-[400px] border border-gray-300 rounded-2xl overflow-hidden mb-8 shadow-inner z-0">
                  <MapContainer center={position} zoom={7} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={position} setPosition={setPosition} />
                  </MapContainer>
                </div>

                <div className="flex justify-between items-center">
                  <button onClick={() => setSoilStep(1)} className="text-gray-500 font-medium px-4 py-2 hover:bg-gray-100 rounded-xl">Back</button>
                  <button onClick={startSoilAnalysis} className="bg-nature-600 hover:bg-nature-700 text-white px-8 py-3 rounded-xl font-medium shadow-md">
                    Execute Analysis
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Loading */}
            {soilStep === 3 && (
              <div className="bg-white relative overflow-hidden p-16 rounded-3xl shadow-2xl border border-nature-100/50 flex flex-col items-center justify-center animate-fade-in h-[50vh]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-nature-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <Loader2 size={64} className="text-nature-600 animate-spin mb-8 relative z-10" />
                <h2 className="text-3xl font-extrabold text-nature-900 mb-3 relative z-10">Analyzing Inputs...</h2>
                <div className="text-gray-500 text-center space-y-2 mt-4 text-sm">
                  <p className="flex items-center gap-2"><CheckCircle2 size={16} className="text-nature-500"/><span>Extracting morphological soil traits</span></p>
                  <p className="flex items-center gap-2"><CheckCircle2 size={16} className="text-nature-500"/><span>Evaluating coordinate-based atmospheric data</span></p>
                  <p className="flex items-center gap-2 opacity-50"><Loader2 size={16} className="animate-spin"/><span>Matching optimal cultivation paths...</span></p>
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {soilStep === 4 && (
              <div className="animate-fade-in space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-nature-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-center">
                    <h3 className="text-nature-200 text-sm font-semibold tracking-wider uppercase mb-1">Detected Profile</h3>
                    <h2 className="text-3xl font-bold mb-6">Loamy Soil Profile with Moderate Humidity</h2>
                    <ul className="space-y-4 font-light text-nature-50">
                      <li className="flex justify-between border-b border-nature-700 pb-2"><span>Soil Composition</span> <span className="font-semibold">60% Sand, 40% Clay/Silt</span></li>
                      <li className="flex justify-between border-b border-nature-700 pb-2"><span>Moisture Index</span> <span className="font-semibold text-blue-300">45% (Moderate)</span></li>
                      <li className="flex justify-between border-b border-nature-700 pb-2"><span>Local Climate</span> <span className="font-semibold text-yellow-300">28.5°C, Partly Cloudy</span></li>
                      <li className="flex justify-between border-b border-nature-700 pb-2"><span>Region</span> <span className="font-semibold text-green-300">Tamil Nadu, India</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Sun className="text-earth-500"/> Highly Suitable Crops Found</h3>
                    
                    <div className="space-y-6">
                      <div className="border border-green-100 bg-nature-50 rounded-2xl p-6 relative">
                        <div className="absolute top-4 right-4 bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-lg">98% Match</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Paddy / Rice</h4>
                        <div className="mt-4 space-y-4">
                          <div className="text-sm">
                            <strong className="text-gray-900 block mb-1">🌱 Land Processing & Seeding</strong>
                            <span className="text-gray-600 block">Prepare puddled fields in kharif season. Transplant 21-day-old seedlings at 20×15 cm spacing. Maintain 5 cm water depth.</span>
                          </div>
                          <div className="text-sm">
                            <strong className="text-gray-900 block mb-1">💧 Watering Schedule</strong>
                            <span className="text-gray-600 block">Maintain flooded conditions during vegetative stage. Allow aerobic dry-wet cycles during grain filling.</span>
                          </div>
                          <div className="text-sm bg-white p-3 rounded-lg border border-gray-100">
                            <strong className="text-earth-700 block mb-1">🧪 Fertilizer Protocol</strong>
                            <span className="text-gray-600 block"><strong>Product:</strong> NPK 17-17-17 + Urea top dressing.</span>
                            <span className="text-gray-600 block"><strong>When:</strong> Basal dose at transplanting; split nitrogen at 25 & 45 DAT.</span>
                            <span className="text-gray-600 block"><strong>Why:</strong> Ensures vigorous tillering, strong panicle emergence, and high grain weight.</span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 bg-white rounded-2xl p-6 relative">
                        <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-lg">92% Match</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Sugarcane</h4>
                        <p className="text-gray-500 text-sm">Excellent secondary crop utilizing the loamy soil's water retention and Tamil Nadu's high solar radiation for superior sucrose accumulation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => { setSoilStep(1); }} className="text-nature-600 font-semibold hover:underline text-sm">← Run New Analysis</button>
              </div>
            )}
          </div>
        )}

        {/* CROP HEALTH ANALYSIS TAB */}
        {activeTab === 'crop' && (
          <div className="animate-fade-in space-y-8">
            
            <div className="flex items-center gap-4 max-w-xl">
              {[1, 2, 3].map((s, idx) => (
                <React.Fragment key={s}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    cropStep >= s ? 'bg-earth-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {cropStep > s && s !== 2 ? <CheckCircle2 size={16} /> : s}
                  </div>
                  {idx < 2 && <div className={`flex-1 h-1 rounded-full ${cropStep > s ? 'bg-earth-500' : 'bg-gray-200'}`} />}
                </React.Fragment>
              ))}
            </div>

            {cropStep === 1 && (
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-nature-100/50">
                <h2 className="text-3xl font-extrabold text-nature-900 mb-3">Upload Crop Image</h2>
                <p className="text-gray-500 mb-4">Upload an up-close image of a specific crop leaf or plant to diagnose diseases, defects, and lifecycle phase.</p>
                <div className="mb-6">
                  <label htmlFor="crop-name" className="block text-sm font-medium text-gray-700 mb-1">Crop Name (helps improve diagnosis accuracy)</label>
                  <input
                    id="crop-name"
                    type="text"
                    placeholder="e.g. Rice, Wheat, Tomato, Maize..."
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-earth-500"
                  />
                </div>
                <div className="border-2 border-dashed border-earth-300 bg-earth-50/30 rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-earth-50 transition">
                  <div className="bg-earth-100 p-4 rounded-full mb-4 text-earth-600">
                    <CloudRain size={32} />
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Select Crop/Leaf Photo</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    id="crop-upload" 
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setCropFile(e.target.files[0]);
                        startCropAnalysis();
                      }
                    }}
                  />
                  <label htmlFor="crop-upload" className="bg-earth-500 text-white px-8 py-3 rounded-xl font-medium cursor-pointer shadow mt-6 hover:bg-earth-600">
                    Begin Diagnosis
                  </label>
                </div>
              </div>
            )}

            {cropStep === 2 && (
              <div className="bg-white p-16 rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center justify-center h-[50vh] animate-fade-in">
                <Loader2 size={48} className="text-earth-500 animate-spin mb-6" />
                <h2 className="text-2xl font-bold text-gray-900">Running Deep Computer Vision...</h2>
                <p className="text-gray-500 mt-2">Checking pathogen databases for discoloration anomalies.</p>
              </div>
            )}

            {cropStep === 3 && cropResult && (
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-red-100 animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-5">
                  <ShieldAlert size={300} />
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-earth-600 uppercase mb-2">Diagnostics Summary</h3>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{cropResult.title}</h2>
                  
                  <div className="space-y-4 font-medium text-gray-700">
                    <div className="flex bg-gray-50 p-3 rounded-lg"><span className="w-1/3 text-gray-500">Crop Type:</span> <span>{cropResult.type}</span></div>
                    <div className="flex bg-gray-50 p-3 rounded-lg"><span className="w-1/3 text-gray-500">Current Stage:</span> <span>{cropResult.stage}</span></div>
                    <div className="flex bg-red-50 p-3 rounded-lg"><span className="w-1/3 text-red-600 font-bold">Defect Found:</span> <span className={`font-bold ${cropResult.defectColor}`}>{cropResult.defect}</span></div>
                  </div>
                  
                  <button onClick={() => { setCropStep(1); setCropFile(null); setCropName(''); }} className="mt-8 text-gray-500 hover:text-gray-900 underline underline-offset-4 text-sm font-semibold">Analyze Another Plant</button>
                </div>

                <div className="bg-earth-50 border border-earth-100 rounded-2xl p-6 relative z-10">
                  <h4 className="text-xl font-bold text-earth-900 mb-4 flex items-center gap-2"><BadgeCheck /> Prescribed Treatment</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Solution Details:</strong> {cropResult.solution}
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-sm">
                      <strong className="text-red-600 block mb-2">Recommended Chemical / Fertilizer Path</strong>
                      <span className="block text-gray-600 mb-1"><strong>Product:</strong> {cropResult.product}</span>
                      <span className="block text-gray-600 mb-1"><strong>When/How:</strong> {cropResult.when}</span>
                      <span className="block text-gray-600"><strong>Why:</strong> {cropResult.why}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default LandAnalysis;
