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

interface CardProcjectProps{
     image : string,
     title: string,
     subtitle:string,
     linkDeploy: string,
     linkGit: string,
}

function CardProcject({image,title,subtitle,linkDeploy,linkGit}:CardProcjectProps) {
    return ( 
        <div className=" hover:scale-110 transition-transform duration-300 max-w-[350px]   ">
        <div className="rounded-xl ">
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
                <AlertDialog>
                <AlertDialogTrigger className="flex items-center justify-center gap-2 p-2  bg-slate-400/20 rounded-xl ">
                    <p className="text-sm"> GitHub</p>
                    <Github size={15}/>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle className="text-center mb-3">Escolha entre o Back-End e Front-End?</AlertDialogTitle>
                        <AlertDialogDescription className="flex gap-4 justify-center items-center">
                            <a href="http://www.google.com" target="_blank" className="p-3 bg-blue-500/30 rounded-xl text-white">Back-End</a>
                            <a href="http://www.google.com" target="_blank" className="p-3 bg-blue-500/30 rounded-xl text-white">Front_end</a>
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>
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
        </div>
       </div>
     );
}

export default CardProcject ;