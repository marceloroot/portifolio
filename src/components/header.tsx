
"use client"
import { Github, Linkedin, Menu } from "lucide-react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Command,

    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,

  } from "@/components/ui/command"
import { useEffect, useState } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return ( 
        <header id="header" className={`fixed top-0 flex items-center justify-between w-full p-4 bg-background  shadow-md shadow-blue-500/20 ${isScrolled ? 'opacity-80' : ''}`}>

          <div className="flex items-center ">
            <Sheet >
            <SheetTrigger  className="flex    animate-bounce hover:animate-pulse "><Menu /></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                <Command>
                <CommandInput placeholder="Digite o quer buscar..." />
                <CommandList>
                    <CommandEmpty>Nehum resultado.</CommandEmpty>
                    <CommandGroup heading="Pessoal">
                    <a href="#home"><CommandItem>Home</CommandItem></a>
                    <a href="#techstack"><CommandItem>Habilidades</CommandItem></a>
                   </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Experiência">
                    <a href="#project"><CommandItem>Projetos</CommandItem></a> 
                    <a href="#company"><CommandItem>Empresas</CommandItem></a> 
                    <a href="#footer"><CommandItem>Contato</CommandItem></a> 
                    </CommandGroup>
                </CommandList>
                </Command>

                </SheetHeader>
            </SheetContent>
            </Sheet>

            </div>

          <div className="flex flex-grow justify-center items-center ">
            <img
                src="/Logo.svg"
                alt="Vercel Logo"
                className="h-6 md:h-9 w-30 md:w-72"
               
            />
            </div>

            <div>
              <div className="flex items-center gap-2 me-3 md:gap-5 ms-2 ">
              <a href="https://github.com/marceloroot" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/marcelo-lima-gomes" target="_blank"><Linkedin /></a>
              </div>
            </div>
          
        </header>
     );
}

export default Header;