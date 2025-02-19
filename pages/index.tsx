import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpg";
import {
  ArrowIcon,
  DribbleIcon,
  LinkedInIcon,
  MediumLogo,
  YoutubeIcon
} from "@/src/components/icons";
import { portfolioData, socialLinks } from "@/lib/info";
import AWS from "@/src/components/aws.svg";
import GCP from "@/src/components/gcp.svg";
import Postgres from "@/src/components/postgres.svg";
import Mongo from "@/src/components/mongodb.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { name } = portfolioData;
  return (
    <Layout
      data={{
        title: name,
        description: `A portfolio of ${name}`,
      }}
    >
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        {name}
      </h1>

      <p className="my-5 max-w-[480px] text-neutral-800 dark:text-neutral-200">
        {`Hey, I'm ${name} 👋`}<br /> <b>{`I am a UX designer`}</b>, with focus on seamless designs. Let's create beautiful experiences together.
      </p>
      <ul className="mb-2 flex flex-wrap  max-w-[480px]" aria-label="Technologies used">
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            User Experience
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Interaction Design
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Branding
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Visual
          </div>
        </li>
      </ul>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row text-white">
        <Image
          src={profilepic}
          alt="Sania"
          className="rounded-full"
          height={120}
          width={100}
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            className="flex items-center gap-2"
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2"
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumLogo />
            Medium
          </a>
          <a
            className="flex items-center gap-2"
            href={socialLinks.dribble}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbleIcon />
            Dribble
          </a>
        </div>
        {/* bio */}
      </div>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
      <b>With over half a decade of industry experience</b>, I specialize in crafting intuitive and engaging digital products, leveraging expertise in user-centric design and innovation.
      </p>


      <div className="max-w-[460px] text-neutral-900 dark:text-neutral-100 prose prose-neutral dark:prose-invert ">
        <p>
        I have also worked with companies like Kunato Inc., Line Technologies, Moeving, Auzmor & Lollypop across challenging domains..
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li className="">
          <a
            href={socialLinks.caseStudy}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            <ArrowIcon color="text-blue-600" />
            <p className="h-7 ml-2 text-blue-600">Explore case studies</p>
          </a>

        </li>
        <li className="">
          <a
            href={socialLinks.email}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            <ArrowIcon color="text-blue-600" />
            <p className="h-7 ml-2 text-blue-600">Send me an email</p>
          </a>

        </li>
        <li className="">
          <a
            href={socialLinks.resume}
            rel="noopener noreferrer"
            target="_blank"
            download="saniafathima_resume"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            <ArrowIcon color="text-blue-600" />
            <p className="h-7 ml-2 text-blue-600">Download resume</p>
          </a>

        </li>

      </ul>
    </Layout>
  );
}
