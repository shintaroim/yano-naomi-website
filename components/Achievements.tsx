
import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <p className="text-orange-100 opacity-80">
            これまでの歩みと、確かな実績。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="flex gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="flex-shrink-0 text-orange-400" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">
                  {item.category}
                </span>
                <p className="text-lg font-medium leading-snug">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="text-sm font-bold tracking-tighter">佐賀県よろず支援拠点</div>
          <div className="text-sm font-bold tracking-tighter">指一本クッキング</div>
          <div className="text-sm font-bold tracking-tighter">中小企業庁</div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
