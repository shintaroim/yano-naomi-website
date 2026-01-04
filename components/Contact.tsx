
import React, { useState } from 'react';
import { Send, Mail, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。メッセージが送信されました（デモ）。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>
            <div className="space-y-4 text-slate-600 mb-8 leading-relaxed">
              <p>
                「何から相談していいかわからない」という段階でも構いません。
                現状の悩みをお聞かせいただければ、私がお手伝いできること、あるいは適切な窓口をご提案いたします。
              </p>
              <p>
                経営の広報相談、SNS運用の悩み、レシピ開発のご依頼、講演や取材の打診など、
                どのような内容でもまずは下記フォームよりお気軽にお送りください。
              </p>
              <div className="bg-orange-50 p-4 rounded-lg text-sm border border-orange-100">
                <p className="font-bold text-orange-800 mb-1">主なご相談例：</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Instagramのフォロワーが伸び悩んでいる</li>
                  <li>新商品のネーミングやパッケージの方向性を相談したい</li>
                  <li>時短料理や健康をテーマにしたイベントを企画したい</li>
                  <li>補助金を活用した広報戦略を立てたい</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">contact@yubiippon-cooking.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">佐賀県内（対面）/ 全国（オンラインZoom）</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Social</p>
                  <a href="https://www.instagram.com/yubiippon.cooking/" className="font-medium hover:text-orange-600 underline">@yubiippon.cooking</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">お名前 <span className="text-red-500 text-xs">必須</span></label>
                <input
                  type="text"
                  required
                  placeholder="例：山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">メールアドレス <span className="text-red-500 text-xs">必須</span></label>
                <input
                  type="email"
                  required
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">お問い合わせ件名</label>
              <input
                type="text"
                required
                placeholder="例：SNS運用コンサルティングについて"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">メッセージ内容 <span className="text-red-500 text-xs">必須</span></label>
              <textarea
                rows={5}
                required
                placeholder="お悩みやご相談内容を具体的にご記入いただけるとスムーズです。"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
            >
              <Send size={18} />
              上記の内容で送信する
            </button>
            <p className="mt-4 text-center text-xs text-slate-400">
              ※通常、3営業日以内にご返信いたします。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
