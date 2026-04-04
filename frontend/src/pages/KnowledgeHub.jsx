import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Search, ArrowLeft, ChevronRight, Droplet, Sun, Leaf } from 'lucide-react';
import { articles } from './articles';

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
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${selectedCategory === cat
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
