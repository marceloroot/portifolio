import Company from "@/components/company";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/project";
import Start from "@/components/start";
import TechSteck from "@/components/techstack";
import Image from "next/image";



import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
 

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
      </div>
      </>
  
    
    
  );
}
