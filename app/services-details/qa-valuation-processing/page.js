"use client";;
import Layout from "@/components/layout/Layout";
import { WhatWeOffer } from "@/components/qa/what-we-offer";
import { FinalCTA } from "@/components/qa/final-cta";
import { HeroSection } from "@/components/qa/hero-section";
import { WhoWeAre } from "@/components/qa/who-we-are";
import { WhyChooseEcesis } from "@/components/qa/why-choose-ecesis";

const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <HeroSection />
        <WhatWeOffer />
        <WhoWeAre />
        {/* <OurRole /> */}
        {/* <CoreCapabilities />
        <IndustriesServed /> */}
        <WhyChooseEcesis />
        {/* <BusinessImpact /> */}
        {/* <EngagementModels /> */}
        {/* <DeliveryApproach /> */}
        <FinalCTA />
      </Layout>
    </div>
  );
};

export default page;
