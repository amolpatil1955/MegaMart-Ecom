import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { GoPerson } from "react-icons/go";

function Login() {
  return (
    <div>
      <SignedIn>
        <div className="flex items-center  justify-center gap-1">
          <UserButton className="text-2xl"  appearance={{
          elements: {
            avatarBox: {
              width: "35px",   // increase width
              height: "35px",  // increase height
            },
          },
        }}/>
        </div>
      </SignedIn>

      {/* 👇 Show login button if not signed in */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className=" bg-[#f3f9fb]  px-1 py-1 border border-sky-600 rounded-[50%]">
            <p className="text-2xl p-1  text-black">
              <GoPerson />
            </p>
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}

export default Login;
