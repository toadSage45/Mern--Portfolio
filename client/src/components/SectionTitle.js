import React from "react";

function SectionTitle({
    title,
})
{
    return(
        <div className="flex gap-10 items-center">
            <h1 className="text-2xl text-fourthly nss">{title}</h1>
            <div className="w-60 h-[2px] bg-fourthly"></div>
        </div>
    )
}

export default SectionTitle
