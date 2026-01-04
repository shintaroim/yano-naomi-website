
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Support Menu</h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          ビジネスの成長を加速させる戦略から、自分らしい発信、そして心身を整える食生活まで。<br />
          人生の再設計を望むあなたに、トータルな変化を届ける4つのメニューをご用意しました。
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-6 p-5 bg-orange-50 rounded-2xl text-orange-600">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-slate-400 mb-4">※企業・団体様からの講演、研修、商品開発のご依頼も随時承っております。</p>
        <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline">
          お問い合わせはこちらから
        </a>
      </div>
    </section>
  );
};

export default Services;
