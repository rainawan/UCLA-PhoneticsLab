import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FFE578]">UCLA</span> Phonetics Lab
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
          <FooterItem
            Links={[
              "3125 Campbell Hall",
              "Box 951543",
              "Los Angeles, CA 90095-1543",
            ]}
            Title="Location"
          />
          <FooterItem
            Links={[
              "P: 310-825-0634",
              "F: 310-206-5743",
              "lingundergrad@humnet.ucla.edu",
            ]}
            Title="Contact"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>2024 Apply. All rights reserved.</span>
          <span>Terms | Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
