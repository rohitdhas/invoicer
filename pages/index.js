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
        <div className="flex justify-start align items-center pl-8 overflow-hidden relative h-screen">
          <div>
            <div className="text-black">
              <h2 className="xl:text-6xl md:text-5xl text-3xl font-bold xl:leading-snug">
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
          <div className="translate-x-28 translate-y-24 absolute right-0 top-8">
            <Image height={700} width={600} src={HeroImg} alt="Hero Image" />
          </div>
        </div>
        {/* Features Section */}
        <div className="h-auto px-8 py-6 bg-primary-100">
          <h3 className="text-2xl font-bold text-black text-center py-6">
            Features of Invoice Generator 🌟
          </h3>
          <div className="flex justify-evenly">
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 w-[26%]">
              <div className="icon text-5xl">⌚</div>
              <h4 className="text-xl font-semibold text-primary-400 my-4">
                Quick Easy Invoice
              </h4>
              <p className="text-sm text-black">
                Create professional invoices instantly without any hassle
              </p>
            </div>
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 mx-4 w-[26%]">
              <div className="icon text-5xl">📄</div>
              <h4 className="text-xl font-semibold text-primary-400 my-4">
                Invoice Templates
              </h4>
              <p className="text-sm text-black">
                Choose from multiple invoice designs, send personalized invoices
              </p>
            </div>
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 w-[26%]">
              <div className="icon text-5xl">📧</div>
              <h4 className="text-xl font-semibold text-primary-400 my-4">
                Email Invoice
              </h4>
              <p className="text-sm text-black">
                Send Invoices directly via email to your client
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
