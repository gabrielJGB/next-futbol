import NewCounter from "@/components/NewCounter";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Counter desde about</div>
      <Link href={"/"}>/Volver a Home</Link>
      <NewCounter />
    </div>
  );
}
