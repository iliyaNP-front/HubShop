import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button
        className="
        text-sm 
        font-semibold 
        text-lightColor 
        hover:text-darkColor 
        hover:cursor-pointer 
        hoverEffect
        "
      >
        Login
      </button>
    </SignInButton>
  );
}
