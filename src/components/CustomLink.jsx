import React from "react";
import { Link, Divider } from "@nextui-org/react";

const CustomLink = ({ isExternal, download, href, children, ...props }) => {
  if (download) {
    return (
      <Link isExternal download size="lg" href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link isExternal size="lg" href={href} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
