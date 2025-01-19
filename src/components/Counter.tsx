"use client"

import { useDateStore } from "@/stores/dateStore";


const Counter = () => {

  const  { date } = useDateStore()

  return (
    <div className='flex flex-row gap-1 p-2'>
      
      <div className="text-red-400">{date}</div>
    </div>
  );
};

export default Counter;
