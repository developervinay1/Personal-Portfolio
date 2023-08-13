import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroImage() {
  return (
    <Avatar className="w-24 h-24">
      <AvatarImage src="https://github.com/shadcn.png" alt="V" />
      <AvatarFallback>VS</AvatarFallback>
    </Avatar>
  );
}
