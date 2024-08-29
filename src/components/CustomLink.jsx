import React from "react";
import { Link, Divider } from "@nextui-org/react";

const CustomLink = ({ isExternal, href, children, ...props }) => {
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link isExternal size="lg" href={href} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
