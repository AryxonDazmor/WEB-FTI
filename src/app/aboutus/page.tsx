"use client";
import ImageCarousel from "@/components/ui/imageCarousel";
import Reveal from "@/components/ui/text-reveal";
import {motion} from "framer-motion";
import { AtSign } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react"
import { useTheme } from "@/lib/use-theme";
import { activities } from "@/components/hooks/data";



export default function AboutUs(){
    const sectionRef = useRef<HTMLDivElement | null> (null)
    //const {scrollYProgress} = useScroll({target: sectionRef, offset: ["start end", "end start" ]})
    

      const {theme} = useTheme()

      const [mounted, setMounted] = useState(false)

        useEffect(() => {
            setMounted(true)
        }, [])

        if (!mounted) return null 

      const themeClasses = {
        background: theme === "dark" ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-gray-50 to-white",
        titleText: theme === "dark" ? "text-white" : "text-gray-900",
        descriptionText: theme === "dark" ? "text-white" : "text-black",
        numberText: theme === "dark" ? "text-[#b1c9ef]" : "text-[#164b82]",
        cardBackground: theme === "dark" ? "from-cyan-500/20 to-teal-600/20" : "from-blue-500/20 to-indigo-600/20",
        cardInner: theme === "dark" ? "bg-black/50" : "bg-white/80",
        cardBorder: theme === "dark" ? "border-cyan-500/20" : "border-blue-500/20",
        ctaBackground: theme === "dark" ? "from-cyan-500/10 to-teal-600/10" : "from-blue-500/10 to-indigo-600/10",
        ctaText: theme === "dark" ? "text-white" : "text-gray-900",
        ctaSubtext: theme === "dark" ? "text-gray-400" : "text-gray-600",
        gradient: theme === "dark" ? "from-cyan-400 to-teal-500" : "from-blue-500 to-indigo-600",
        decorativeLine: theme === "dark" ? "from-cyan-400 to-teal-500" : "from-blue-500 to-indigo-600",
      }

    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            {/* Carousel */}
            <section className="py-16 lg:py-20 px-4">
                    <ImageCarousel/>
            </section>

            <section ref={sectionRef} className=" lg:block max-w-sceren-xl mx-auto px-4 "> 
                    <motion.div className="text-center mb-8"
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>
                        <h1 className="text-4xl md:text-6xl font-bold">Tentang FTI</h1>
                    </motion.div>   
                    <motion.div className="grid md:grid-cols-2 sm:grid-cols-1">
                        <motion.div  className={`flex justify-center mb-4`} 
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>
                            <Image src={"/fti4.png"} height={400} width={400} alt="fti24" className="rounded-lg shadow-lg object-cover" />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}
                         className=" md:text-justify leading-relaxed px-4" >
                            <Reveal 
                            text="Fakultas Teknologi Industri di Institut Teknologi Bandung &#40;FTI ITB&#41; resmi berdiri pada tahun 1973. Namun, sebagian kegiatan akademik di departemen-departemen yang tergabung dalam FTI ITB sudah berlangsung lebih dulu. Sampai Desember 2005,
                            departemen-departemen yang berada di bawah FTI ITB meliputi Departemen Teknik Kimia, Teknik Mesin, Teknik Elektro, Teknik Fisika,
                            Teknik Industri, Teknik Informatika, dan Teknik Penerbangan."
                            duration={0.5}
                            />
                        </motion.div>
                    </motion.div>   

                    <motion.h1 
                        className="block md:hidden text-center py-4 text-4xl font-bold"
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>Visi</motion.h1>
                    <motion.div className="py-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 items-center">
                        <motion.div className={`order-1 md:order-2 flex justify-center`}
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>
                            <Image width={400} height={400} alt="visi misi" className="rounded-lg shadow-lg object-cover" src={"/visi.png"}/>
                        </motion.div>
                        <motion.div
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}
                        className=" sm:py-4 md:py-0 order-2 md:order-1 flex flex-col max-w-sm justify-center mx-auto text-center md:text-left">
                            <div className="flex flex-col px-4 py-4">
                                <motion.h1 
                                    className="hidden md:block text-center md:py-0 sm:py-4 text-4xl font-bold"
                                    whileInView={{opacity: 1, y:0}}
                                    initial={{opacity:0, y:100}}
                                    transition={{ease:"easeInOut", duration: 0.7}}>Visi</motion.h1>
                                <Reveal
                                text="Menjadi Fakultas yang unggul, bermartabat, mandiri, dan diakui dunia di bidang teknologi industri serta memandu perubahan yang mampu meningkatkan kesejahteraan bangsa Indonesia dan dunia."/>
                            </div>
                        </motion.div>

                    </motion.div>


                    <motion.h1 
                        className="block md:hidden text-center py-4 text-4xl font-bold"
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>Misi</motion.h1>                    
                    <motion.div className="py-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 items-center gap-6">
                        <motion.div className={`order-1 md:order-1 flex justify-center`}
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}>
                            <Image width={400} height={400} alt="visi misi" className="rounded-lg shadow-lg object-cover" src={"/misi.png"}/>
                        </motion.div>

                        <motion.div
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{ease:"easeInOut", duration: 0.7}}
                        className="py-4 md:py-0 order-1 md:order-2">
                            <div className="flex flex-col px-4 max-w-sm justify-center mx-auto text-center md:text-left">
                                <motion.h1 
                                    className="hidden md:block text-center md:py-0 sm:py-4 text-4xl font-bold"
                                    whileInView={{opacity: 1, y:0}}
                                    initial={{opacity:0, y:100}}
                                    transition={{ease:"easeInOut", duration: 0.7}}>Misi</motion.h1>
                                <Reveal
                                text="Menciptakan, berbagi dan menerapkan ilmu pengetahuan dan teknologi dalam bidang teknologi industri serta menghasilkan sumber daya insani yang unggul untuk menjadikan Indonesia dan dunia lebih baik"/>
                            </div>
                        </motion.div>
                    </motion.div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
        
                    <div className="text-center mb-4">
                        <div className="flex justify-center items-center gap-4">

                            <div className="bg-black dark:bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                <AtSign className="w-8 h-8 text-white dark:text-black"/>
                            </div>
                            <Reveal text="KEGIATAN"
                            delay={0.5}
                            className="text-4xl md:text-6xl font-bold items-center tracking-wider"/>
                        </div>
                    </div>

                    <div className="space-y-20 max-w-full md:max-w-3xl lg:max-w-5xl mx-auto px-4">
                        {activities.map((activity, index) => (
                            
                                <div key={activity.id}
                                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                    }`}
                                    >
                                    {/* Image */}
                                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${themeClasses.cardBackground} p-1`}>
                                        <div className={`relative overflow-hidden rounded-3xl ${themeClasses.cardInner} backdrop-blur-sm`}  >
                                            <Image
                                            src={activity.image || "/placeholder.svg"}
                                            alt={activity.imageAlt}
                                            width={500}
                                            height={400}
                                            className="w-full h-auto object-cover rounded-3xl"
                                            />
                                            <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-t from-black/30 to-transparent" : "bg-gradient-to-t from-white/20 to-transparent"} rounded-3xl`}/>
                                        </div>
                                        </div>

                                        {/* Decorative Star */}
                                        <div className="absolute -bottom-4 -right-4 w-16 h-16">
                                        <div className={`w-full h-full bg-gradient-to-r ${themeClasses.gradient} rounded-full opacity-80 blur-sm animate-pulse`}/>
                                        <div className="absolute inset-2 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                                        <div className="flex items-center gap-4">
                                        <span className={`text-6xl font-bold ${themeClasses.numberText} opacity-50`}>{activity.id}.</span>
                                        <Reveal
                                            text={activity.title}
                                            className={`text-3xl md:text-4xl font-bold ${themeClasses.titleText}`}
                                            delay={0.3}
                                            staggerChildren={0.01}
                                        />
                                        </div>

                                        <Reveal
                                        text={activity.description}
                                        className={`text-lg ${themeClasses.descriptionText} leading-relaxed`}
                                        delay={0.3}
                                        staggerChildren={0.01}
                                        />

                                        {/* Decorative Element */}
                                        <div className="flex items-center gap-4 pt-4">
                                        <div className={`w-12 h-1 bg-gradient-to-r ${themeClasses.decorativeLine} rounded-full`} />
                                        <div className={`w-6 h-6 bg-gradient-to-r ${themeClasses.decorativeLine} rounded-full opacity-60`} />
                                        <div className={`w-3 h-3 bg-gradient-to-r ${themeClasses.decorativeLine} rounded-full opacity-40`}  />
                                        </div>
                                    </div>
                                    </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}