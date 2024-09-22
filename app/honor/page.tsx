import React from "react";
import Element from "@/components/Element";
import Header from "@/components/Header";

export default function Honors() {
  return (
    <main className="relative h-screen overflow-y-auto  bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/honor" />
      <section>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <Element
              title="AWS Certified SysOps Administrator - Associate"
              description="2024年3月取得"
              thumbnail={
                <img
                  src="/aws-certified-sysops-administrator-associate.png"
                  className="mx-auto rounded-full w-28"
                  alt="aws-certified-sysops-administrator-associate"
                />
              }
              link="https://www.credly.com/badges/9d79f861-4d09-4449-ad06-79eb65f60719"
            />
            <Element
              title="Certified ScrumMaster"
              description="2024年2月取得"
              thumbnail={
                <img
                  src="/sa-csm-600.png"
                  className="mx-auto rounded-full w-28"
                  alt="sa-csm-600"
                />
              }
              link="https://bcert.me/skuxdamxs"
            />
            <Element
              title="AWS Certified Developer - Associate"
              description="2022年1月取得"
              thumbnail={
                <img
                  src="/aws-certified-developer-associate.png"
                  className="mx-auto rounded-full w-28"
                  alt="aws-certified-developer-associate"
                />
              }
              link="https://www.credly.com/badges/b6281cda-7e7f-46b6-8fe2-415966db2831"
            />
            <Element
              title="AWS Certified Solutions Architect - Associate"
              description="2021年7月取得"
              thumbnail={
                <img
                  src="/aws-certified-solutions-architect-associate.png"
                  className="mx-auto rounded-full w-28"
                  alt="aws-certified-solutions-architect-associate"
                />
              }
              link="https://www.credly.com/badges/1c36307b-bf80-4b19-9488-29e971a5acb5"
            />
            <Element
              title="Professional Scrum Master I"
              description="2021年3月取得"
              thumbnail={
                <img
                  src="/professional-scrum-master-i-psm-i.png"
                  className="mx-auto rounded-full w-28"
                  alt="professional-scrum-master-i-psm-i"
                />
              }
              link="https://www.credly.com/badges/82781d1f-9185-4fde-9779-6496876908c5"
            />
            <Element
              title="Oracle Certified Java Programmer, Gold SE 8"
              description="2021年1月取得"
              thumbnail={
                <img
                  src="/oracle-certified-java-programmer-gold-se-8-oracle-certified-professional-java-se-8-programmer-jpn.png"
                  className="mx-auto rounded-full w-28"
                  alt="oracle-certified-java-programmer-gold-se-8-oracle-certified-professional-java-se-8-programmer-jpn"
                />
              }
              link="https://www.credly.com/badges/33da4733-6f66-431d-b2b4-946557967ce7"
            />
            <Element
              title="Oracle Certified Java Programmer, Silver SE 8"
              description="2020年8月取得"
              thumbnail={
                <img
                  src="/oracle-certified-java-programmer-silver-se-8-oracle-certified-associate-java-se-8-programmer-jpn.png"
                  className="mx-auto rounded-full w-28"
                  alt="oracle-certified-java-programmer-silver-se-8-oracle-certified-associate-java-se-8-programmer-jpn"
                />
              }
              link="https://www.credly.com/badges/05edcaa5-7fa7-4d45-9f09-fa827beec5c1"
            />
            <Element
              title="応用情報技術者"
              description="2019年12月取得"
              thumbnail={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
                </svg>
              }
            />
            <Element
              title="基本情報技術者"
              description="2016年5月取得"
              thumbnail={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
                </svg>
              }
            />
            <Element
              title="STARTS Open Water Diver"
              description="2022年9月取得"
              thumbnail={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z"></path>
                </svg>
              }
            />
            <Element
              title="食品衛生責任者"
              description="2022年6月取得"
              thumbnail={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"></path>
                </svg>
              }
            />
            <Element
              title="日本安全食料料理協会コーヒーソムリエ"
              description="2021年1月取得"
              thumbnail={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
