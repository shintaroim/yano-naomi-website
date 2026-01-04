
import React from 'react';
import { BookOpen, Utensils, MessageCircle, TrendingUp, Sparkles, Heart } from 'lucide-react';
import { Service, Achievement } from './types';

export const SERVICES: Service[] = [
  {
    id: 'publishing',
    title: '電子書籍出版プロデュース',
    description: 'Amazon離乳食部門ベストセラー1位を獲得したノウハウを伝授。コンセプト設計からライティング、メディア露出戦略まで、あなたの「体験」を「価値」に変え、社会に届ける出版を伴走サポートします。',
    icon: <BookOpen className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'cooking',
    title: '指一本クッキング®主宰',
    description: '「調理1分」で幸福度を10倍にする思考法とレシピ。20年のプロ経験と育児経験から生まれた、頑張りすぎない「料理しない子育て法」を提唱。忙しい女性の心と時間を解放するオンライン教室を展開しています。',
    icon: <Heart className="w-8 h-8 text-pink-500" />
  },
  {
    id: 'consulting',
    title: 'SNS・ブランディング支援',
    description: '「佐賀県よろず支援拠点」のコーディネーターとして培った1,000件以上の相談実績。SNS発信、ファン化戦略、マインドサポートを組み合わせ、個人事業主や中小企業の魅力を最大化します。',
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />
  },
  {
    id: 'food-produce',
    title: '食の商品開発・地域活性',
    description: '元パティシエ・調理師の視点を活かした、食の商品開発やイベント運営。地域おこし協力隊としての経験も踏まえ、自治体や企業と連携した食のプロデュースやPR支援、講演活動を行います。',
    icon: <Utensils className="w-8 h-8 text-orange-700" />
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', category: '出版実績', content: '2021年 電子書籍「元パティシエ3兄弟ママの料理しない子育て法」Amazon離乳食部門ベストセラー1位獲得。' },
  { id: '2', category: 'メディア・受賞', content: 'KBC「シリタカ!」、西日本新聞、読売新聞、毎日新聞等。学校給食レシピコンクール福岡県1位（優秀賞）。' },
  { id: '3', category: '公的活動', content: '佐賀県よろず支援拠点コーディネーター、元うきは市地域おこし協力隊。自治体・保育園での講演実績多数。' },
  { id: '4', category: '教育・指導', content: '「指一本クッキング®」主宰。延べ10万人以上の食事シーンを見てきた経験に基づく独自の幸福マインドセットを指導。' }
];
