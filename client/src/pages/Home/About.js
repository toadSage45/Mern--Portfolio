import React from "react";
import SectionTitle from "../../components/SectionTitle";
import LottieAnimation from "../../components/LottieAnimation";

function About(){
    const skills=[
            "JavaScript",
            "React",
            "Node",
            "Express",
            "MongoDB",
            "GitHub"
        ]
    
    return(
        <div>
          <SectionTitle title="About" />

          <div className="flex w-full item-center">
            <div className="h-[70vh] w-1/2">
                <LottieAnimation />
            </div>
            <div className="flex flex-col gap-5  mt-16">
                <p className="text-fourthly nss w-4/5">
                Hi, I'm Alok Singh, a passionate and dedicated Full Stack Android and Web Developer.
                From a young age, I was fascinated by technology and how it shapes our world.
                This passion led me to pursue a career in web development. I love the challenge
                of turning complex problems into user-friendly solutions and am always eager to 
                learn new technologies and improve my skills.
                </p>
                <p className="text-white nss w-4/5">
                When I'm not coding, I enjoy hiking, photography, and experimenting with new cooking
                recipes. I'm also an avid reader and enjoy exploring the latest trends in technology
                and design.
                </p>
            </div>
          </div>

          <div>
            <h1 className="text-tertiary text-xl nss">
                Here are the few technologies I've working with recently: 
            </h1>
            <div className="flex flex-wrap gap-12 mt-5">
            {skills.map((skill,index) => (
            <div className="border-2 border-secondary py-3 px-5 rounded-lg ">
                <h1 className="text-tertiary">{skill}</h1>
            </div>

            ))}

            </div>
          </div>
        </div>
    );
}
export default About