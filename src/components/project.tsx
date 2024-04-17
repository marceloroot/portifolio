"use client"

import CardProcject from "./card-project";

function Projects() {
    const projectsOne = [
        {
            image:"talknote.svg",
            title:"Talk Note",
            subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
            linkGit:"",
            linkDeploy:"https://talknote.marcelodlg.com.br",

       },
       {
        image:"sgs.svg",
        title:"Sistema de Gestão Social",
        subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
        linkGit:"",
        linkDeploy:"https://talknote.marcelodlg.com.br",
       },
       {
        image:"mineshack.svg",
        title:"Mines Hack",
        subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
        linkGit:"",
        linkDeploy:"https://talknote.marcelodlg.com.br",
       },
      
]
const projectsTwo = [
    {
        image:"pregao.svg",
        title:"Pregao Alfenas",
        subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
        linkGit:"",
        linkDeploy:"https://talknote.marcelodlg.com.br",


   },
   {
    image:"academia.svg",
    title:"PWA Academia",
    subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
    linkGit:"",
    linkDeploy:"https://talknote.marcelodlg.com.br",
   },
   {
    image:"transparencia.svg",
    title:"Transparência Alfenas",
    subtitle:"Projeto de anotações e agendamento por sadasdas dasdfala, feito com a IA da Gemini",
    linkGit:"",
    linkDeploy:"https://talknote.marcelodlg.com.br",
   },
  
  
]
    return ( 
        <div className="flex flex-col items-center justify-between mt-24 flex-wrap ">
        <h1 className="text-sm md:text-2xl text-white/70 font-build uppercase text-center">Projetos</h1>
        <h2 className="text-xs md:text-2xl text-white/40 font-build  text-center">Alguns dos projetos que trabalhei</h2>
        <div className="flex flex-col md:flex-row gap-9 p-0 mt-8 ">
        
         {
            projectsOne.map((item) =>(
                 <CardProcject 
                 image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  linkDeploy={item.linkDeploy} 
                  linkGit={item.linkGit}
                  />
            ))
         }

        
       
       

           
          
        </div>
        <div className="flex flex-col md:flex-row gap-9 p-0 mt-8 ">
        
        {
           projectsTwo.map((item) =>(
                <CardProcject 
                image={item.image} 
                title={item.title} 
                subtitle={item.subtitle} 
                linkDeploy={item.linkDeploy} 
                linkGit={item.linkGit}
                />
           ))
        }

       
      
      

          
         
       </div>

        <div className="flex flex-col md:flex-row gap-9 p-0 mt-8 ">
        


       
       

           
          
        </div>

        

     
        
        

         
      </div>

     );
}

export default Projects
