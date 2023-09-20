import Header from "@/src/components/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/src/components/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import saniaLogo from "@/src/components/sanialogo3.png";

function MyLogo() {
  return (
    <Image className="rounded-full items-center bg-white" src={saniaLogo} alt="Sania" width={60} height={65} />
  );
}

const Layout = ({
  data,
  children,
}: {
  data: { title: string; description: string };
  children: ReactNode;
}) => {
  let { title, description } = data;
  let pathName = usePathname() || "/";

  return (
    <>
      <Header title={title} description={description} />
      <main className="flex flex-col md:flex-row">
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
          <div className="lg:sticky lg:top-20">
            <span className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start">
              <MyLogo />
            </span>
            <nav className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative text-neutral-800 dark:text-neutral-200">
              <ul className="text-bold mt-2 flex flex-row md:flex-col space-x-0 pr-10 mb-2 md:mt-0">
                <li className="py-[5px] pr-[16px]">
                  <Link href="/">
                    <span
                      className={` dark:hover:text-neutral-200 py-[10px] px-[10px] ${
                        pathName == "/"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-all duration-1000"
                          : ""
                      }`}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="py-[5px] pr-[16px]">
                  <Link href="/projects">
                    <span
                      className={` dark:hover:text-neutral-200 py-[10px] px-[10px] ${
                        pathName == "/projects"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-color duration-500"
                          : ""
                      }`}
                    >
                      Case study
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="/about">
                    <span
                      className={` dark:hover:text-neutral-200 py-[10px] px-[10px] ${
                        pathName == "/about"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-color duration-500"
                          : ""
                      }`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                {/* <li className="py-[5px]">
                  <Link
                    href="https://blog.muralielumalai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={` dark:hover:text-neutral-200 py-[5px] px-[10px]`}
                    >
                      Blog {`>>`}
                    </span>
                  </Link>
                </li> */}

                {/* Add more menu items as needed */}
              </ul>
            </nav>
          </div>
        </aside>
        <motion.div className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </motion.div>
      </main>
    </>
  );
};
Layout.propTypes = {
  data: PropTypes.object,
  children: PropTypes.array,
};

Layout.defaultProps = {
  data: {},
  children: {},
};

export default Layout;
