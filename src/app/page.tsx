import Apresentation from "./homeComponents/apresentation"; 
import Comfort from "./homeComponents/comfort";
import ForWho from "./homeComponents/forWho";
import Security from "./homeComponents/security";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-[10rem] w-full">
      <Apresentation />
      <Comfort />
      <Security />
      <ForWho />
      <Reviews />
    </main>
  )
}
