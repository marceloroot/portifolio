import ChatMessage from "@/components/chat";

import Company from "@/components/company";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/project";
import Start from "@/components/start";
import TechSteck from "@/components/techstack";




 

 

export default function Home() {
  return (
    
      <>
    
      <Header />
      
      <div className="p-4 md:p-8">
      <Start />
      <TechSteck />
       <Projects />
       <Company />
       <Footer />
       <ChatMessage />
   
      </div>
      </>
  
    
    
  );
}
