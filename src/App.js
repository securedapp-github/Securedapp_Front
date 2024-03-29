import "./App.css";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import ScanComp from "./components/ScanComp";
import AboutComp from "./components/AboutComp";
import ContactComp from "./components/ContactComp";
import SmartContractdev from "./components/SmartContractdev";
import DappSecurityAudit from "./components/DappSecurityAudit";
import DappDevComp from "./components/DappDevComp";
import SecurePadTokenComp from "./components/SecurePadTokenComp";
import BlogComp from "./components/BlogComp";
import TokenomicsComp from "./components/TokenomicsComp";
import BlogIndi from "./components/BlogIndi";
import TxnComp from "./components/TxnComp";
import SecureWatch from "./components/SecureWatch";
import Securewatch1 from "./components/Securewatch1";
import Securewatch2 from "./components/Securewatch2";
// import ReactGA from 'react-ga';
// const TRACKING_ID = "G-GXZX7PXY8D"; 
// ReactGA.initialize(TRACKING_ID);

function App() {

  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [showScanResult, setShowScanResult] = useState(false);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  const handleAnalyzeButtonClick = () => {
    setShowScanResult(true);
  };
  useEffect(() => {
    console.log(selectedMenuItem);
    setShowScanResult(false);
  }, [selectedMenuItem]);

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <Routes>
      <Route exact path="/" element={<HomeComp />} />
      <Route exact path="/smart-contract-scanner-solidity-shield" element={<ScanComp />} />
      <Route exact path="/about-us" element={<AboutComp />} />
      <Route exact path="/contact-us" element={<ContactComp />} />
      <Route exact path="/smart-contract-development" element={<SmartContractdev />} />
      <Route exact path="/dapp-security-audit" element={<DappSecurityAudit />} />
      <Route exact path="/dapp-development" element={<DappDevComp />} />
      <Route exact path="/token-launchpad-Securepad" element={<SecurePadTokenComp />} />
      <Route exact path="/tokenomics-design" element={<TokenomicsComp />} />
      <Route exact path="/blog/:id" element={<BlogIndi/>} />
      <Route exact path="/blog" element={<BlogComp />} />
      <Route exact path="/securewatch" element={<SecureWatch/>} />
      <Route exact path="/securewatch1" element={<Securewatch1/>} />
      <Route exact path="/securewatch2" element={<Securewatch2/>} />
      <Route exact path="/txn-status/:id" element={<TxnComp />} />
      </Routes>
  );
}

export default App;
