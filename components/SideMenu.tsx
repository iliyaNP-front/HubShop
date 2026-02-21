import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenu({ isOpen, onClose }: SideBarProps) {
  const pathName = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`
        fixed 
        inset-y-0 
        h-screen 
        left-0 
        z-50 
        w-full
        bg-black/50 
        shadow-xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        hoverEffect
        `}
    >
      <div
        ref={sideBarRef}
        className="
            min-w-72 
            max-w-96 
            bg-black 
            text-white/70
            h-screen 
            p-10
            border-r
            border-r-shop_light_green
            flex
            flex-col
            gap-6
        "
      >
        <div
          className="
            flex 
            items-center 
            justify-between 
            gap-5
            "
        >
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div
          className="
            flex
            flex-col
            space-y-3.5
            font-semibold
            tracking-wide
            "
        >
          {headerData.map((item) => (
            <Link
              className={`
                hover:text-shop_light_green
                hoverEffect
                ${pathName === item.href ? "text-white" : ""}
                `}
              key={item.title}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}
