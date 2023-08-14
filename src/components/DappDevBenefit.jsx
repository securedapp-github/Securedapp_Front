import React from "react";
import hero from "../images/dappdevbenefithero.png";
import Request from "./Request";
import { useState } from "react";
import AuditModal from "./AuditModal";
const DappDevBenefit = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="auditBenefit lg:pb-[50px] flex lg:flex-row flex-col-reverse">
        <div>
          <div className="lg:px-[80px] px-[20px]  lg:pt-[80px] lg:pb-[40px]">
            <h1 className="text-white text-opacity-80 text-[32px] font-normal leading-[100%] lg:w-[620px] ">
              SecureDApp offers a wide range of benefits for developers,
              including:
            </h1>
          </div>

          <div className=" lg:pb-[10px] lg:px-[80px] px-[20px] pb-[30px]  ">
            <div className="lg:w-[770px] w-[400px] lg:pt-0 pt-[40px] ">
              <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
                Increased security:{" "}
              </h1>
              <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] lg:w-[850px]">
                Increased security: SecureDApp's security-focused approach
                ensures that DApps are built on a secure foundation.
              </h1>
              <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] lg:w-[850px]">
                SecureDApp's security-focused approach ensures that DApps are
                built on a secure foundation. The platform offers a variety of
                security features, such as smart contract auditing and code
                reviews, to help developers identify and mitigate security
                risks.
              </h1>
            </div>

            <div className="lg:w-[1086px] pt-[30px] w-[400px]">
              <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
                Easy to use:
              </h1>
              <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
                SecureDApp's no-code platform makes it easy for developers to
                get started without having any coding experience. The platform
                provides a drag-and-drop interface that allows developers to
                create DApps without having to write any code.
              </h1>
            </div>

            <div className="lg:w-[1095px] pt-[30px]">
              <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
                Cost-effective:
              </h1>
              <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
                SecureDApp is a cost-effective solution for developers. The
                platform's no-code platform eliminates the need for developers
                to hire expensive developers, and the platform's security
                features help to protect DApps from security vulnerabilities.
              </h1>
            </div>
          </div>

          <div className="lg:py-[30px] py-5 lg:mx-[80px] mx-[20px] lg:mt-[50px] lg:px-[30px] px-5 bg-black bg-opacity-30   ">
            <p className="text-white text-opacity-80 text-[20px] font-normal leading-[130%]">
              If you are a developer looking to build a secure and
              cost-effective DApp, then SecureDApp is a great option.
            </p>
            <p className="text-white text-opacity-80 text-[20px] font-normal leading-[130%]">
              The platform's security-focused approach and no-code platform make
              it easy to get started and protect your DApp from security
              vulnerabilities.
            </p>
          </div>
        </div>
        <div className="lg:absolute flex justify-center items-center  lg:right-[180px] lg:top-[200px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col  lg:h-[140px] md:h-[270px] lg:pt-[0px] md:pt-[0px] md:pb-9 pt-[50px] lg:py-[10px]  req">
        <div className="md:mx-[80px] mx-[25px] md:my-[30px]  mb-[0px] pl-[0px]">
          <div className="text-white md:text-[32px] text-[25px] md:mb-[0px] mb-[10px]  font-semibold font-sans leading-[110%] ">
            Securing Your{" "}
            <span className="text-[#12D576] text-opacity-80">Web3 Journey</span>
            , So You Focus on Building
          </div>
          <div className="text-white pt-1 mt-[15px] text-[16px] font-normal font-sans leading-[135%] text-opacity-60">
            Comprehensive Blockchain Security Solutions & Smart Contract.
            Audits Secure your smart contract with SecureDApp.
          </div>
        </div>
        <div className="flex justify-center items-center md:mb-[20px] mb-[50px] md:ml-0 ml-[40px] pr-[30px] lg:pl-[30px] ">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className=" z-[100001] lg:mt-[50px] md:mb-[10px] md:mt-[5px] mt-[20px] h-[60px] w-[341px] py-0 px-8  border border-transparent text-black  rounded-full [background:linear-gradient(90deg,_#12d576,_#2d5c8f)] shadow-[0px_0px_80px_rgba(18,_213,_118,_0.25)]  text-center font-sans md:text-2xl text-xl font-normal leading-normal"
          >
            Request Your Audit Today
          </button>
        </div>

        {showModal && <AuditModal onClose={handleModalClose} />}
      </div>
    </>
  );
};

export default DappDevBenefit;
