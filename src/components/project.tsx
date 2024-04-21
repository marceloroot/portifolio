"use client"

import CardProcject from "./card-project";

function Projects() {

    const projectsOne = [
        {
            image:"talknote.svg",
            title:"Talk Note",
            subtitle:"Aplicativo de anotações e agendamento integrado com a IA da Gemini. Agora, os usuários podem facilmente criar e organizar suas notas, além de agendar compromissos com assistência inteligente, tornando a gestão de tarefas mais eficiente e inteligente.",
            linkGit:"https://github.com/AulaMarcelo/talk_web",
            linkGitBack:"https://github.com/AulaMarcelo/talk_backend",
            linkDeploy:"https://talknote.marcelodlg.com.br",
            duration:0.25,
            typeTwoMode:true,

       },
       {
        image:"sgs.svg",
        title:"Sistema de Gestão Social",
        subtitle:"Sistema abrangente de gestão social para administrar núcleos familiares em situação de risco, com gestão de atendimento integrada. Inclui benefícios, documentos e agendamentos para facilitar a assistência social de forma eficaz.",
        linkGit:"https://github.com/Prefeitura-de-Alfenas/FrontEnd_SGS",
        linkGitBack:"https://github.com/Prefeitura-de-Alfenas/Backend_SGS",
        linkDeploy:"http://teste.alfenas.mg.gov.br",
        duration:0.50,
        typeTwoMode:true
       },
       {
        image:"mineshack.svg",
        title:"Mines Hack",
        subtitle:"O Sistema Mines Hack, desenvolvido em React, prevê os resultados do jogo MinesHack. Utilizando dados anteriores e acertos, proporciona previsões estatística, enriquecendo a experiência do usuário com maior envolvimento e estratégia.",
        linkGit:"https://github.com/TerabyteTecnologia/FrontMinesHack",
        linkDeploy:"https://mineshack.com.br",
        duration:0.75,
        typeTwoMode:false
       },
      
]
const projectsTwo = [
    {
        image:"pregao.svg",
        title:"Pregâo Alfenas",
        subtitle:"Um sistema de gestão de processos como esse que projetei centraliza informações e operações relacionadas a pregão e licitação. Ele gerencia contratos, fornecedores, prazos e documentos, otimizando a eficiência e organização do processo.",
        linkGit:"https://github.com/Prefeitura-de-Alfenas/pregao_adm",
        linkGitBack:"https://github.com/Prefeitura-de-Alfenas/pregao_back",
        linkDeploy:"http://pregao.alfenas.mg.gov.br/",
        duration:0.50,
        typeTwoMode:true


   },
   {
    image:"academia.svg",
    title:"PWA Academia",
    subtitle:"Um sistema em andamento para gestão de exercícios e instrutores em academias. Ele permite acompanhar rotinas de treino, atribuir instrutores e monitorar o progresso dos alunos, promovendo uma experiência eficiente e personalizada.",
    linkGit:"https://github.com/AulaMarcelo/pwa-academia",
    linkDeploy:"https://pwa-academia-git-master-marceloroots-projects.vercel.app/",
    duration:0.75,
    typeTwoMode:false
   },
   {
    image:"transparencia.svg",
    title:"Transparência Alfenas",
    subtitle:"Sistema de transparência pública concede acesso a informações governamentais, orçamentárias e administrativas, promovendo a prestação de contas. Isso permite aos cidadãos monitorar as ações e gastos governamentais de maneira transparente.",
    linkGit:"https://github.com/Prefeitura-de-Alfenas/transparencia",
    linkDeploy:"https://transparencia.alfenas.mg.gov.br/",
    duration:1,
    typeTwoMode:false
   },
  
  
]
    return ( 
    
        <div  id="project" className="flex flex-col items-center justify-between mt-24 flex-wrap ">
        <h1 className="text-2xl text-white/70 font-build uppercase text-center">Projetos</h1>
        <h2 className="text-lg md:text-2xl text-white/40 font-build  text-center">Alguns dos projetos em que trabalhei</h2>
        <div  className="flex flex-col md:flex-row gap-9 p-0 mt-8 ">
        
         {
            projectsOne.map((item,key) =>(
                 <CardProcject 
                 key={key}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  linkDeploy={item.linkDeploy} 
                  linkGitBackend={item.linkGitBack}
                  linkGit={item.linkGit}
                  duration={item.duration}
                  styleModule={"x"}
                  typeTwoMode={item.typeTwoMode}
               
                  />
            ))
         }

        
       
       

           
          
        </div>
        <div className="flex flex-col md:flex-row gap-9 p-0 mt-8 ">
        
        {
           projectsTwo.map((item,key) =>(
                <CardProcject 
                key={key}
                image={item.image} 
                title={item.title} 
                subtitle={item.subtitle} 
                linkDeploy={item.linkDeploy} 
                linkGit={item.linkGit}
                linkGitBackend={item.linkGitBack}
                duration={item.duration}
                styleModule={"y"}
                typeTwoMode={item.typeTwoMode}
                />
           ))
        }

       
      
      

          
         
       </div>


        

     
        
        

         
      </div>
     

     );
}

export default Projects
