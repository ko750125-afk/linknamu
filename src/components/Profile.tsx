import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-foreground/10 text-4xl font-semibold">
        {profile.avatarInitial}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-base text-foreground/60">{profile.bio}</p>
      </div>
    </div>
  );
}
