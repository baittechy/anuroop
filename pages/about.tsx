import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import {
  ArrowIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/src/components/icons";
import { socialLinks } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout
      data={{
        title: "About",
        description: "About his work and what computers he uses is explained",
      }}
    >
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        About me
      </h1>


      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {`I am Sania Fathima, 👋`}<br /> a UX Designer with a passion for creating seamless designs. 
        Its been almost an year designing for clients across fintech, healthcare, ecommerce & social domains, 
        I am excited to take on new opportunities and collaborate with you to bring your ideas to life.
      </p>

      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {`UX by someone who can handle 11 cats – your digital experience is in capable hands! 😺💻`}
      </p>
      <div className="py-4">
      <Image width={0} height={0} sizes="80vw" className="rounded-lg" style={{ width: '50%', height: 'auto' }} src={'/saniaabout.jpeg'} alt="Project Preview Image" />
      </div>


      <hr className="border-neutral-500 mt-5 mb-3"></hr>
      
      {/* <hr className="border-neutral-500 mt-5 mb-3"></hr> */}
      <h1 className="dark:text-neutral-200 py-4 font-bold font-serif">I Use</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>{`Figma`}</div>
              </div>
            </div>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>{`Adobe Illustrator`}</div>
              </div>
            </div>
          </div>
        </a>      
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>{`Adobe Photoshop`}</div>
              </div>
            </div>
          </div>
        </a>
        
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>{`Adobe After Effects`}</div>
              </div>
            </div>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div>{`Sketch`}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  );
}
