import Apresentation from "./homeComponents/apresentation"; 
import Comfort from "./homeComponents/comfort";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-[90px] w-[100vw]">
      <Apresentation />
      <Comfort />
    </main>
  )
}
