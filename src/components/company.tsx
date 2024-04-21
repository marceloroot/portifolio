"use client"
import { motion, useScroll } from "framer-motion"
import Image from "next/image";
function Company() {
    return (  
        <div id="company" className="flex flex-col items-center justify-center gap-3 mt-20  ">
                <h1 className="text-2xl text-white/70 font-build uppercase text-center">Empresas</h1>
                <h2 className="text-lg md:text-2xl text-white/40 font-build  text-center">Algumas empresas em que trabalhei</h2>
                <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-5">
                <motion.div
                    initial={{opacity:0,y:-150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,delay:0, ease:'easeInOut'}}
                >
                <Image src="/company/brasilcard.svg"
                 className="rounded-xl "
                 alt="brasilcard Logo"
                 height={250}
                 width={250}
                />
                </motion.div>

                <motion.div
                    initial={{opacity:0,y:-150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,delay:0, ease:'easeInOut'}}
                >
                <Image src="/company/alfenas.svg"
                 className="rounded-xl bg-blue-900"
                 alt="alfenas Logo"
                 height={250}
                 width={250}
                />
                </motion.div>
            
                <motion.div
                initial={{opacity:0,y:150}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1,delay:0, ease:'easeInOut'}}
                >
                <Image src="/company/veri.svg"
                 className="rounded-xl "
                 alt="veri Logo"
                 height={250}
                 width={250}
                />
                </motion.div>

                <motion.div
                    initial={{opacity:0,y:-150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,delay:0, ease:'easeInOut'}}
                >
                    <Image src="/company/brasirisk.svg"
                    className="rounded-xl "
                    alt="brasirisk Logo"
                    height={250}
                    width={250}
                    />
                </motion.div>
                <motion.div
                    initial={{opacity:0,y:-150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,delay:0, ease:'easeInOut'}}
                >
                <Image src="/company/unifenas.svg"
                 className="rounded-xl "
                 alt="unifenas Logo"
                 height={250}
                 width={250}
                />
                </motion.div>

               </div>
        </div>
    );
}

export default Company;