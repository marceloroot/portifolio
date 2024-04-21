"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonalIcon } from "lucide-react";
import { chat, prompt } from "@/helper/gemini";
import { chatI } from "@/interface/chatbot/interface";



function ChatMessage() {
  const [command,setCommand] = useState('')
  const [geminiResponse,setGeminiResponse] = useState<chatI[]>([])
  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
  
    if (scrollableDivRef.current) {
      // Rola a div para baixo sempre que houver uma atualização nos itens
      scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
    }
  }, [geminiResponse]);


  async function run(){
    setGeminiResponse(prev=> [...prev,{
        userType:"user",
        text:command,
    }])
    setCommand('')
    const result = await chat.sendMessage(prompt + command);
    const response = await result.response;
    const text = response.text();
    setGeminiResponse(prev=> [...prev,{
        userType:"Atendente",
        text:text
    }])
    if(command.toLocaleLowerCase() === "encerrar"){
        setGeminiResponse([]);
        setCommand('');
    }
}
function handleTextAreaKeyPress(event:React.KeyboardEvent<HTMLInputElement>){
if(event.key == "Enter" && !event.shiftKey){
    event.preventDefault();
    run();
}
}
    return ( 
        
        <div className="fixed bottom-4 right-0  text-white font-bold py-2 px-4 rounded">
            <Sheet>
                <SheetTrigger>
                     <img
                        src="/chatbot.svg"
                        width={150}
                        height={112}
                        alt="chatbox"
                     /> 
             </SheetTrigger>
                <SheetContent side="bottom">
                <div className="flex flex-col mt-3 gap-4 py-4">
                
                <div ref={scrollableDivRef}  className="flex flex-col w-full mt-2 gap-2 border p-4 h-52 overflow-y-scroll ">
                 
                  {geminiResponse.map((item,key) =>(
                    <div key={key} className="flex flex-col">
                        <p className="font-bold text-white/80 text-start">
                            <span className="font-bold text-blue-400">{item.userType}: </span>
                            <span dangerouslySetInnerHTML={{__html:item.text.replace(/\n/g, '<br>')}}></span>
                        </p>
                    </div>
          ))}

                
               </div>
               <div className="flex gap-4">
                 
                 <Input  
                  className="col-span-3" 
                  placeholder="Pergunte-me algo sobre mim"
                  onChange={(e) => setCommand(e.target.value)}
                  value={command}
                  onKeyDown={handleTextAreaKeyPress}
                 />
               </div>
               <div className="flex items-center justify-end gap-4">
                <Button variant="outline" onClick={run}><SendHorizonalIcon /></Button>
               </div>
                </div>
           
                </SheetContent>
            </Sheet>

        </div>
     );
}

export default ChatMessage;
