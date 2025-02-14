"use client";

import { useParams } from "next/navigation";

const PlayerPage = () => {
  const params = useParams();
  const id = params?.id as string; // Forzamos que id sea un string

  return <div>El ID es: {id}</div>;
};

export default PlayerPage;
