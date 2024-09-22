import React from "react";
import Element from "@/components/Element";
import Header from "@/components/Header";

export default function Talks() {
  return (
    <main className="relative h-screen overflow-hidden bg-solarized-light dark:bg-solarized-dark">
      <Header activePage="/talks" />
      <section>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <Element
              title="生成AI活用による広告運用効率化・自動化の追求"
              description="2023年11月22日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/57/4d/574dac434fb5fa7ea380a3909d48c94e.png"
                  className="mx-auto rounded-full w-28"
                  alt="cyberagent-generative-ai"
                />
              }
              link="https://cyberagent.connpass.com/event/301402/"
            />
            <Element
              title="エンジニア同士のぶっちゃけトーク┃〜AI事業本部で気づいた、理想のキャリアが実現できる環境とは？～"
              description="2023年8月24日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/cd/86/cd864f226ea519a43340e8245da3820e.png"
                  className="mx-auto rounded-full w-28"
                  alt="cyberagent-ai-career"
                />
              }
              link="https://cyberagent.connpass.com/event/292872/"
            />
            <Element
              title="なぜKotlinで開発するのか？Kotlinの魅力について語る会"
              description="2022年5月11日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/a2/dd/a2ddc94ce39d9873f3800672706cb239.png"
                  className="mx-auto rounded-full w-28"
                  alt="why-kotlin"
                />
              }
              link="https://moneyforward.connpass.com/event/242696/"
            />
            <Element
              title="リーダブルコード LT会 - vol.3 #readablelt"
              description="2022年3月24日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/cf/93/cf93650fa6c42e939cd77ce370c67386.png"
                  className="mx-auto rounded-full w-28"
                  alt="readablelt#3"
                />
              }
              link="https://rakus.connpass.com/event/238395/"
            />
            <Element
              title="リーダブルコード LT会 - vol.2 #readablelt"
              description="2021年7月7日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/9c/52/9c524cdedc3190139c6f2218d8a6366d.png"
                  className="mx-auto rounded-full w-28"
                  alt="readablelt#2"
                />
              }
              link="https://rakus.connpass.com/event/215225/"
            />
            <Element
              title="AStudy+"
              description="2021年3月25日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/6a/a5/6aa5405dd00350a1b676f8ae78dacddc.png"
                  className="mx-auto rounded-full w-28"
                  alt="AStudy+"
                />
              }
              link="https://askul.connpass.com/event/204742/"
            />
            <Element
              title="JBUG 東京 # 20 #オンライン 〜そこが知りたい！Backlog活用術〜"
              description="2021年2月18日開催"
              thumbnail={
                <img
                  src="https://media.connpass.com/thumbs/e9/aa/e9aaf907fa6a64085d07bd500e19abaf.png"
                  className="mx-auto rounded-full w-28"
                  alt="JBUG#20"
                />
              }
              link="https://jbug.connpass.com/event/202013/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
