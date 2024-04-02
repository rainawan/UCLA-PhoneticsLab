import React from "react";

const FooterItem = ({ Links, Title }) => {
  return (
    <ul>
      <h1 className="mb0-1 font-semibold">{Title}</h1>
      {Links.map((item, index) => (
        <li key={index}>
          <a
            key={index}
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm leading-6"
            // href={Link}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
