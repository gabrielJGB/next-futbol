"use client"
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Home() {

  const [today] = useState<Date>(new Date())
  const { push } = useRouter()

  useEffect(() => {


    const todayString = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`

    push(`/${todayString}`)

    

  }, [])

  return <p className="p-2  text-center">Cargando...</p>

}
