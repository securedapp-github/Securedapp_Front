import React from "react";

import Subheading from "./Subheading";
import hero from "../images/schield.png";
import SectionHeader from "./SectionHeader";
import DescriptionFor from "./DescriptionFor";
export const Scanner = () => {
  return (
    <div className="md:pt-[60px] pt-[400px] pb-0  scan_schield w-full -mb-[40px] ">
      <div className="flex lg:flex-row md:flex-row w-full md:pt-[20px] md:px-[80px] px-[30px] py-0 pb-[80px] flex-col-reverse h-[600px]">
        <div className="px-3 pt-0 md:pb-0 pb-[50px] flex-shrink lg:w-11/12 h-fit">
          <div className="md:w-3/4">
            <SectionHeader content="Smart Contract Scanner - Solidity Shield" />
          </div>
          <DescriptionFor
            content={
              "Solidity Shield is an advanced, AI-powered vulnerabilities detection application designed specifically for smart contracts written in Solidity, the programming language used for Ethereum-based blockchain applications. Solidity Shield utilises cutting-edge artificial intelligence techniques to automatically and rapidly identify vulnerabilities within smart contracts, providing developers with a powerful tool to enhance the security and reliability of their blockchain projects."
            }
          />
          <DescriptionFor
            content={
              "At the heart of Solidity Shield is its automated bot, a highly efficient and intelligent system that can analyse smart contracts within a matter of seconds. The bot leverages machine learning algorithms and natural language processing techniques to comprehend and interpret the code, enabling it to detect potential vulnerabilities with remarkable accuracy and speed."
            }
          />
        </div>
        <div className="md:mb-[100px] lg:-mt-[80px] mt-[0px] lg:w-10/12 lg:h-10/12 h-5/6 w-auto lg:pt-0 pt-[100px]">
          <img
            src={hero}
            className="md:w-[496px] md:h-[633px] h-5/6 w-auto lg:mx-0 mx-auto "
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};
