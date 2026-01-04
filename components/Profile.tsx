
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 relative">
              Naomi Yano
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-600 rounded"></span>
            </h2>
            <p className="text-orange-600 font-bold mb-6 text-sm">矢野 尚美 / 幸福マインド・出版・ビジネスプロデューサー</p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                1981年福岡県生まれ。20年にわたる飲食業界でのキャリアを持ち、大阪辻製菓専門学校を卒業後、軽井沢のホテルや各地のイタリアン、フレンチの厨房でパティシエ・調理師として技術を磨く。
              </p>
              <p>
                2005年、地球一周の船旅「ピースボート」に参加し、100日間で世界の常識と文化の違いを体験。帰国後、福岡市でのワインバー開業を経て、3人の子供を抱えるシングルマザーに。
              </p>
              <p>
                時給700円のパート、味覚障害、耳下腺腫瘍の手術…まさに「どん底」の状態から、「ない」ものではなく今「ある」ものに感謝する思考への転換で人生が激変。
                2021年には初の電子書籍がAmazon離乳食部門でベストセラー1位を獲得。
              </p>
              <p>
                現在は「指一本クッキング®」主宰として時短料理を通じた幸福マインドを伝える傍ら、佐賀県よろず支援拠点のコーディネーターとして、食の商品開発やSNS、出版コンサルティングを通じ、個人事業主の可能性を拓く活動を行っています。
              </p>
              
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600 mt-6">
                <p className="font-bold text-slate-800 mb-2">My History & Belief</p>
                <ul className="text-sm space-y-2 list-disc list-inside">
                  <li>20年以上の飲食経験（調理師・パティシエ）</li>
                  <li>Amazon離乳食部門 ベストセラー1位獲得</li>
                  <li>学校給食レシピコンクール 福岡県1位（自由部門）</li>
                  <li>1%の改善が1年後には4万倍の力になる「複利の幸福術」</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://yubiippon-cooking.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors border-b-2 border-orange-100">
                Official Site
              </a>
              <a href="https://www.instagram.com/yubiippon.cooking/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors border-b-2 border-orange-100">
                Instagram
              </a>
              <a href="https://www.facebook.com/naomi.yano.313/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors border-b-2 border-orange-100">
                Facebook
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://yubiippon-cooking.com/wp-content/uploads/2024/09/top-bg-640x360.png" alt="料理シーン" className="rounded-2xl shadow-lg w-full h-[300px] object-cover" />
              <img src="https://yubiippon-cooking.com/wp-content/uploads/2024/09/main-img-pc-1536x589.png" alt="活動風景" className="rounded-2xl shadow-lg w-full h-[250px] object-cover" />
            </div>
            <div className="pt-12">
              <img src="https://yubiippon-cooking.com/wp-content/uploads/2024/10/profile%E3%82%A2%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81-1536x864.png" alt="矢野尚美 近影" className="rounded-2xl shadow-lg w-full h-[520px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
