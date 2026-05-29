import Link from "next/link";
import React, { useState } from "react";

const HoveredLink = (props: React.ComponentProps<typeof Link>) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      {...props}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      prefetch={isHovered}
    />
  );
};

export default HoveredLink;
