import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Search, ArrowLeft, ChevronRight, Droplet, Sun, Leaf } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Advanced Paddy / Rice Cultivation",
    category: "Grains",
    date: "Mar 25, 2026",
    readTime: "10 min read",
    excerpt: "Rice is the staple food of Tamil Nadu covering over 2 million hectares annually. Discover scientifically-backed practices from TNAU for maximum yield across all agro-climatic zones.",
    image: "/images/paddy.jpg",
    content: [
      {
        heading: "Introduction — Why Paddy Dominates Tamil Nadu",
        body: "Paddy (Oryza sativa) is the undisputed king crop of Tamil Nadu. Districts like Thanjavur, Tiruchirappalli, Cuddalore, Nagapattinam, and Tirunelveli derive their agricultural identity from rice cultivation. The Cauvery delta alone produces three crop cycles per year, making Tamil Nadu the fourth-largest rice producer in India. The crop benefits from the state's alluvial deltaic soils, monsoon rhythms, and the extensive network of irrigation channels dating back to ancient Chola-era hydraulic engineering.",
        img: "/images/agri_1.jpg",
      },
      {
        heading: "Recommended Varieties by Season",
        body: "For Kuruvai (June–September): ADT 36, CO 47, and White Ponni are the preferred choices. For Samba (August–January): ADT 43, BPT 5204 (Samba Mahsuri), and TRY 1 are favored for their superior grain quality and cooking properties. CR 1009 (Swarna) and IR 64 are widely grown for their disease resistance. The System of Rice Intensification (SRI) method using younger, single seedlings at wider spacing (25x25 cm) has demonstrated 20–40% yield increases in on-farm trials conducted by TNAU Coimbatore.",
      },
      {
        heading: "Land Preparation and Nursery Management",
        body: "Deep plow and puddle the field to create an anaerobic layer that suppresses weeds and prevents percolation losses. For 1 hectare of main field, prepare 500–750 sq.m. of nursery bed. Apply 100 kg of well-decomposed FYM to the nursery. Seed rate: 60–80 kg/ha for transplanting. Treat seeds with Pseudomonas fluorescens (10g/kg) and Trichoderma viride (4g/kg) before sowing to protect against seed-borne pathogens including blast, sheath blight, and false smut.",
        img: "/images/agri_6.jpg",
      },
      {
        heading: "Transplanting, Spacing, and Water Management",
        body: "Transplant 25-day-old seedlings using the straight-row method at 20x15 cm spacing. Maintain 2–5 cm standing water during the first two weeks for root establishment. SRI method requires maintaining soil saturation (not flooding) using Alternate Wetting and Drying (AWD) — insert a PVC pipe with holes into the soil and re-irrigate only when the water level inside drops below 15 cm. AWD reduces water consumption by 30–40% while maintaining or even improving yields.",
      },
      {
        heading: "Integrated Nutrient Management",
        body: "Recommended fertilizer dose: 100:50:50 kg N:P₂O₅:K₂O per hectare. Split application — 50% N as basal during puddling, 25% N at active tillering (21 DAT), and 25% N at panicle initiation (45 DAT). Apply zinc sulphate (25 kg/ha) once every three seasons in zinc-deficient soils — a common issue in deltaic Tamil Nadu. Supplement with in-situ green manuring using Sesbania (Dhaincha) at 6.25 kg/ha, ploughed down 25 days before transplanting, supplying 60–80 kg N/ha biologically.",
        img: "/images/agri_3.jpg",
      },
      {
        heading: "Pest Control and Disease Management",
        body: "Key pests: Stem borer (Scirpophaga incertulas), Brown Planthopper (BPH) (Nilaparvata lugens), Gall midge (Orseolia oryzae). Apply Carbofuran 3G at 33 kg/ha at transplanting for soil-borne pests. For BPH, spray Imidacloprid 17.8 SL (0.3 ml/litre) or BPMC 50 EC. For Blast disease (Magnaporthe oryzae) — the most economically devastating paddy fungal disease — apply Tricyclazole 75 WP (0.6 g/litre) at first symptom appearance. Maintain a field-level monitoring diary using sticky yellow traps (1/ha) and pheromone lures for early detection.",
      },
      {
        heading: "Harvesting, Post-Harvest, and Value Addition",
        body: "Paddy reaches physiological maturity in 110–145 days depending on variety. Golden-yellow color of 80–85% grains indicates harvest readiness. Harvest at 20–22% moisture content for best milling recovery. Mechanical combine harvesting reduces harvest losses from 8–10% (manual) to 2–3%. Dry grain to 14% moisture for safe storage. For value addition: parboiled rice commands ₹3–5/kg premium. Rice bran oil extraction, puffed rice manufacturing, and organic rice certification under APOF or INDOCERT can provide 2–3× market premiums.",
      },
      {
        heading: "Government Schemes and Subsidies (Central & State)",
        body: "PM-KISAN: ₹6,000/year direct income support in 3 installments. PMFBY (Pradhan Mantri Fasal Bima Yojana): Paddy insurance at 2% premium — covers losses from natural calamities, pests, and diseases. Tamil Nadu Adi Dravidar Subsidy: 100% input subsidy for SC/ST paddy farmers including seeds, fertilizers, and micro-nutrients. TNAU e-Krishi: Free mobile soil testing and fertilizer recommendation service. CM's Comprehensive Crop Insurance: Covers crop loss up to ₹1,00,000/ha for paddy farmers in Tamil Nadu.",
      },
    ],
  },
  {
    id: 2,
    title: "High-Yield Tomato Cultivation Guide",
    category: "Vegetables",
    date: "Mar 20, 2026",
    readTime: "9 min read",
    excerpt: "Tomato is Tamil Nadu's most commercially prime vegetable crop. This guide covers variety selection, drip fertigation, and disease-proofing strategies from Krishnagiri to Coimbatore.",
    image: "/images/tomato.jpg",
    content: [
      {
        heading: "Tomato's Strategic Importance in Tamil Nadu",
        body: "Tomato (Solanum lycopersicum) ranks as Tamil Nadu's most commercially valuable vegetable crop, with major cultivation hubs in Krishnagiri, Dharmapuri, Salem, Coimbatore, and Vellore districts. The state produces approximately 18 lakh tonnes annually, contributing significantly to national supply. Tamil Nadu's diversified agro-climatic zones allow year-round cultivation — from June–September (Kharif) to October–January (Rabi) and February–May in dry season under protected cultivation.",
        img: "/images/agri_9.jpg",
      },
      {
        heading: "Variety Selection and Disease Resistance",
        body: "Open Pollinated Varieties (OPVs): PKM 1, CO 3, Arka Vikas, and Pusa Ruby are suitable for small farms with moderate yield potential (25–35 t/ha). F1 Hybrids: Abhilash, US440, Namdhari NS585, and Syngenta Osiris offer higher yields (40–60 t/ha) with better shelf life. For Tomato Leaf Curl Virus (TLCV) endemic areas — particularly in dry-zone districts — choose TLCV-resistant hybrids like Naveen Plus or Ruchi. Resistance to Fusarium wilt is critical for farms with a disease history.",
      },
      {
        heading: "Nursery, Transplanting, and Field Preparation",
        body: "Raise seedlings in pro-trays (98-cell) using cocopeat:vermicompost:sand (3:1:1) media for 25–30 days. Drench nursery trays with Metalaxyl to prevent damping-off. Field pH should be 6.0–7.0; acidic soils need lime treatment. Apply 25 t/ha FYM two weeks before transplanting. Plant at 60×45 cm spacing for determinate varieties or 75×60 cm for indeterminate. Install bamboo stakes (1.5 m height) for tall varieties to prevent lodging and improve air circulation.",
        img: "/images/agri_11.jpg",
      },
      {
        heading: "Precision Drip Irrigation and Fertigation",
        body: "Tomato requires 600–800 mm of water per crop cycle. Drip irrigation at 60% of pan evaporation eliminates foliar wetting, dramatically reducing fungal disease incidence. Install inline drip tapes at 30–45 cm emitter spacing. Fertigation schedule: Week 1–2 (establishment): 19:19:19 NPK (5 kg/1000 plants); Weeks 3–5 (vigorous growth): 13:0:45 (high K); Flowering onwards: Calcium nitrate (5 kg/ha) weekly to prevent blossom end rot; Fruiting: 0:0:50 (potassium sulphate) for sweetness and fruit firmness.",
      },
      {
        heading: "Integrated Pest and Disease Management",
        body: "Whitefly (Bemisia tabaci) is the primary TLCV vector — manage with Imidacloprid 17.8 SL (0.3 ml/litre) or Thiamethoxam 25 WG. Use silver/white reflective mulch to deter whiteflies by 60–70%. Early Blight (Alternaria solani): Mancozeb 75 WP (2g/l) preventively every 10 days. Late Blight (Phytophthora infestans): Metalaxyl 8% + Mancozeb 64% WP (2.5g/l) once symptoms appear. Fruit borer (Helicoverpa armigera): Pheromone traps (5/ha) + Spinosad 45 SC (0.3 ml/l) as spray. Bacterial Canker (Clavibacter michiganensis): Copper oxychloride spray (2g/l) preventively.",
        img: "/images/agri_8.jpg",
      },
      {
        heading: "Harvesting, Grading, and Market Value Addition",
        body: "Tomatoes reach first harvest 60–75 days after transplanting. Harvest every 3–4 days for fresh market; every 7 days for processing. Harvest at pink-red stage for long-distance transport; full red for local markets. Grading standards: Grade A (>60mm dia), Grade B (40–60mm), Grade C (under 40mm). For premium markets: supply superchains like BigBasket/Ninjacart directly to avoid APMC commission (8–12%). Ketchup, puree, and sun-dried tomato manufacturing under MSME scheme provide 3–4× raw price return.",
      },
      {
        heading: "Government Assistance and Subsidies",
        body: "Tamil Nadu Horticulture Department: 50% subsidy on drip irrigation installation (max ₹55,000/ha for SC/ST). Seeds/Seedlings: 50% subsidy on certified hybrid seeds under MIDH scheme. PMFBY: Tomato insurance at 5% premium from farmers — covers frost, hailstorm, pest outbreaks. National Horticulture Mission (NHM): Subsidy on shade nets, mulch film, and staking materials up to ₹40,000/ha. Farmer Producer Organizations (FPOs) registered under Tamil Nadu Co-operative Society Act get additional 25% price premium via direct procurement.",
      },
    ],
  },
  {
    id: 3,
    title: "Organic Rice: Certification to Premium Market",
    category: "Grains",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    excerpt: "Organic rice commands 2–3× market price. Learn the full transition pathway from conventional to certified organic paddy, including APOF certification, biofertilizers, and export opportunities.",
    image: "/images/organic.jpg",
    content: [
      {
        heading: "The Organic Opportunity in India",
        body: "India's organic food market is growing at 22% CAGR, reaching ₹9,000 crore in 2024. Organic rice is the largest segment, driven by export demand from Japan, the European Union, and the United States. Tamil Nadu has positioned itself as a leader in organic agriculture with bodies like APOF (Association for Promotion of Organic Farming) and INDOCERT providing third-party certification recognized globally. The conversion period from conventional to certified organic is 3 years — but interim premium prices begin from Year 1 through Tamil Nadu's 'Naturally Grown' state certification.",
        img: "/images/agri_9.jpg",
      },
      {
        heading: "Soil Transition and Building Organic Matter",
        body: "The foundation of organic farming is living soil. Apply 10 t/ha well-decomposed FYM 3 weeks before planting. Use Vermicompost at 5 t/ha for faster microbial colonization. In-situ green manuring with Sesbania rostrata fixes 80–110 kg N/ha biologically, fully replacing synthetic nitrogen in Year 2. Panchagavya — a biostimulant made from cow-based products — applied at 3% foliarly improves crop vigour and stress tolerance. Microbial consortia (VAM fungi) at 2.5 kg/ha dramatically improve phosphorus uptake from organic sources.",
        img: "/images/agri_1.jpg",
      },
      {
        heading: "Biofertilizer Application Protocol",
        body: "Seed treatment (before sowing): Azospirillum (200g/10 kg seed) + Phosphobacteria (200g) + Potash Mobilizing Bacteria (200g) — air dry in shade for 30 minutes before sowing. Soil application (at transplanting): Blue Green Algae (Anabaena azollae) at 10 kg/ha mixed with 50 kg of soil and broadcast. Root dipping: Soak seedling roots in Azospirillum suspension (2 kg/40 litres) for 15 minutes before transplanting. These biofertilizer treatments collectively reduce chemical nitrogen requirements by 25–30% even in transitional organic fields.",
      },
      {
        heading: "Organic Weed and Pest Management",
        body: "Conical weeder + hand weeding at 20 DAT and 40 DAT are the primary weed management strategies. Cono-weeder reduces weed pressure by 85% in straight-row transplanted paddy. Pest management: NSKE (Neem Seed Kernel Extract) at 5% for sucking pests. Pheromone traps (5/ha) for stem borer monitoring and mass trapping. Trichogramma chilonis (1.5 lakh/ha) egg parasitoid released at panicle initiation controls lepidopteran egg masses. Light traps (1/ha) attract and kill adult moths. These methods collectively prevent yield loss of 15–25% without any synthetic chemistry.",
        img: "/images/agri_6.jpg",
      },
      {
        heading: "APOF Certification Process and Timeline",
        body: "Year 1 — Conversion: Register with APOF or INDOCERT (₹3,500–₹8,000 initial fee). Maintain detailed farm diary of all inputs. Year 1 product sold as 'In Conversion' at 20–30% premium. Year 2 — Inspection: Field inspection by certification body. Begin eliminating all synthetic inputs. Year 3+ — Full Certification: Full organic certificate issued. Product can be labeled 'Certified Organic' and exported. Annual renewal: ₹2,000–₹5,000 depending on area. Group certification through FPOs cuts individual costs by 80%.",
      },
      {
        heading: "Premium Market Channels and Export Opportunities",
        body: "Domestic: BigBasket Organic, Nature's Basket, ITC e-Choupal, and local organic stores pay ₹80–₹140/kg for certified organic rice vs ₹25–₹35/kg conventional. Export: APEDA (Agricultural and Processed Food Products Export Development Authority) provides 50% freight subsidy for organic exports. Major buyers: Japan, EU, USA, UAE. Tamil Nadu's GI-tagged varieties — Mappillai Samba, Seeraga Samba, Kichili Samba — command extraordinary international premiums of ₹200–₹400/kg. These traditional varieties combined with organic certification create the highest-value rice farming model available to Tamil Nadu farmers.",
      },
    ],
  },
  {
    id: 4,
    title: "Sugarcane Yield Optimization for Tamil Nadu",
    category: "Cash Crops",
    date: "Mar 5, 2026",
    readTime: "9 min read",
    excerpt: "Tamil Nadu is the third-largest sugarcane producer nationally. Master ratoon management, drip fertigation, and Co 0212 variety selection for record tonnage in South Indian agro-climatic conditions.",
    image: "/images/sugarcane.jpg",
    content: [
      {
        heading: "Sugarcane's Economic Profile in Tamil Nadu",
        body: "Sugarcane (Saccharum officinarum) occupies approximately 3.5 lakh hectares in Tamil Nadu, concentrated in Erode, Salem, Coimbatore, Tiruvannamalai, and Vellore districts. The crop directly supports 42 operational sugar mills and a vast jaggery cottage industry. Average state yield is 95–100 t/ha, significantly below the national potential of 120–140 t/ha achievable with modern techniques. This gap represents a huge income opportunity for farmers willing to adopt optimized practices.",
        img: "/images/agri_11.jpg",
      },
      {
        heading: "Selecting the Right Variety",
        body: "Co 86032: The workhorse variety — excellent in both fresh planting and ratoons, moderate sugar content (10.5%), adaptable across all Tamil Nadu districts. Co 0212: New high-yielding variety with superior CCS% (11.2–11.8%) per the ICAR Sugarcane Breeding Institute, Coimbatore. Yields 120–140 t/ha under optimized conditions. CoSi 96071: Best for water-limited areas; drought-tolerant with good ratoon capability. CoC 671 (Attur Rob): Preferred in Salem and Krishnagiri for its rich juice content and early maturity (10 months instead of 12). Avoid red rot-susceptible varieties in fields with Colletotrichum falcatum history.",
      },
      {
        heading: "Advanced Planting Techniques",
        body: "Trench method: Dig trenches 25–30 cm deep at 90 cm row spacing. Apply FYM (50 t/ha) + Filter cake (10 t/ha) as basal organic inputs. Plant 3-budded setts at 30–45° angle using two-budded overlap for better germination. Bud chip technology: Planting single buds wrapped in cocopeat reduces seed cane requirement by 75% and eliminates disease transmission. Drip irrigation immediately after planting ensures >90% germination. Gap filling: Monitor germination at 25 days and fill gaps within 30 days for uniform stand.",
        img: "/images/agri_3.jpg",
      },
      {
        heading: "Ratoon Management for Maximum Returns",
        body: "First ratoon produces 85–90% of plant crop yield with zero planting cost — making it economically the most attractive crop. Immediately after plant crop harvest: Trash management (don't burn), apply FYM, and drench with bavistin for borer control. Nitrogen dose for ratoon: 275 kg N/ha (25% more than plant crop) split 4 ways. Earthing up at 60 DAH (days after harvest) is critical for mechanical support. Trash mulching of harvested leaf material at 10 t/ha retains soil moisture and suppresses weeds — eliminates 2–3 costly manual weedings. Maximum 3 ratoon cycles are recommended; beyond that, soil structure degrades.",
      },
      {
        heading: "Integrated Nutrient and Water Management",
        body: "Chemical fertilizer: 275:75:75 kg NPK/ha for plant crop; 300:75:90 for ratoon. Drip irrigation in sugarcane reduces water use by 40% vs flood irrigation while increasing CCS% (commercial cane sugar percent) due to uniform soil moisture. Drip fertigation schedule: Basal (30–40 DAP): 19:19:19 NPK; Grand growth (60–120 DAP): Urea + MOP alternate monthly; Maturation (120 DAP onwards): Stop nitrogen, continue potassium. Foliar spray of silica gel (0.5%) at 60 and 90 DAP improves stalk hardness and reduces lodging losses by 30%.",
        img: "/images/agri_6.jpg",
      },
      {
        heading: "Disease Control and Harvesting",
        body: "Red rot: Use certified disease-free setts + Carbendazim sett treatment (0.1%). If red rot is detected (pink/red internal coloration of stalk), rogue immediately and destroy affected plants. Smut (Ustilago scitaminea): Use resistant varieties and spray Propiconazole 25 EC (1 ml/l) preventively. Harvest at 12 months for optimum CCS%. Early morning harvesting (before 9 AM) retains maximum sucrose in the stalk. Deliver to mill within 24 hours to prevent sucrose inversion. Jaggery alternative: If mill prices are low, process in field-side crushers for jaggery — returns ₹60–₹80/kg vs ₹30–₹35/kg from mill.",
      },
      {
        heading: "Government Subsidies for Sugarcane Farmers",
        body: "Fair & Remunerative Price (FRP): Central government mandates minimum ₹340/quintal for sugarcane delivered to mills (2025–26). Tamil Nadu SAP (State Advised Price): Often ₹10–₹20/quintal above FRP. TNAU Sugarcane Crop Advisory: Free SMS alerts for irrigation, fertilization, and pest management timing. National Sugar Institute Loan Scheme: Zero-interest loans up to ₹2 lakh for sugarcane pre-financing via Tamil Nadu Cooperative Sugar Federations. Drip irrigation subsidy: 75% subsidy (100% for SC/ST) under TNAU-TN government scheme for sugarcane fields.",
      },
    ],
  },
  {
    id: 5,
    title: "Smart Irrigation: Drip, Sprinkler & IoT Water Management",
    category: "Technology",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    excerpt: "Tamil Nadu's groundwater is critically over-extracted. This guide covers precision irrigation systems — from drip design to IoT soil moisture sensors — that cut water use by 40–60% while boosting yields.",
    image: "/images/irrigation.jpg",
    content: [
      {
        heading: "The Coming Water Crisis in Tamil Nadu Agriculture",
        body: "Agriculture consumes 72% of Tamil Nadu's total freshwater. Groundwater depletion rates in Coimbatore (-1.5m/year), Tirupur (-2.1m/year), and Ramanathapuram (-1.8m/year) are among the most severe nationally. Tamil Nadu has only 17% of the national average per capita water availability. Without irrigation modernization, the state's agricultural output will decline 25–35% by 2040 according to TNAU water science projections. Precision irrigation is not optional — it is an existential requirement for sustainable farming.",
        img: "/images/agri_1.jpg",
      },
      {
        heading: "Drip Irrigation System Design and Installation",
        body: "Drip irrigation delivers water at 1–4 litres/hour directly to the root zone through emitters. System components: Header unit (filter + fertilizer injector + pressure gauge + control valves) → Main line (75mm HDPE) → Sub-main (50–63mm) → Lateral lines (12–16mm LLDPE with inline emitters at 30, 45, or 60 cm spacing). Pressure requirement: 1.0–1.5 kg/cm². Filtration: 3-stage (screen + disc + sand) for wells with suspended particles. Fertigation: Venturi injector or fertilizer tank with bypass enables nutrient delivery with 85–95% use efficiency vs 35–45% for broadcast application.",
        img: "/images/agri_3.jpg",
      },
      {
        heading: "Sprinkler Systems for Field and Vegetable Crops",
        body: "Mini-sprinklers (2 litres/min, 5m radius) are ideal for vegetables, spices, and nurseries. Semi-permanent sprinklers (lateral-move systems) suit groundnut, maize, sunflower, and pulses. Operating pressure: 2.0–2.5 kg/cm². Rotation speed: 1.5–2 RPM for uniform distribution coefficient of uniformity >85%. Irrigate in the early morning (5–9 AM) to minimize evaporation losses (25–30% reduction vs midday irrigation). Avoid evening irrigation — wet foliage overnight dramatically increases fungal disease incidence in vegetables.",
      },
      {
        heading: "IoT Soil Moisture Monitoring Systems",
        body: "Capacitance-based soil moisture sensors (e.g., Decagon 5TM, Sentek EnviroSMART) continuously monitor volumetric water content at multiple depths (15 cm, 30 cm, 60 cm). Data transmitted via GPRS/LoRa to a cloud dashboard accessible on any smartphone. Trigger irrigation automatically when root zone moisture drops below crop-specific threshold — typically 50% of Field Capacity (FC). Systems available at ₹2,500–₹15,000/unit depending on features. TNAU digital agriculture project provides subsidized IoT kits to AICRIP trial farmers. Historical data helps optimize irrigation timing based on local evapotranspiration patterns.",
        img: "/images/agri_9.jpg",
      },
      {
        heading: "Solar-Powered Pump Systems",
        body: "Solar pump schemes under PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthan Mahabhiyan) provide 3–5 HP solar pumps to farmers at 10% cost (30% central subsidy + 30% state subsidy + 30% loan). Eliminates electricity bills of ₹30,000–₹80,000/year per pump. 3 HP solar pump can irrigate 1–2 acres via drip system. Excess power sold to grid at ₹3.14/unit in Tamil Nadu under net metering. System lifespan: 25 years with minimal maintenance. Tamil Nadu's solar irradiance of 5.2–6.0 kWh/m²/day makes it one of India's best states for this scheme.",
      },
      {
        heading: "Government Schemes for Irrigation Infrastructure",
        body: "Tamil Nadu Drip/Sprinkler Subsidy: SC/ST farmers: 100% subsidy on system cost, max ₹1,21,000/ha for drip. General farmers: 75% subsidy. National Mission for Sustainable Agriculture (NMSA): Covers water harvesting structures, farm ponds (100% subsidy for SC/ST). Per Drop More Crop (PDMC) sub-scheme under PMKSY: Central component funding drip in districts with <50% coverage. Micro Irrigation Fund (NABARD): Low-interest lending for irrigation equipment at 7% p.a. Tamil Nadu Water Resource Organization: Free water audit and drip design service for small farmers (<5 acres).",
      },
    ],
  },
  {
    id: 6,
    title: "Mango, Banana, and Citrus Orchard Management",
    category: "Fruits",
    date: "Mar 10, 2026",
    readTime: "10 min read",
    excerpt: "Tamil Nadu's fruit orchards are threatened by invasive pests and climate variability. Master integrated pest management strategies for mango, banana, guava, and acid lime to protect your orchard investment.",
    image: "/images/orchard.jpg",
    content: [
      {
        heading: "Fruit Crop Importance in Tamil Nadu",
        body: "Tamil Nadu is a leading fruit producer, particularly in mango (Dindigul, Krishnagiri), banana (Trichy, Theni, Erode), guava (Coimbatore), and acid lime (Krishnagiri, Dharmapuri). The state's diverse agro-climatic conditions — from coastal to semi-arid to highland zones — allow cultivation of over 40 fruit varieties. Fruit farming generates 3–5× income per hectare compared to field crops, but requires significantly higher investment and management precision.",
        img: "/images/agri_11.jpg",
      },
      {
        heading: "Mango: Pest and Disease Management",
        body: "Mango hopper (Idioscopus clypealis): The single most damaging mango pest. Two sprays of Imidacloprid 17.8 SL (5 ml/10 litre) before flowering and at pea stage prevent >80% crop loss. Fruit fly (Bactrocera dorsalis): Mass trapping using cuelure-baited traps (1/ha) + Spinosad bait spray (Fruit fly lure + Malathion 50 EC, 2ml/l) reduces infestation by 75%. Mango malformation (Fusarium mangiferae): Prune affected panicles and spray Carbendazim (1 g/l). Anthracnose (Colletotrichum gloeosporioides): Spray Mancozeb 75 WP (2g/l) at panicle emergence and repeat 3 times at 10-day intervals.",
        img: "/images/agri_9.jpg",
      },
      {
        heading: "Banana: Variety, Planting, and Disease Control",
        body: "Major varieties: Grand Naine (Cavendish) for export, Robusta for domestic market, Poovan and Karpooravalli for processing. Spacing: 1.8×1.8 m for suckers (Grand Naine) or 2×2 m for traditional varieties. Tissue culture plants: Superior to suckers — virus-free, uniform, and 20–30% higher yield. Panama wilt (Fusarium oxysporum f.sp. cubense): Plant resistant varieties (Grand Naine, Williams) exclusively in affected soils. No chemical cure exists — prevention is the only strategy. Bunchy Top Virus: Rogue and destroy infected plants immediately; control aphid vectors with Dimethoate 30 EC (1.5 ml/l). Banana weevil: Drench with Chlorpyrifos 20 EC (500 ml in 200 l) at planting.",
        img: "/images/agri_6.jpg",
      },
      {
        heading: "Cultural Practices — The Foundation of Orchard Health",
        body: "Lime washing tree trunks annually (Bordeaux mixture 10% suspension): Prevents bark borer entry and sunscald. Pruning dead, diseased, and crossing branches before flowering: Improves air circulation, reduces disease pressure, and directs energy into fruit production. Orchard sanitation: Collect and destroy fallen fruits daily during harvesting period — critical for reducing fruit fly and fungal inoculum. Mulching with paddy straw or dry leaves (10 cm depth) around the tree basin retains moisture and prevents soil-borne disease splash-up. Intercropping with leguminous crops (cowpea, groundnut) in young orchards (1–4 years) improves soil nitrogen and generates interim income.",
      },
      {
        heading: "Value Addition and Export for Fruits",
        body: "Mango: APEDA-registered exporters in Tamil Nadu ship to UAE, UK, and Germany. GI-tagged Alphonso and Banganapalli varieties command ₹150–₹800/dozen. Processing: Mango pulp, pickle, and juice manufacturing qualify for MSME food processing subsidies at 35% of project cost. Banana: Export opportunities through 'Nandhini' banana branding to Sri Lanka and Malaysia. Banana chips manufacturing (₹200–₹300/kg vs ₹12–₹15/kg fresh). Acid lime: Cold-pressed lime oil extraction returns ₹500–₹800/kg. Dehydrated lime powder for pharmaceutical and food industry use at ₹300–₹500/kg.",
        img: "/images/agri_8.jpg",
      },
      {
        heading: "Tamil Nadu Horticulture Dept. Schemes for Fruit Crops",
        body: "Planting material subsidy: 50% on tissue culture banana plantlets, grafted mango saplings, and citrus budded plants from TNHB nurseries. Drip irrigation: 100% subsidy for SC/ST fruit farmers, 75% for others. Plant protection subsidy: 50% on bio-pesticides and pheromone traps. Technology Mission for Integrated Development of Horticulture (TMIDH): Project-based funding up to ₹15 lakh for cold storage, pack house, and value addition units. National Horticulture Board: Interest subvention at 3% for loans up to ₹25 lakh for orchard development.",
      },
    ],
  },
];

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-nature-600 font-semibold mb-8 hover:gap-3 transition-all group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Knowledge Hub</span>
      </button>

      {/* Hero Image — 50vh, full width */}
      <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden mb-10 shadow-2xl">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-900/85 via-nature-900/30 to-transparent flex items-end p-10">
          <div>
            <span className="inline-block text-xs font-bold text-nature-200 bg-nature-700/60 px-3 py-1 rounded-full uppercase tracking-wider mb-3">{article.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{article.title}</h1>
            <p className="text-nature-200 mt-2 font-light">{article.date} &bull; {article.readTime}</p>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto space-y-14">
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-nature-500 pl-6 font-light italic">{article.excerpt}</p>

        {article.content.map((section, idx) => (
          <div key={idx} className="space-y-5">
            <h2 className="text-2xl font-extrabold text-nature-900 flex items-start gap-3">
              <span className="w-9 h-9 bg-nature-100 rounded-xl flex items-center justify-center text-nature-600 font-bold text-sm shrink-0 mt-0.5">{idx + 1}</span>
              <span>{section.heading}</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg pl-12">{section.body}</p>
            {section.img && (
              <div className="rounded-2xl overflow-hidden shadow-xl h-[50vh] w-full mt-4 mb-6">
                <img src={section.img} alt={section.heading} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="bg-gradient-to-r from-nature-600 to-nature-800 rounded-2xl p-10 text-center text-white shadow-xl">
          <Leaf size={40} className="mx-auto mb-4 text-nature-200" />
          <h3 className="text-2xl font-bold mb-3">Ready to Apply These Techniques?</h3>
          <p className="text-nature-200 mb-6 text-lg">Use our AI Analysis Engine for personalized recommendations for your specific land and crop conditions.</p>
          <a href="/farmer/analysis" className="inline-flex items-center gap-2 bg-white text-nature-700 px-8 py-3 rounded-xl font-bold hover:bg-nature-50 transition-colors shadow-lg">
            Start AI Analysis <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const KnowledgeHub = ({ role }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Grains", "Vegetables", "Fruits", "Cash Crops", "Technology"];

  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar role={role} />
        <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
          <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar role={role} />

      {/* Hero Banner — 50vh full width */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="/images/agri_11.jpg"
          alt="Agriculture Knowledge"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/60 via-nature-900/50 to-nature-900/90 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-500/30 border border-nature-400/30 text-nature-200 text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            <span>Agronomy Research Library</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Knowledge Hub
          </h1>
          <p className="text-nature-100 max-w-2xl text-xl font-light leading-relaxed mb-8">
            Expert-curated guides on crop cultivation, soil science, pest management, and smart farming — sourced from TNAU, ICAR, and the Ministry of Agriculture.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50" size={22} />
            <input
              type="text"
              placeholder="Search articles by crop, technique, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 pr-6 py-4 rounded-full border border-white/20 w-full focus:outline-none focus:ring-4 focus:ring-nature-500/50 bg-white/10 backdrop-blur-md text-lg text-white placeholder-white/50 font-light"
            />
          </div>
        </div>
      </div>

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">

        {/* Category Tabs */}
        <div className="flex gap-3 flex-wrap mb-8 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-nature-600 text-white shadow-md shadow-nature-600/30"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-nature-300 hover:text-nature-700"
              }`}
            >
              {cat}
            </button>
          ))}
          {searchQuery && (
            <span className="text-sm text-gray-500 flex items-center ml-2">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
            </span>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl font-light">No articles found for &quot;{searchQuery}&quot;</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="mt-4 text-nature-600 font-medium hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer group flex flex-col"
              >
                {/* Card Image — takes up meaningful portion */}
                <div className="h-56 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold tracking-wide text-sm flex items-center gap-2">
                      Read Full Article <ChevronRight size={16} />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-nature-700 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">{article.category}</span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded-full">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-nature-700 transition-colors leading-tight">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-nature-600 font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article <ChevronRight size={16} />
                    </span>
                    <span className="text-xs text-gray-400">{article.content.length} sections</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeHub;
