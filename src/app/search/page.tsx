"use client";

import Spinner from "@/components/Spinner";
import { convertTimestamp } from "@/utils/dates";
import { fetchSearch } from "@/utils/fetch";
import { getLogoURL } from "@/utils/game";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiShield, BiTrophy } from "react-icons/bi";
import { BsFillShieldFill, BsPerson, BsPersonBadge, BsPersonFill, BsPersonFillAdd, BsPersonFillUp, BsPersonPlusFill } from "react-icons/bs";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const [results, setResults] = useState<any>(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    setResults(false)
    fetchSearch(query || "")
      .then(res => {
        setResults(res)
        console.log(results);

      })
      .finally(() => setLoading(false))

  }, [query])


  const getImage = (content: any) => {
    const IMG = 40

    if ("image" in content) {
      return <img src={"defaultDark" in content.image ? getLogoURL(content.image.defaultDark, 80) : getLogoURL(content.image.default, 80)} alt="Img" width={IMG + 5} height={IMG + 5} />

    } else if ("images" in content) {

      return <img src={getLogoURL(content.images[0].url, 80)} alt="Img" className="rounded self-stretch" width={IMG + 10} height={IMG} />

    } else if (content.type === "player")
      return <BsPersonFill size={IMG} color="white" />

    else if (content.type === "team")
      return <BsFillShieldFill size={IMG} color="#0f172a" />

    else if (content.type === "league")
      return <BiTrophy size={IMG} color="white" />

    else
      return <div></div>
  }

  const manageItemPress = (content: any) => {
    const type = content.type
    if (type === "team") {
      const id = content.uid.match(/t\:(.*)/)[1]
      return `/team/${id}`

    } else if (type === "league") {
      return `/league/${content.defaultLeagueSlug}`

    } else if (type === "player") {
      const id = content.uid.match(/a\:(.*)/)[1]
      return `/player/${id}`

    } else if (type === "dStory") {
      const id = content.id
      return `/article/${id}`
    } else
      return ""

  }

  if (loading)
    return <Spinner />


  return (
    <div className="flex flex-col gap-2  mt-4 text-xs">


      {
        !loading && results ?

          results.totalFound === 0 ?
            <div className="text-center m-3 font-semibold ">Sin resultados</div>
            :
            <div >
              {
                "didYouMean" in results &&
                <Link
                  href={`/search?query=${results.didYouMean}`}
                  className="flex flex-row items-center gap-1 mx-10"
                  onClick={() => { }}
                >
                  <div className="text-red-400">Quizás quisiste decir:</div>
                  <div>{results.didYouMean}</div>
                </Link>
              }

              <div className={`flex md:flex-row flex-wrap flex-col justify-evenly  md:gap-6 gap-6 md:m-6 m-2`}>



                {
                  results.results.filter((n: any) => n.totalFound > 0).map((result: any, i: number) => (

                    <div key={i} className="md:w-[400px] w-full">
                      <div className="mb-3 text-[17px] font-semibold text-start">{result.displayName.replace("Notas", "Noticias").replace("Atletas", "Jugadores")}</div>

                      <div className="flex flex-col md:gap-3 gap-2">
                        {
                          result.contents.filter((x: any) => x.sport === "soccer" || x.type === "dStory").map((content: any, k: number) => (

                            <Link
                              key={k}
                              href={manageItemPress(content)}
                              className={`flex flex-row items-center md:p-2 ${content.type === "dStory" && "py-2"} p-1 rounded-lg gap-2 bg-[--tw-color-800] border-[1px] border-transparent md:hover:border-[--tw-primary] active:border-[--tw-primary]`}
                            >
                              {getImage(content)}
                              <div >
                                {
                                  content.type === "dStory" &&
                                  <div className="text-gray-300 text-[10px] font-semibold mb-1">{convertTimestamp(content.date).DDMMYYYY}</div>
                                }
                                <div >
                                  <div className={`${content.type != "dStory" ? "text-sm font-semibold " : ""}`}>{content.displayName}</div>
                                  {
                                    "subtitle" in content && content.type === "player" &&
                                    <div className="text-gray-300 text-[11px]">{content.subtitle}</div>
                                  }
                                </div>
                              </div>
                            </Link>

                          ))
                        }
                      </div>

                    </div>

                  ))
                }
              </div>
            </div>
          : <></>

      }




    </div>
  )
};

export default SearchPage;
