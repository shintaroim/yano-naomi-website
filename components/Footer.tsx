
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
          Naomi Yano
        </div>
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Naomi Yano. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#home" className="text-sm text-slate-600 hover:text-orange-600">ホーム</a>
          <a href="#profile" className="text-sm text-slate-600 hover:text-orange-600">プロフィール</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-orange-600">プライバシーポリシー</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
