import dynamic from "next/dynamic";
import Apresentation from "./homeComponents/apresentation"; 
import Comfort from "./homeComponents/comfort";
const ForWho = dynamic(() => import("./homeComponents/forWho"));
const Price = dynamic(() => import("./homeComponents/price"));
const Reviews = dynamic(() => import("./homeComponents/reviews"));
const Security = dynamic(() => import("./homeComponents/security"));
const VideoPlayer = dynamic(() => import("./homeComponents/videoPlayer"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-[8rem] w-full">
      <Apresentation />
      <Comfort />
      <Security />
      <ForWho />
      <Reviews />
      <Price />
      <VideoPlayer />
    </main>
  )
}
