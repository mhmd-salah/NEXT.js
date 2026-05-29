"use client";
import { useToken } from "@/components/token-provider";
import HoveredLink from "@/components/ul/HoveredLink";
export default function Home() {
  const token = useToken();
  return (
    <>
      <div>hello world {token.jwt}</div>
      <HoveredLink href={"/dashboard"}>go </HoveredLink>
      <HoveredLink href={"/"}>go home</HoveredLink>
    </>
  );
}
