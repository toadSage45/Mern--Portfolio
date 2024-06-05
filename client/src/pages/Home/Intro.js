import React from "react";

function Intro() {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
            <h1 className="text-white text-1xl nss">Hi, I am</h1>
            <h1 className="text-9xl text-tertiary nss">Alok Singh</h1>
            <h1 className="text-7xl text-lastly nss">I predict things by building it</h1>
            <p className="text-secondary text-1.5xl nss w-2/3">I am a full stack Android as well as Web Developer.Currently I am pursuing B.Tech from Motilal Nehru National Institute of technology </p>
            <button className="border-2 rounded-lg border-tertiary text-lastly nss px-10 py-3">Get Started</button>
        </div>
    )
}

export default Intro