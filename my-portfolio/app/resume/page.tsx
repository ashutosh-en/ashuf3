"use client"

import{FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from "react-icons/fa";
import{SiTailwindcss,SiNextdotjs} from "react-icons/si";

//about data

const about={
  title:"About Me",
  description:"ahskhdalkskdjalskjdlas",
  info:[
    {
    fieldName:"Name",
    FieldValue:"Ashutosh Tiwari"
    },
    {
      fieldName:"Expreience",
      FieldValue:"2+"
    },
    {
      fieldName:"Nationality",
      FieldValue:"India"
    },
    {
      fieldName:"Email",
      FieldValue:"ashutoshtiwari2439@gmail.com"
    },
    {
      fieldName:"Freelance",
      FieldValue:"Available"
    },
    {
      fieldName:"Phone",
      FieldValue:"99999***"
    },
    {
      fieldName:"Language",
      FieldValue:"Englinh,Hindi"
    },

  ]
}

const experience = {
  icon: `/assets/resume/badge.svg`,
  title: "My Experience",
  description: "abksjjdnasjnxasxsncanskcnajnskcas",
  items: [{
    company: "Persistent Systems",
    position: "Software Engineer",
    duration: "Jan 2022-Present",
  }]
}

const eduction ={
  icon:"/asserts/resume/cap.svg",
  title:"My Education",
  description:"abjsnjdanxa",
  items:[
    {
    institution:"UIT,RGTU BHOPAL",
    degree:"B.Tech",
    duration:"2018-2022"
    },
  ]
}

const skills ={
  title:"Myskills",
  description:"bhadajkshkjdahskjdaksa",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5"
    },
    {
      icon:<FaCss3/>,
      name:"css 5"
    },
    {
      icon:<FaJs/>,
      name:"javascript"
    },
    {
      icon:<FaReact/>,
      name:"react.js"
    },
    {
      icon:<SiNextdotjs/>,
      name:"next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css"
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js"
    },
    {
      icon:<FaFigma/>,
      name:"Figma"
    },

  ]
}

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from"framer-motion"
export default function Resume() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay: 2.4,duration: 0.4,ease:"easeIn"},
    }}
    className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Exprience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70px] w-full">

            {/*Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                    return(
                      <li  key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className=" text-xl max-w text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className=" text-white/60">{item.company}</p>
                      </div>
                    </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Eduction */}
            <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{eduction.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{eduction.description}</p>
                  <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {eduction.items.map((item,index)=>{
                      return(
                        <li  key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className=" text-xl max-w text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className=" text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                    </ul>
                  </ScrollArea>
                </div>
            </TabsContent>

            {/*Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[60px] text-white/60 mx-auto xl:mx-6">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                  {skills.skillList.map((skill,index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl  flex justify-center items-center group">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]" >
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className=" max-w-[60px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item,index)=>{
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.FieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
