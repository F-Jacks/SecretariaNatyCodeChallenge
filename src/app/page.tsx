import Apresentation from "./homeComponents/apresentation"; 
import Comfort from "./homeComponents/comfort";
import ForWho from "./homeComponents/forWho";
import Price from "./homeComponents/price";
import Reviews from "./homeComponents/reviews";
import Security from "./homeComponents/security";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-[10rem] w-full">
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
