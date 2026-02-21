"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <AlignLeft className="hover:text-darkColor hover:cursor-pointer hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">{isOpen && <SideMenu />}</div>
    </>
  );
}
