import React from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
import Subheading from "./Subheading";
const ProductCard = {
  products: [
    {
      heading: "Smart Contract Development",
      description:
        "Weprioritize security, ensuring that your decentralized applications are built with the highest level of protection.",
      link: "/smart-contract-development", //read more link
    },
    {
      heading: "DApp Security Audit",
      description:
        "An automated, thorough and efficient audits of your smart contracts. Eliminate risks of hacks, exploits and front-running attacks from your decentralized apps with a top-tier audit methodology",
      link: "/dapp-security-audit", //read more link
    },
    {
      heading: "DApp Development",
      description:
        "SecureDApp is a blockchain security solution that offers a comprehensive range of services for developers building decentralised applications (DApps).",
      link: "/dapp-development", //read more link
    },
    {
      heading: "Solidity Shield Scanner",
      description:
        "Solidity Shield Scanner is an AI-powered vulnerability detection application that uses static analysis and dynamic analysis to identify potential security vulnerabilities in Solidity smart contracts.",
      link: "/smart-contract-scanner-solidity-shield", //read more link
    },
    {
      heading: "SecurePAD's Token Launchpad",
      description:
        "SecurePAD is the world's first zero-fee, security-prominent, no-code, and cross-chain platform for anyone to create, trade, and manage the end-to-end lifecycle of a token.",
      link: "/token-launchpad-Securepad", //read more link
    },
    {
      heading: "Tokenomics Design,  Development & Audit",
      description:
        "SecureDApp provides tokenomics design, development, and audit services to help businesses create and launch successful token-based projects.",
      link: "/tokenomics-design", //read more link
    },
  ],
};

const Card = ({ heading, description, link }) => {
  return (
    <div
      className=" md:p-8 p-5  rounded-[20px] font-gilroy"
      style={{ background: "rgba(255, 255, 255, 0.05)" }}
    >
      <div className=" h-full flex flex-col justify-between rounded-lg overflow-hidden">
        <div>
          <h2 className="md:text-2xl text-xl text-white font-gilroy leading-[100%] font-bold mb-4">
            {heading}
          </h2>
          <Subheading content={description} />
        </div>
        <a
          href={link}
          className="text-[#000000] py-3 font-gilroy font-semibold text-[20px] mt-4 inline-block bg-[#12D576] "
          style={{'borderRadius':'20px'}}
        >
         <span className="text-[#000000] flex items-center justify-center">Read More</span> 
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="lg:py-[80px] lg:px-[80px] md:p-[70px] p-[50px] product ">
      <SectionHeader content={"SecureDApp’s Products and Services"} />
      <div className="lg:p-[30px] lg:pl-0 md:pt-[30px] pt-[30px] px-[5px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProductCard.products.map((product, index) => (
            <Card
              key={index}
              heading={product.heading}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
