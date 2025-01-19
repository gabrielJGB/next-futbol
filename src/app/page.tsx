import { getTodayString } from "@/utils/dates";
import { redirect } from "next/navigation";

export default function Home() {

  redirect(`/${getTodayString()}`)

}
