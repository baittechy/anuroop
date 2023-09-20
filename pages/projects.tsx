import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import { socialLinks } from "@/lib/info";
import { ArrowIcon, GithubIcon, MediumLogo, NextLogo, Nodejs } from "@/src/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function About () {
  return (
    <Layout data={{ title: "Case study", description: "List of case study sania has worked on" }}>
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">Case study</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`Explore projects, creative process, and user-centered solutions that define my design philosophy and commitment to crafting remarkable digital experiences.`}
      </p>

      <hr className="border-neutral-500 mt-3 mb-3"></hr>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://medium.com/@saniasandy2003/instagram-revolutionizing-social-commerce-how-instagram-redefined-shopping-within-its-app-f1a8049a88d8`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MediumLogo />
                <div className="ml-3">Instagram Revolutionizing Social Commerce</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              In an era where social media and e-commerce are inextricably linked, Instagram took a significant leap forward by seamlessly integrating shopping into its platform.
            </p>
            <div className="py-4">
              <Image width={0}
                height={0}
                sizes="80vw"
                className="rounded-lg"
                style={{ width: '100%', height: 'auto' }} src={'/instashopping.jpeg'} alt="Project Preview Image" />
            </div>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://medium.com/@saniasandy2003/unveiling-unity-the-evolution-of-peachs-unisex-e-commerce-landing-page-through-my-design-journey-48388d214252`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MediumLogo />
                <div className="ml-3">
                  {`The Evolution of Peach’s Unisex E-commerce`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              {`I invite you to join me on an illuminating journey into the world of design thinking, where I trace the captivating evolution of Peach’s iconic unisex ecommerce landing page. Let’s dive into the intricate steps that led me from inspiration to innovation.`}
            </p>
            <div className="py-4">
              <Image width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg"
                style={{ width: '100%', height: 'auto' }} src={'/peach2.jpeg'} alt="Project Preview Image" />
            </div>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://medium.com/@saniasandy2003/immersive-innovation-a-modernized-nft-app-with-vr-integration-55300693e286`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MediumLogo />
                <div className="ml-3">
                  Immersive Innovation: A Modernized NFT App with VR Integration</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              NFTs have opened new possibilities for artists, musicians, gamers, and collectors. These digital tokens, powered by blockchain technology, have created a decentralized marketplace where unique assets can be bought, sold, and traded. However, as the NFT ecosystem expands, innovation becomes key to staying ahead of the curve.
            </p>
            <div className="py-4">
              <Image width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg"
                style={{ width: '100%', height: 'auto' }} src={'/nft3.jpeg'} alt="Project Preview Image" />
            </div>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://medium.com/@saniasandy2003/the-art-of-transformation-a-conceptual-redesign-of-payoneers-landing-page-d6a77e7c1847`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MediumLogo />
                <div className="ml-3">
                  {`A Conceptual Redesign of Payoneer’s Landing Page`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              {`In an increasingly competitive financial services market, Payoneer’s hypothetical landing page falls short in user engagement and conversion rates. The design is cluttered, the user flow is confusing, and the calls-to-action (CTAs) are not compelling enough.`}
            </p>
            <div className="py-4">
              <Image width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg"
                style={{ width: '100%', height: 'auto' }} src={'/payment4.jpeg'} alt="Project Preview Image" />
            </div>
          </div>
        </a>

      </div>
    </Layout>
  );
}
