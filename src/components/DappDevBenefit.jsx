import React from "react";
import hero from "../images/dappdevbenefithero.png";
const DappDevBenefit = () => {
  return (
    <div className="auditBenefit lg:pb-[50px] flex">
      <div>
        <div className="lg:pl-[80px] lg:pt-[80px] lg:pb-[40px]">
          <h1 className="text-white text-opacity-80 text-[32px] font-normal leading-[100%] lg:w-[620px]">
            SecureDApp offers a wide range of benefits for developers,
            including:
          </h1>
        </div>

        <div className=" lg:pb-[10px] lg:pl-[80px]   ">
          <div className="w-[770px] ">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Increased security:{" "}
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] w-[850px]">
              Increased security: SecureDApp's security-focused approach ensures
              that DApps are built on a secure foundation.
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%] w-[850px]">
              SecureDApp's security-focused approach ensures that DApps are
              built on a secure foundation. The platform offers a variety of
              security features, such as smart contract auditing and code
              reviews, to help developers identify and mitigate security risks.
            </h1>
          </div>

          <div className="w-[1086px] pt-[30px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Easy to use:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              SecureDApp's no-code platform makes it easy for developers to get
              started without having any coding experience. The platform
              provides a drag-and-drop interface that allows developers to
              create DApps without having to write any code.
            </h1>
          </div>

          <div className="w-[1095px] pt-[30px]">
            <h1 className="text-[#12D576] text-justify text-[16px] font-bold leading-[160%]">
              Cost-effective:
            </h1>
            <h1 className="text-white text-opacity-80 font-[16px] font-normal leading-[160%]">
              SecureDApp is a cost-effective solution for developers. The
              platform's no-code platform eliminates the need for developers to
              hire expensive developers, and the platform's security features
              help to protect DApps from security vulnerabilities.
            </h1>
          </div>
        </div>

        <div className="lg:py-[30px] lg:mx-[80px] lg:mt-[50px] lg:px-[30px] bg-black bg-opacity-30   ">
          <p className="text-white text-opacity-80 text-[20px] font-normal leading-[130%]">
            If you are a developer looking to build a secure and cost-effective
            DApp, then SecureDApp is a great option.
          </p>
          <p className="text-white text-opacity-80 text-[20px] font-normal leading-[130%]">
            The platform's security-focused approach and no-code platform make
            it easy to get started and protect your DApp from security
            vulnerabilities.
          </p>
        </div>
      </div>
      <div className="absolute right-[180px] top-[200px]">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default DappDevBenefit;
