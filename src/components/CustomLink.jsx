import React from "react";
import { Link, Divider } from "@nextui-org/react";

const CustomLink = ({
  isExternal,
  download,
  italic,
  href,
  children,
  ...props
}) => {
  if (download) {
    return (
      <Link isExternal download size="lg" href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (italic) {
    return (
      <Link isExternal size="lg" href={href} {...props}>
        <span className="italic">{children}</span>
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
