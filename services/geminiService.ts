
import { GoogleGenAI } from "@google/genai";

export const getBusinessAdvice = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    あなたは矢野尚美さんのビジネスパートナー兼AIアシスタントです。
    
    【矢野尚美さんのプロフィールと核となる考え方】
    - 20年の飲食経験（調理師・パティシエ）があり、10万人以上の食事シーンを見てきた。
    - 幸福度を10倍にする「調理1分のごはん術」を提唱。
    - Amazon離乳食部門ベストセラー作家であり、出版プロデュースも行う。
    - 「ない」から「ある」へ思考を転換することで人生を変えた実体験（時給700円から這い上がった経験）を持つ。
    - 1%の改善が365日積み重なると、複利で大きなパフォーマンス向上（理論上は約4.4万倍）に繋がるという持論がある。
    - 本物の塩がパフォーマンスを変える、妄想力が幸せを作るなど、ユニークな視点。
    - 佐賀県よろず支援拠点コーディネーターとして中小企業の経営支援も行うプロフェッショナル。

    【回答の指針】
    1. 親しみやすく、ポジティブで、背中を優しく押す言葉遣い。
    2. 相談者が「今、あるもの」に気づけるような問いかけやアドバイスを含めてください。
    3. 出版の悩み、料理の悩み、起業の悩みに対して、矢野さんの経験に基づいた多角的な視点で答えてください。
    4. 具体的で、今日から始められる小さな一歩（1%の改善）を提案してください。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "お話しいただきありがとうございます。あなたの素敵な可能性について、ぜひもっと聞かせてくださいね。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。少し通信が途切れてしまったようです。あなたのことを大切に想っています、またお話ししましょうね。";
  }
};
