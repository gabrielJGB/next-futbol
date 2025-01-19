import Counter from "@/components/Counter";
import { getTodayString } from "@/utils/dates";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <div>Counter desde home</div>
  //     <Counter />
  //     <Link href={"/about"} >/Ir About</Link>
  //   </div>
  // );
  // redirect("/1")

  redirect(`/${getTodayString()}`)



}
