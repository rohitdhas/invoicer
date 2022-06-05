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
        <div className="h-auto px-8 pt-6 pb-10 bg-primary-100">
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
        {/* Steps Section */}
        <div className="px-6 py-4">
          <h3 className="py-8 text-2xl font-bold text-black text-center">
            It&rsquo;s easy to{" "}
            <span className="underline text-primary-400">Get Started</span> 👍🏻
          </h3>
          <div>
            <div className="flex justify-around align items-center my-4">
              <div className="relative">
                <span className="text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #1
                </span>
                <p className="text-2xl font-bold text-black">
                  <p>Fill up invoice</p>
                  <p>details in the form 📃</p>
                </p>
              </div>
              <div className="h-[200px] w-[30%] bg-primary-100 rounded-sm"></div>
            </div>
            <div className="flex justify-around align items-center my-4">
              <div className="h-[200px] w-[30%] bg-primary-100 rounded-sm"></div>
              <div className="relative">
                <span className="text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #2
                </span>
                <p className="text-2xl font-bold text-black">
                  <p>Choose your favorite</p>
                  <p>Template & Color ✨</p>
                </p>
              </div>
            </div>
            <div className="flex justify-around align items-center my-4">
              <div className="relative">
                <span className="text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #3
                </span>
                <p className="text-2xl font-bold text-black">
                  <p>Download the invoice as PDF</p>
                  <p>or Send it via Email 🎈</p>
                </p>
              </div>
              <div className="h-[200px] w-[30%] bg-primary-100 rounded-sm"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-white font-bold px-8 py-2 bg-primary-400 hover:bg-primary-300 rounded-sm my-4">
              Create New Invoice
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-chocolate-200 flex justify-evenly align items-center px-6 py-6">
        <div className="text-white flex flex-col align items-center">
          <p className="font-medium text-sm">© 2022 Invoicer Pvt. Ltd.</p>
          <span className="text-xl my-2">
            <i className="bi bi-linkedin mr-3"></i>
            <i className="bi bi-twitter"></i>
          </span>
        </div>
        <div className="text-white font-medium text-center">
          <p className="text-chocolate-100">About Project</p>
          <p className="text-sm mt-2">
            <p>Built 👨‍💻 with Next JS + Tailwind</p>
            <p>
              CSS by{" "}
              <a
                href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
                target={"_blank"}
                rel="noreferrer"
                className="underline hover:text-blue"
              >
                Rohit Dhas
              </a>
            </p>
          </p>
        </div>
        <div className="text-white font-medium text-center">
          <p className="text-chocolate-100">Contact</p>
          <p className="text-sm mt-2">
            <p>📧 rohitdhas666@gmail.com</p>
            <p>📞 +91 9359952174</p>
          </p>
        </div>
      </footer>
    </div>
  );
}
