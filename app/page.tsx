
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";



import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/ui/Hero";
import { MatrixCard } from "@/components/ui/MatrixCard";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";





export default function Home() {
  return (
    
      // <TracingBeam>

    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    
    <div className="max-w-7xl w-full ">
      <h1 className="text-white-200">Hello, Portfolio</h1>

      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Clients/>
     <MatrixCard/>
   
    </div>
   
   </main>
      // </TracingBeam>
     
  );
}