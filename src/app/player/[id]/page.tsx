"use client";

import { useParams } from "next/navigation";

const PlayerPage = () => {
  const params = useParams();
  const id = params?.id as string; 

  return <div className="p-2">ID jugador: {id}</div>;
};

export default PlayerPage;
