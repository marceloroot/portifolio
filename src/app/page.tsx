import Header from "@/components/header";
import Projects from "@/components/project";
import Start from "@/components/start";
import TechSteck from "@/components/techstack";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Header />
      <div className="p-4 md:p-8">
      <Start />
      <TechSteck />
       <Projects />
      </div>
      </>
  
   
    
  );
}
