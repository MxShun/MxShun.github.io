import Header from "@/components/Header";
import React from "react";

export default function Bio() {
  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/bio" />
      <section className="">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-solarized-dark dark:bg-solarized-light pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-solarized-cyan text-solarized-dark relative z-10">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24  bg-white text-solarized-dark rounded-full inline-flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.cyberagent.co.jp/favicon.ico"
                  className="mx-auto rounded-full w-28"
                  alt="MxShun"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="text-solarized-cyan mb-1 text-xl">
                  株式会社サイバーエージェント
                </h2>
                <h3 className="my-2 text-lg underline">
                  2024年6月〜 クリエイティブ即日配信を実現する「AD自動入稿」
                </h3>
                <p className="leading-relaxed">
                  体制：4チーム30人程度
                  <br />
                  役割：プロジェクトリーダーとして要件定義からリリースまで一貫して担当
                  <br />
                  経験：アーキテクチャの決定、リリーススコープとスケジュールの決定・品質基準策定などビジネス価値を最大化させてプロジェクトを成功させるためのありとあらゆること
                  <br />
                  技術：AWS、疎結合、イベント駆動アーキテクチャ
                </p>
                <h3 className="my-2 text-lg underline">
                  2023年3月〜
                  AIによるクリエイティブ確認サポートシステム「極予測やりとりAI」
                </h3>
                <p className="leading-relaxed">
                  体制：フロントエンドとバックエンドの2チーム10人程度
                  <br />
                  役割：バックエンド開発メンバーとして参画、スクラムマスターとプロジェクトリーダーを歴任し、要件定義からリリースまで一貫して担当
                  <br />
                  経験：リリーススコープとスケジュールの決定・開発要員確保・品質基準策定などビジネス価値を最大化させてプロジェクトを成功させるためのありとあらゆること（これにより組織の年間ベストルーキー賞を受賞）、組織へのスクラム導入
                  <br />
                  技術：Go、echo、AWS、クリーンアーキテクチャ
                </p>
                <h3 className="my-2 text-lg underline">
                  2022年11月〜2023年2月 数百GB/日処理する「CA DataFeed
                  Manager」の保守
                </h3>
                <p className="leading-relaxed">
                  体制：1チーム5人
                  <br />
                  役割：バックエンド開発メンバーとして参画し、設計からリリースまで数日サイクルで保守案件を担当
                  <br />
                  経験：データフィードアルゴリズム改善による処理時間44時間短縮、年間1,000万円規模のAWSコスト削減（これにより組織の月間ベストエンジニア賞を受賞）
                  <br />
                  技術：Java、Spring、AWS
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-solarized-dark dark:bg-solarized-light pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  bg-solarized-cyan text-solarized-dark relative z-10">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-white text-solarized-dark rounded-full inline-flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.askul.co.jp/favicon.ico"
                  className="mx-auto rounded-full w-28"
                  alt="MxShun"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="text-solarized-cyan mb-1 text-xl">
                  アスクル株式会社
                </h2>
                <h3 className="my-2 text-lg underline">
                  2021年4月〜2022年10月
                  ソフトウェア投資額約60億円の大規模サービス統合「Trylion PJ」
                </h3>
                <p className="leading-relaxed">
                  体制：5マイクロサービスチーム600人程度
                  <br />
                  役割：配送・価格計算サービスのバックエンド開発メンバーとして参画、スクラムマスターと開発リーダーを歴任し、設計からリリースまで担当
                  <br />
                  経験：非機能要件APIレスポンスタイム200msを満たすクエリチューニング・キャッシュ・並列化、価格計算の厳しい品質担保、夜間にバッチサーバを破壊
                  <br />
                  技術：Kotlin、Spring、マイクロサービス、AWS、クリーンアーキテクチャ
                </p>
                <h3 className="my-2 text-lg underline">
                  2020年4月〜2021年3月
                  ユーザ数500万超の国内BtoB大手サービス「アスクル」の保守
                </h3>
                <p className="leading-relaxed">
                  体制：1チーム10人
                  <br />
                  役割：バックエンド開発メンバーとして参画し、開発からリリースまで2週間サイクルで保守案件を担当
                  <br />
                  経験：複雑な業務ロジックやリリースリスクといった大規模サービスならではの苦労
                  <br />
                  技術：Java、Seasar2、モノリス、オンプレミス
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-solarized-dark dark:bg-solarized-light pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  bg-solarized-cyan text-solarized-dark relative z-10">
              0
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24  bg-white text-solarized-dark rounded-full inline-flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.sendai-nct.ac.jp/favicon.ico"
                  className="mx-auto rounded-full w-28"
                  alt="MxShun"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="text-solarized-cyan mb-1 text-xl">
                  仙台高等専門学校
                </h2>
                <h3 className="my-2 text-lg underline">
                  〜2020年3月 情報電子システム工学専攻
                </h3>
                <p className="leading-relaxed">
                  フィンランドにあるトゥルク応用科学大学に6ヶ月間留学
                  <br />
                  帰国後「ARを用いたギター演奏学習支援システム」の研究に打込み進学を志す
                  <br />
                  が、大学院入試に失敗し就職活動を急遽開始する
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
