import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FFE578]">UCLA</span> Phonetics Lab
        </h1>
        <div className="text-left flex justify-center">
          <div className="p-5">
            <FooterItem
              Links={[
                "2101 Campbell Hall",
                "Department of Linguistics",
                "335 Portola Plaza",
                "Box 951543, MC 154302",
                "Los Angeles, CA 90095-1543",
              ]}
              Title="Location"
            />
          </div>
          <div className="p-5">
            <FooterItem
              Links={[
                "P: 310-825-0634",
                "F: 310-206-5743",
                "phonetics@ucla.edu",
              ]}
              Title="Contact"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>2024 Apply. All rights reserved.</span>
          <span>Terms | Conditions</span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
