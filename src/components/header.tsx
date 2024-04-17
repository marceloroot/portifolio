
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

function Header() {
    return ( 
        <header className="fixed top-0 flex items-center justify-between w-full p-4 bg-background border-b border-blue-500/40">

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
                    <CommandItem>Home</CommandItem>
                    <CommandItem>Sobre Mim</CommandItem>
                    <CommandItem>My Tech Stack</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Habilidades">
                    <CommandItem>Projetos</CommandItem>
                    <CommandItem>Empresas</CommandItem>
                    <CommandItem>Contato</CommandItem>
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
              <Github />
              <Linkedin />
              </div>
            </div>
          
        </header>
     );
}

export default Header;