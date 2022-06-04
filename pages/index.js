/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HeroImg from "../public/hero_img.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invoicer</title>
      </Head>
      <main>
        {/* Hero Section */}
        <div className="flex justify-between align items-center pl-8">
          <div>
            <div className="text-black">
              <h2 className="xl:text-6xl md:text-5xl text-3xl font-bold">
                <p>Invoice Generation</p>
                <p>Made Easy ✅</p>
              </h2>
              <p className="font-medium text-gray-500 mt-5 mb-8">
                <p>Create Beautifully ✨ Designed Invoice with our</p>
                <p>Free Invoice Generator in no time ⌚</p>
              </p>
            </div>
            <button className="text-white font-bold px-6 py-2 bg-primary-400 hover:bg-primary-300 rounded-sm">
              <span>Get Started</span>
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
          <div>
            <Image
              className="translate-x-24 translate-y-24"
              height={700}
              width={600}
              src={HeroImg}
              alt="Hero Image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
