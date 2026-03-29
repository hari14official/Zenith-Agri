import React from 'react';
import { Users, Layout, Sprout, Droplet, CheckCircle } from 'lucide-react';

const AgribusinessInfo = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Key Challenges Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="flex-1">
            <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Challenges We Solve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b41] mb-6 mt-2">Key Challenges in Agribusiness Today</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Agriculture companies, whether small farms or multinational agribusinesses, face common challenges that limit growth and profitability:
            </p>
            <ul className="space-y-4 text-gray-700">
              {[
                'Manual record-keeping leads to errors, delays, and data silos.',
                'Labor-intensive operations increase costs and slow down productivity.',
                'Fragmented supply chains create inefficiencies in procurement, storage, and distribution.',
                'Regulatory compliance issues make it difficult to meet government and export standards.',
                'Limited forecasting causes wastage, overproduction, or shortage of resources.',
                'Weak farmer-enterprise relationships due to lack of transparency in transactions.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-nature-500 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6 leading-relaxed">
              By implementing a powerful Agribusiness Software Solution, these problems can be solved with automation, real-time insights, and seamless coordination across every stage of the business.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-6f29efcb9693?auto=format&fit=crop&q=80&w=800" 
              alt="Farmer in the field" 
              className="w-full h-[420px] rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Delivery Model Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b41] mb-4">
            Agriculture ERP Software Delivery & Implementation Model
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed">
            We believe in innovations and digitalization. We stick to agile practices for the designing and developing of agriculture management software. Let us have a look at our delivery model.
          </p>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#1a1b41] via-nature-500 to-[#1a1b41] opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              
              {[
                { step: '01', icon: Users, color: 'text-[#1a1b41]', ring: 'border-[#e8effd]', label: 'Client requirement\nanalysis', translateY: '' },
                { step: '02', icon: Layout, color: 'text-orange-500', ring: 'border-[#fdf0d5]', label: 'Plan & design,\nsoftware modules', translateY: 'lg:-translate-y-6' },
                { step: '03', icon: Sprout, color: 'text-green-600', ring: 'border-[#e6f4ea]', label: 'Develop & test\nagriculture ERP', translateY: '' },
                { step: '04', icon: Droplet, color: 'text-blue-500', ring: 'border-[#e1f5fe]', label: 'Testing the ERP\nin client environment', translateY: 'lg:translate-y-6' },
                { step: '05', icon: CheckCircle, color: 'text-purple-500', ring: 'border-[#f3e8fd]', label: 'User acceptance\ntesting & handover', translateY: 'lg:-translate-y-4' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className={`flex flex-col items-center ${item.translateY}`}>
                    <div className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full mb-4">STEP {item.step}</div>
                    <div className={`w-24 h-24 bg-white border-2 border-[#1a1b41]/20 rounded-full flex items-center justify-center mb-4 relative shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300`}>
                      <div className={`absolute inset-0 rounded-full border-[6px] ${item.ring} -m-2 opacity-60`}></div>
                      <Icon size={34} className={item.color} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm text-center whitespace-pre-line">{item.label}</h3>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgribusinessInfo;
