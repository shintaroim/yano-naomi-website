
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4">
              Happiness & Business Producer
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              「今よりも<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                10倍幸せになる」
              </span><br />
              生き方をプロデュース。
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              調理1分のごはん術から、Amazonベストセラー出版まで。<br />
              20年の飲食経験と、どん底から這い上がった実体験を元に、
              あなたの「あるもの」に光を当て、ビジネスと人生の幸福度を劇的に高めるお手伝いをします。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition-all hover:-translate-y-1">
                個別相談・お問い合わせ
              </a>
              <a href="#services" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-full shadow-sm hover:border-orange-600 hover:text-orange-600 transition-all">
                支援メニューを見る
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Amazonベストセラー獲得
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> メディア出演多数
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl -top-10 -right-10 opacity-70"></div>
            <div className="absolute -z-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl -bottom-10 -left-10 opacity-70"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="https://yubiippon-cooking.com/wp-content/uploads/2024/10/profile%E3%82%A2%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81-1536x864.png"
                alt="矢野尚美 公式写真"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-[240px] hidden md:block border border-orange-100">
              <p className="text-xs font-bold text-orange-600 mb-1">BEST SELLER</p>
              <p className="text-sm font-bold text-slate-800">『元パティシエ3兄弟ママの「料理しない」子育て法』</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
