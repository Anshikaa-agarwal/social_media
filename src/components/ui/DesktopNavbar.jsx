import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggler from "./ModeToggler";
import { currentUser } from "@clerk/nextjs/server";

async function DesktopNavbar() {
  const user = await currentUser();

  return (
    <div className="hidden md:flex items-center gap-5 lg:gap-7 px-4 py-2 border border-border rounded-xl bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
      {/* Dark/Light Mode Toggle */}
      <ModeToggler />

      {/* Home */}
      <Button
        variant="ghost"
        className="group flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-accent/40 transition-colors px-3 py-2 rounded-md"
        asChild
      >
        <Link href="/">
          <HomeIcon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          {/* Notifications */}
          <Button
            variant="ghost"
            className="group flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-accent/40 transition-colors px-3 py-2 rounded-md"
            asChild
          >
            <Link href="/notifications">
              <BellIcon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>

          {/* Profile */}
          <Button
            variant="ghost"
            className="group flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-accent/40 transition-colors px-3 py-2 rounded-md"
            asChild
          >
            <Link
              href={`/profile/${
                user.username ??
                user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>

          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button
            variant="default"
            className="text-sm font-semibold px-5 py-2 rounded-md transition-all hover:scale-[1.02]"
          >
            Sign In
          </Button>
        </SignInButton>
      )}
    </div>
  );
}

export default DesktopNavbar;
