import { Github, Linkedin } from "lucide-react";

function Footer() {
    return ( 
        <>
        <div className="flex items-center justify-center md:justify-between   mt-10">
          <div className="hidden md:flex items-center justify-center mt-3 ">
          <img
                src="/Logo.svg"
                alt="Vercel Logo"
                className="w-28 ms-4"
               
            />
          </div>
          <div className="flex items-center justify-center mt-3 gap-8">
           <div className="flex  flex-col md:flex-row  gap-2 md:gap-4">
            <h1 className="text-white/45 text-xs md:text-md">+55 35 98431 3982</h1>
            <h1 className="text-white/45  text-xs md:text-md">marcelo.lima.gomes.23@gmail.com</h1>
           </div>
           
           <div className="flex items-center justify-end gap-2 me-3 md:gap-5 ms-2 ">
              <a href="https://github.com/marceloroot" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/marcelo-lima-gomes" target="_blank"><Linkedin /></a>
              </div>
           <div>
     
           </div>
          </div>

        </div>


   <div id="footer" className="flex flex-col md:flex-row items-center justify-between border-t border-indigo-500  mt-5">
          <div className="flex flex-col md:flex-row items-center justify-center mt-3 gap-4 text-white/60">
          <a href="#home" className="text-md md:text-lg transition duration-300 ease-in-out">Home</a>
          <a href="#techstack"className="text-md md md:text-lg" >Habilidades</a>
          <a href="#project" className="text-md md md:text-lg">Projetos</a>
          <a href="#company" className="text-md md md:text-lg">Empresa</a>
          </div>
          <div className="flex items-center justify-center mt-3 gap-8">
           <div >
            <h1 className="text-white/70 text-md text-center">Designed and built by <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">Marcelo Lima Gomes</span> with Love & Coffee</h1>
            
           </div>
           
           
           <div>
     
           </div>
          </div>

        </div>
        </>
     );
}

export default Footer;