import Image from "next/image";
import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <div className="flex w-full flex-col items-center gap-4 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-foreground/10 ring-4 ring-white/60 dark:ring-white/10 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)] dark:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]">
        <Image
          src={profile.avatarImage}
          alt={profile.name}
          fill
          sizes="144px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/0 to-transparent" />
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <div className="relative w-full">
          <p className="text-center text-base text-foreground/60">
            {profile.bio}
          </p>
          <Image
            src="/qr.png"
            alt="QR 코드"
            width={56}
            height={56}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md ring-1 ring-white/60 dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
