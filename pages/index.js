import Head from "next/head";
import Image from "next/image";
import MobileHeroImg from "../public/mobile_hero_img.svg";
import { getProviders, useSession } from "next-auth/react";
import TemplateImg from "../public/template_img.svg";
import DownloadImg from "../public/download.svg";
import HeroImg from "../public/hero_img.svg";
import FormImg from "../public/form.svg";
import SignIn from "../components/signIn";
import Navbar from "../components/navbar";
import Router from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default function Home({ providers }) {
  const [modelVisible, setModelVisible] = useState(false);
  const { data: session } = useSession();

  const onCreateInvoice = () => {
    if (!session) {
      setModelVisible(true);
    } else {
      Router.push("/invoice");
    }
  };

  return (
    <div>
      <Head>
        <title>Invoicer</title>
      </Head>
      <main>
        <Navbar toggleLoginModel={() => setModelVisible(true)} />
        {modelVisible ? (
          <div
            onClick={() => setModelVisible(false)}
            className="z-[10] fixed top-0 left-0 right-0 bottom-0 flex align items-center justify-center h-[100vh]"
          >
            <div className="bg-black opacity-50 fixed top-0 left-0 right-0 bottom-0"></div>
            <SignIn providers={providers} />
          </div>
        ) : (
          <></>
        )}
        {/* Hero Section */}
        <div className="flex md:justify-start justify-center align items-center px-4 md:px-0 md:pl-[8%] overflow-hidden relative h-screen">
          <div className="md:text-left text-center">
            <div className="text-black">
              <h2 className="xl:text-6xl md:text-5xl text-4xl font-bold sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug">
                Invoice Generation
                <br />
                Made Easy ✅
              </h2>
              <p className="font-medium text-gray-500 mt-5 mb-8">
                <p>Create Beautifully ✨ Designed Invoice with our</p>
                <p>Free Invoice Generator in no time ⌚</p>
              </p>
            </div>
            <button
              onClick={onCreateInvoice}
              className="text-white font-bold px-6 py-2 bg-primary-400 hover:bg-primary-300 rounded-sm"
            >
              <span>Get Started</span>
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="translate-x-28 translate-y-24 absolute -right-8 top-8 hidden md:block">
            <Image height={900} width={800} src={HeroImg} alt="Hero Image" />
          </div>
          <div className="absolute top-[75%] visible md:hidden">
            <Image
              height={700}
              width={600}
              src={MobileHeroImg}
              alt="Hero Image"
            />
          </div>
        </div>
        {/* Features Section */}
        <div className="h-auto px-8 pt-6 pb-10 bg-primary-100">
          <h3 className="text-2xl font-bold text-black text-center py-6">
            Features of Invoice Generator 🌟
          </h3>
          <div className="flex justify-evenly flex-col md:flex-row">
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 w-full md:w-[26%]">
              <div className="icon text-5xl">⌚</div>
              <h4 className="text-xl font-semibold text-primary-400 my-4">
                Quick Easy Invoice
              </h4>
              <p className="text-sm text-black">
                Create professional invoices instantly without any hassle
              </p>
            </div>
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 md:mx-4 my-4 md:my-0 w-full md:w-[26%]">
              <div className="icon text-5xl">📄</div>
              <h4 className="text-xl font-semibold text-primary-400 my-4">
                Invoice Templates
              </h4>
              <p className="text-sm text-black">
                Choose from multiple invoice designs, send personalized invoices
              </p>
            </div>
            <div className="bg-white shadow-md rounded-sm text-center px-4 py-8 w-full md:w-[26%]">
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
            <div className="flex flex-col justify-center md:flex-row md:justify-around align items-center mb-[20%] mt-[10%] md:mt-6 md:mb-[10%]">
              <div className="relative w-[90%] text-center md:text-left md:w-[30%]">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #1
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    Fill up invoice <br />
                    details in the form 📃
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis asperiores totam minima itaque
                  </p>
                </div>
              </div>
              <div className="w-[70%] md:w-[20%] my-6 md:my-0">
                <Image src={FormImg} alt="Form Img" className="h-full w-full" />
              </div>
            </div>
            <div className="flex flex-col-reverse justify-center md:flex-row md:justify-around align items-center mb-[30%] mt-[10%] md:mt-6 md:mb-[10%]">
              <div className="h-[100px] w-[70%] md:w-[20%] my-6 md:my-0">
                <Image src={TemplateImg} alt="Template Img" />
              </div>
              <div className="relative w-[90%] text-center md:text-left md:w-[30%]">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #2
                </span>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-black">
                    Choose your favorite
                    <br />
                    Template & Color ✨
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod voluptatibus molestias omnis veritatis
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row md:justify-around align items-center mb-[30%] mt-[10%] md:mt-6 md:mb-[10%]">
              <div className="relative w-[90%] text-center md:text-left md:w-[30%]">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 absolute -left-6 -top-6 z-[-1]">
                  #3
                </span>
                <p className="text-xl md:text-2xl font-bold text-black">
                  Download the invoice
                  <br />
                  as PDF🎈
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  voluptatibus molestias omnis veritatis
                </p>
              </div>
              <div className="h-[100px] w-[50%] md:w-[15%] my-6 md:my-0 rounded-sm">
                <Image
                  src={DownloadImg}
                  alt="Download Img"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onCreateInvoice}
              className="text-white font-bold px-8 py-2 bg-primary-400 hover:bg-primary-300 rounded-sm my-4"
            >
              Create New Invoice
            </button>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-chocolate-200 flex justify-evenly align items-center px-6 py-6">
        <div className="text-white flex flex-col align items-center">
          <p className="font-medium text-sm">© 2022 Invoicer Pvt. Ltd.</p>
          <span className="text-xl my-2">
            <i className="bi bi-linkedin mr-3"></i>
            <i className="bi bi-twitter"></i>
          </span>
        </div>
        <div className="hidden md:block text-white font-medium text-center">
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
        <div className="hidden md:block text-white font-medium text-center">
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
