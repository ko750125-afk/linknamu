import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-6 py-12 sm:px-8 sm:py-16">
      <div className="flex w-full justify-end">
        <ThemeToggle />
      </div>
      <Profile />
      <LinkList />
    </main>
  );
}
