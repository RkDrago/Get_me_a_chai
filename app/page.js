import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white text-center py-24 flex flex-col gap-2">
        <div className="text-4xl font-bold flex justify-center items-center gap-3">
          Buy me a CHAI !
          <span><img src="/imgs/mocha.gif" width={60} alt="" /></span>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:gap-1">
          <p>A crowdfunding platform for creators.</p>
          <p>Get funded by your fans and followers.</p>
          <p>Start now!</p>
        </div>
        <div className="m-2 flex gap-4 justify-center">
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      <div className="text-white w-[80svw] container mx-auto py-24">
        <h2 className="text-center font-bold text-2xl mb-10">Your fans can buy you a CHAI</h2>
        <div className="flex flex-col md:flex-row justify-around text-center md:gap-0 gap-10">
          <div className="items-center flex flex-col gap-2">
            <img className="rounded-full" src="/imgs/sitchair.gif" width={90} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available to Help you</p>
          </div>
          <div className="items-center flex flex-col gap-2">
            <img className="rounded-full" src="/imgs/coin.gif" width={90} alt="" />
            <p className="font-bold">Each penny counts</p>
            <p>Your fans are available to Help you</p>
          </div>
          <div className="items-center flex flex-col gap-2">
            <img className="rounded-full" src="/imgs/team.gif" width={90} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to Help you</p>
          </div>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      <div className="text-white w-[80svw] container mx-auto pt-24 flex flex-col items-center gap-8">
        <h2 className="text-center font-bold text-2xl">Learn more about us</h2>
        <div className="flex flex-col xl:flex-row gap-8">
          <iframe className="rounded w-[311px] h-44 xl:w-[560px] xl:h-[315px]" src="https://www.youtube.com/embed/bLzNz-6oNYk?si=ofoVdIndcpALQB4g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe className="rounded w-[311px] h-44 xl:w-[560px] xl:h-[315px]" src="https://www.youtube.com/embed/OKPAPX_fGVw?si=0QkIeKPColbrucYw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="flex flex-col xl:flex-row gap-8">
          <iframe className="rounded w-[311px] h-44 xl:w-[560px] xl:h-[315px]" src="https://www.youtube.com/embed/Fk0ySAL1dLs?si=32h8zXRF_wu45vnQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe className="rounded w-[311px] h-44 xl:w-[560px] xl:h-[315px]" src="https://www.youtube.com/embed/N1s-GN1SWqY?si=v3Ta9VrMSG5jwqsG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
