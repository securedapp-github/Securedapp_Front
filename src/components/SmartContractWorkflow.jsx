import React from "react";
import flow from "../images/smartworkflow.png";
const SmartContractWorkflow = () => {
  return (
    <div className="smartdevwork pb-[20px]">
      <div className="lg:mx-[180px] lg:pt-[120px] h-screen">
        <h1 className="font-sans lg:text-[60px] font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent lg:w-[450px]">
          How does a smart contract work?
        </h1>

        <div className="mt-[400px]">
          <p className="text-white font-sans text-opacity-80 text-[16px] font-normal leading-[160%]">
            We also offer a number of other services to help businesses with
            smart contract development, including how to develop secure and
            reliable smart contracts and help companies after their smart
            contracts have been developed.
          </p>
          <br />
          <p className="text-white font-sans text-opacity-80 text-[16px] font-normal leading-[160%] mb-[50px]">
            SecureDAPP is committed to helping businesses develop secure and
            reliable DApp. SecureDApp believes that smart contracts have the
            potential to revolutionise the way businesses operate, and we are
            excited to be a part of that revolution.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartContractWorkflow;
