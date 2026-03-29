import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Search, ArrowLeft, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Advanced Paddy / Rice Cultivation",
    category: "Grains",
    date: "Mar 25, 2026",
    readTime: "8 min read",
    excerpt: "Rice is the staple food of Tamil Nadu and the dominant kharif crop. Learn the best practices for high-yield paddy under varied agro-climatic zones.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Introduction to Paddy Cultivation",
        body: "Paddy (Oryza sativa) is one of the most important cereal crops cultivated in Tamil Nadu, covering millions of hectares across districts like Thanjavur, Tiruchirappalli, Cuddalore, and Tirunelveli. Tamil Nadu's alluvial deltaic soils and monsoon rainfall make it ideal for two to three crop cycles annually.",
        img: "https://images.unsplash.com/photo-1612502170993-30c80c46abd8?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Land Preparation and Seed Selection",
        body: "Prepare the field through deep plowing and puddling to create an anaerobic layer that prevents water seepage. Select high-yielding and disease-resistant varieties like ADT 36, CO 47, CR 1009, and IR 64. Treat seeds with Pseudomonas fluorescens (10g/kg) and Trichoderma viride (4g/kg) to protect against seed-borne pathogens.",
        img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Transplanting and Spacing",
        body: "Raise nurseries 25 days before transplanting in well-prepared beds. Uproot seedlings carefully and transplant at a spacing of 20x15 cm or 25x25 cm for SRI method. Transplanting should be done in rows for easy mechanized operations. Maintain water level at 2-5 cm during initial growth for proper root establishment.",
      },
      {
        heading: "Nutrient Management and Fertilization",
        body: "Apply 100:50:50 kg N:P2O5:K2O per hectare for medium yields. Split nitrogen application: 50% as basal, 25% at active tillering (21 DAT), and 25% at panicle initiation (45 DAT). Use zinc sulphate (25 kg/ha) as a micronutrient supplement common in Tamil Nadu soils. Organic matter from green manure (Sesbania or Dhaincha) at 6.25 tonnes/ha improves soil health significantly.",
        img: "https://images.unsplash.com/photo-1592982537447-6f29efcb9693?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Water Management",
        body: "Paddy requires 1200-1600 mm of water throughout its life cycle. Maintain shallow flooding (2-5 cm) during tillering. Saturation irrigation (Alternate Wetting and Drying - AWD) during grain filling reduces water consumption by up to 40% while maintaining yields. Drain fields 2 weeks before harvest for mechanized cutting.",
      },
      {
        heading: "Pest and Disease Management",
        body: "Common pests include stem borer (Scirpophaga incertulas), brown planthopper (Nilaparvata lugens), and gall midge. Apply Carbofuran 3G (33 kg/ha) at transplanting for soil-borne pests. For blast disease (Magnaporthe oryzae), spray Tricyclazole 75 WP (0.6 g/litre) at first symptom appearance. Monitor regularly using sticky traps and pheromone lures for integrated pest management.",
      },
      {
        heading: "Harvesting and Post-Harvest",
        body: "Paddy reaches maturity in 110-145 days depending on variety. Golden-yellow color of 85-90% grains signals harvest readiness. Cut at moisture content of 20-22% for milling quality. Use combine harvesters to reduce drudgery and harvest loss. Dry grains to 14% moisture for safe storage. Proper storage in moisture-proof containers prevents fungal contamination and aflatoxin development.",
      },
    ],
  },
  {
    id: 2,
    title: "Maximizing Tomato Yields",
    category: "Vegetables",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    excerpt: "Optimize your tomato cultivation from seedling to harvest with precision irrigation, disease prevention, and tailored fertilization regimes.",
    image: "https://images.unsplash.com/photo-1592688086082-996ff7638d97?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Importance of Tomato Cultivation",
        body: "Tomato (Solanum lycopersicum) is one of the most commercially important vegetable crops in Tamil Nadu, grown in districts like Dharmapuri, Salem, Coimbatore, and Krishnagiri. It is cultivated year-round under irrigated conditions and has excellent market value.",
        img: "https://images.unsplash.com/photo-1592688086082-996ff7638d97?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Variety Selection",
        body: "Choose F1 hybrids for high yield potential: PKM 1, CO 3, Arka Vikas, and Pusa Ruby for open-pollinated varieties; or Hybrid varieties like Abhilash and US440 for better disease tolerance. Virus-resistant hybrids are preferred in areas prone to Tomato Leaf Curl Virus (TLCV).",
      },
      {
        heading: "Land Preparation and Planting",
        body: "Tomatoes prefer well-drained loamy soils with pH 6.0-7.0. Deep plow and form beds and channels. Transplant 25-30 day old seedlings at 60x45 cm spacing (indeterminate) or 60x30 cm (determinate). Staking is needed for tall varieties to prevent lodging.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Drip Irrigation and Water Management",
        body: "Implement drip irrigation at 60% of pan evaporation to conserve water and prevent foliar wetting. Use drip fertigation to deliver nutrients directly to the root zone. Water stress during fruit setting dramatically reduces yield, so maintain consistent soil moisture throughout.",
      },
      {
        heading: "Nutrient and Fertilizer Management",
        body: "Apply 150:75:75 NPK kg/ha + 25 tonnes FYM/ha. Split fertilizer: 50% N as basal, 25% at flowering, 25% at fruiting. Foliar spray of calcium nitrate (1%) prevents blossom end rot. Boron spray (0.1%) improves pollen viability and fruit set.",
      },
      {
        heading: "Disease and Pest Management",
        body: "Early blight (Alternaria solani) is controlled by Mancozeb 75 WP (2g/litre). Late blight (Phytophthora infestans) by Metalaxyl 8% + Mancozeb 64% WP. For TLCV management, control whitefly vectors using Imidacloprid 17.8 SL (0.3 ml/litre) and use silver mulch to deter insects.",
      },
    ],
  },
  {
    id: 3,
    title: "Organic Rice Farming Techniques",
    category: "Grains",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    excerpt: "Transition to certified organic rice production using biofertilizers, composting, and integrated pest management for premium market prices.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Why Organic Rice?",
        body: "Organic rice fetches 2-3x premium market prices and opens export markets in Europe, Japan, and the USA. Tamil Nadu has established organic certification bodies like APOF and INDOCERT to help farmers transition profitably.",
        img: "https://images.unsplash.com/photo-1612502170993-30c80c46abd8?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Soil Building and Composting",
        body: "Organic matter (FYM, compost, vermicompost) is the foundation. Apply 10 tonnes of FYM per hectare 3 weeks before planting. Use Panchagavya (3%) as a growth promoter. In-situ green manuring with Sesbania rostrata fixes 60-80 kg N/ha biologically.",
      },
      {
        heading: "Biofertilizer Application",
        body: "Treat seeds with Azospirillum (200g/ha), Phosphobacteria (200g/ha), and Blue Green Algae (10 kg/ha) for biological nitrogen and phosphorus supply. These biofertilizers significantly reduce chemical fertilizer requirements by 25-30%.",
      },
      {
        heading: "Organic Pest Management",
        body: "Use NSKE (Neem Seed Kernel Extract) at 5% for sucking pests. Pheromone traps (5/ha) for stem borers. Trichogramma (1.5 lakh parasitoids/ha) for biological control of lepidopteran pests. Light traps at 1/ha for mass trapping of adult moths.",
        img: "https://images.unsplash.com/photo-1592982537447-6f29efcb9693?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: 4,
    title: "Pest Management in Orchards",
    category: "Fruits",
    date: "Mar 10, 2026",
    readTime: "9 min read",
    excerpt: "Protect mango, banana, and citrus orchards from invasive pests using integrated management strategies combining biological, cultural, and chemical controls.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Importance of Orchard Pest Management",
        body: "Tamil Nadu's fruit orchards - particularly mango, banana, guava, and acid lime - face significant threats from invasive pests and diseases. Proper Integrated Pest Management (IPM) can reduce crop losses by 60-80% while minimizing pesticide residues.",
        img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Key Pests in Mango Orchards",
        body: "Mango hopper (Idioscopus clypealis), mango mealybug (Drosicha mangiferae), and fruit fly (Bactrocera dorsalis) are the major threats. Apply Imidacloprid 17.8 SL (5ml/10 litre) for hoppers. Use cuel trap baited with methyl eugenol for fruit fly mass trapping.",
      },
      {
        heading: "Banana Pest and Disease Control",
        body: "Panama wilt (Fusarium oxysporum f.sp. cubense) is managed by planting resistant varieties like Grand Naine and Cavendish. Banana weevil (Cosmopolites sordidus) is controlled with Carbofuran 3G in pseudostem. Bunchy Top Virus management includes roguing infected plants immediately.",
      },
      {
        heading: "Cultural Practices for Pest Suppression",
        body: "Prune dead and diseased branches regularly. Lime washing of trunks (10% Bordeaux mixture) prevents bark borer entry. Intercropping with legumes attracts predatory insects. Orchard hygiene - collecting and destroying fallen fruits - dramatically reduces fruit fly breeding sites.",
        img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Biological Control Agents",
        body: "Release Chrysoperla carnea (common lacewing) at 10,000/ha for aphid and mite control. Trichogramma chilonis (1 lakh/ha) as egg parasitoid. Bacillus thuringiensis (Bt) sprays for caterpillar management without harming beneficial insects. These biological agents are safe for humans and the environment.",
      },
    ],
  },
  {
    id: 5,
    title: "Sugarcane Yield Optimization",
    category: "Cash Crops",
    date: "Mar 5, 2026",
    readTime: "7 min read",
    excerpt: "Achieve record sugarcane yields using advanced ratoon management, intercropping systems, and integrated nutrition for Tamil Nadu conditions.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Sugarcane in Tamil Nadu",
        body: "Tamil Nadu is the third largest sugarcane producer in India, with major cultivation in Erode, Salem, Coimbatore, and Tiruvannamalai districts. The crop supports large-scale sugar milling and the jaggery industry, providing rural employment.",
        img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "High-Yielding Varieties",
        body: "Use Co 86032, CoC 671 (Attur Rob), CoSi 96071, and Co 0212 for high sucrose content and disease resistance. Early maturing varieties (10-11 months) allow double cropping. Plant red rot resistant varieties in areas with high Colletotrichum falcatum incidence.",
      },
      {
        heading: "Ratoon Crop Management",
        body: "First ratoon yields are 85-90% of plant crop. Gap-fill with shoot pieces within 30 days of cutting. Apply 25% extra nitrogen compared to plant crop. Drip irrigation in ratoon improves juice quality and reduces water usage by 40%. Trash mulching of crop residue conserves moisture and suppresses weeds.",
      },
      {
        heading: "Integrated Nutrient Management",
        body: "Apply FYM (50t/ha) + Filter cake (10t/ha) as organic inputs. Biofertilizer: Azospirillum + Phosphobacteria seed treatment. Chemical: 275:75:75 kg NPK/ha split in 4 doses. Trash burning should be avoided - trash decomposition adds organic matter back to the soil.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: 6,
    title: "Smart Irrigation Technologies",
    category: "Technology",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    excerpt: "From drip systems to IoT soil moisture sensors, modernize your irrigation infrastructure to save water and boost productivity.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        heading: "Water Crisis in Agriculture",
        body: "Agriculture consumes 70% of Tamil Nadu's freshwater resources. With declining groundwater tables in districts like Coimbatore and Tirupur, precision irrigation is no longer optional - it is essential for long-term agricultural sustainability.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
      },
      {
        heading: "Drip Irrigation System",
        body: "Drip irrigation delivers water directly to the root zone at 1-2 litre/hour, reducing water use by 30-50% compared to flood irrigation. Tamil Nadu government provides 100% subsidy for SC/ST farmers and 75% for others under the TNAU scheme. Fertigation through drip systems improves nutrient use efficiency to 85%.",
      },
      {
        heading: "IoT Soil Moisture Sensors",
        body: "Capacitance-based soil moisture sensors (available from Rs.500-Rs.3000) continuously monitor root zone moisture and trigger irrigation only when needed. Integration with mobile apps allows remote monitoring and automated valve control, reducing labor significantly.",
      },
      {
        heading: "Sprinkler Systems for Field Crops",
        body: "Sprinklers are suitable for groundnut, maize, and pulse crops. Mini-sprinklers (2 litre/min) cover 5m radius and are ideal for vegetables. Ensure operating pressure of 2.0-2.5 kg/cm2 for uniform distribution. Morning irrigation (before 9am) reduces evaporation losses by 25-30%.",
        img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-nature-600 font-semibold mb-8 hover:gap-3 transition-all">
        <ArrowLeft size={18} />
        <span>Back to Knowledge Hub</span>
      </button>
      
      {/* Hero Image */}
      <div className="relative h-[50vh] rounded-3xl overflow-hidden mb-10 shadow-2xl">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-900/80 to-transparent flex items-end p-10">
          <div>
            <span className="inline-block text-xs font-bold text-nature-200 bg-nature-700/60 px-3 py-1 rounded-full uppercase tracking-wider mb-3">{article.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{article.title}</h1>
            <p className="text-nature-200 mt-2 font-light">{article.date} &bull; {article.readTime}</p>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-nature-500 pl-6 font-light italic">{article.excerpt}</p>
        
        {article.content.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl font-extrabold text-nature-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-nature-100 rounded-lg flex items-center justify-center text-nature-600 font-bold text-sm shrink-0">{idx + 1}</span>
              {section.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
            {section.img && (
              <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                <img src={section.img} alt={section.heading} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
          </div>
        ))}
        
        <div className="bg-nature-50 border border-nature-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-nature-900 mb-2">Ready to Apply These Techniques?</h3>
          <p className="text-gray-600 mb-4">Use our AI Analysis Engine to get personalized recommendations for your specific land and crop conditions.</p>
          <a href="/farmer/analysis" className="inline-flex items-center gap-2 bg-nature-600 hover:bg-nature-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            <span>Start AI Analysis</span>
            <ChevronRight size={18} />
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
      
      {/* Full-width Hero Banner covering half the viewport */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Agriculture Knowledge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/70 via-nature-900/60 to-nature-900/90 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-500/30 border border-nature-400/30 text-nature-200 text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            <span>Agronomy Research Library</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Knowledge Hub
          </h1>
          <p className="text-nature-100 max-w-2xl text-xl font-light leading-relaxed mb-8">
            Expert-curated research on crop cultivation, soil science, pest management, and smart farming technologies.
          </p>
          
          {/* Functional Search Bar */}
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
        
        {/* Category Filter Tabs */}
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
                {/* Image - takes up half the card height */}
                <div className="h-56 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold tracking-wide text-sm flex items-center gap-2">
                      Explore Details <ChevronRight size={16} />
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
                      Explore Details <ChevronRight size={16} />
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
