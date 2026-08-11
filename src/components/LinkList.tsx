import { links } from "@/data/links";
import LinkCard from "@/components/LinkCard";

export default function LinkList() {
  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
