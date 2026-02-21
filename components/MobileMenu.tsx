"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function MobileMenu() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft className="hover:text-darkColor hover:cursor-pointer hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
    </>
  );
}
