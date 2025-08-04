import { Button } from "@/components/ui/button";
import ModeToggler from "@/components/ui/ModeToggler";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      
      <ModeToggler/>
    </div>
  );
}
