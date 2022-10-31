import { TypeAnimation } from "react-type-animation";
import { CITY, COUNTRY } from "../lib/constants";
import { FiSend } from "react-icons/fi";
import { Heading } from "./Heading";
import { Avatar } from "./Avatar";
import { Links } from "./Links";

// Next.js
import Link from "next/link";

export const Main = () => {
  return (
    <>
      <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link href={`https://www.google.com/maps/place/${CITY}`}>
            <a
              className="w-fit focus:ring-2 ring-[#fc9d03] rounded-lg outline-none font-semibold"
              target="_blank"
            >
              <div
                className="flex items-center p-1 text-sm px-3 my-2 w-fit rounded-full text-white bg-[#fc9d03]" // f-5-4-b-f-f
                title={`${CITY}, ${COUNTRY}`}
              >
                <FiSend className="mr-2" />
                {CITY}, {COUNTRY}
              </div>
            </a>
          </Link>
          <Heading style={{ marginBottom: "0.5rem" }}>
            Hi, I&apos;m Sahil! <span className="wave">👋</span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            {new Date().getFullYear() - 2002} y/o&nbsp;
            <TypeAnimation
              sequence={[
                "backend engineer",
                2000,
                "rustacean",
                2000,
                "builder",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <Links />
        </div>
        <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
          <Avatar width={122} height={122} />
        </div>
      </main>
    </>
  );
};
