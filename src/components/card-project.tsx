import { Github, Link } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
    import { motion, useScroll } from "framer-motion"
interface CardProcjectProps{
     image : string,
     title: string,
     subtitle:string,
     linkDeploy: string,
     linkGitBackend?: string,
     linkGit: string,
     duration:number,
     styleModule:"x" | "y",
     typeTwoMode:boolean
}

function CardProcject({image,title,subtitle,linkDeploy,linkGit,duration,styleModule,typeTwoMode,linkGitBackend}:CardProcjectProps) {
        const { scrollYProgress } = useScroll();
        
    return ( 
        <div className=" hover:scale-110 transition-transform duration-300 max-w-[350px]   ">
        <motion.div className="rounded-xl "
          initial={{opacity:0,[styleModule === "x" ? "x" : "y"]: styleModule === "x" ? -150 : 150}}
          whileInView={{opacity:1,[styleModule === "x" ? "x" : "y"]:0}}
          transition={{duration:duration,delay:0, ease:'easeInOut'}}
        >
        <img
             src={`/projects/${image}`}
             alt="card logo"
             width="400"
             height="20"
             className="rounded-lg overflow-hidden w-full border"

         />
         <div className=" flex flex-col items-center justify-center px-3 rounded-b-xl bg-white/10 border">
             <h1 className="text-center text-md  font-bold break-words mt-2">{title}</h1>
             <h1 className="text-center text-xs  word ">{subtitle}</h1>
             <div className="flex items-center justify-between gap-4 mt-4 mb-2">
                {typeTwoMode
                   ?
                
                   <AlertDialog>
                   <AlertDialogTrigger className="flex items-center justify-center gap-2 p-2  bg-slate-400/20 rounded-xl ">
                       <p className="text-sm"> GitHub</p>
                       <Github size={15}/>
                       </AlertDialogTrigger>
                       <AlertDialogContent>
                           <AlertDialogHeader>
                           <AlertDialogTitle className="text-center mb-3">Escolha entre o Back-End e Front-End?</AlertDialogTitle>
                           <AlertDialogDescription className="flex gap-4 justify-center items-center">
                               <a href={`${linkGitBackend}`} target="_blank" className="p-3 bg-blue-500/30 rounded-xl text-white">Back-end</a>
                               <a href={`${linkGit}`} target="_blank" className="p-3 bg-blue-500/30 rounded-xl text-white">Front_end</a>
                           </AlertDialogDescription>
                           </AlertDialogHeader>
                           <AlertDialogFooter>
                           <AlertDialogCancel>Cancel</AlertDialogCancel>
                           <AlertDialogAction>Continue</AlertDialogAction>
                           </AlertDialogFooter>
                       </AlertDialogContent>
                   </AlertDialog>
                    :
                    
                    <a href={`${linkGit}`} target="_blank">      
                 <div className="flex items-center justify-center gap-2 p-2  bg-slate-400/20 rounded-xl ">
                 <p className="text-sm"> GitHub</p>
                 <Github size={15}/>
                </div>
                </a> 
                    }
              
                {/* <a href={`${linkGit}`} target="_blank">      
                 <div className="flex items-center justify-center gap-2 p-2  bg-slate-400/20 rounded-xl ">
                 <p className="text-sm"> GitHub</p>
                 <Github size={15}/>
                </div>
                </a> */}
            <a href={`${linkDeploy}`} target="_blank">      
             <div className="flex  items-center justify-center gap-2  p-2 bg-slate-400/20 rounded-xl  ">
             <p className="text-sm">Deploy   </p>
                 <Link  size={15}/>
                
             </div>
            </a>
           
             </div>

         </div>
        </motion.div>
       </div>
     );
}

export default CardProcject ;