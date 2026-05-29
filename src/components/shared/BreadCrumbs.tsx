"use client";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <nav>
      {segments.map((segment) => (
        <span key={new Date().getSeconds()}>
          {segment === "" ? "> / " : " > "}
          {segment}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumbs;
