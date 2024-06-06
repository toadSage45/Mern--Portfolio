import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { expeeriences } from '../../resources/experiences'

function Experiences(){
    const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
    return(
        <div>
        <SectionTitle title="Experience"/>

        <div className='flex'>
            <div className='flex flex-col gap-5'>
                {expeeriences.map((experience , index)=> (
                    <div onClick={()=>{
                        setSelectedItemIndex(index);
                    }} className='p-5 nss cursor-pointer'>
                        <h1 className={` ${selectedItemIndex=== index ? 'text-tertiary  border-2 border-tertiary rounded-lg' : 'text-lastly'}`}>{experience.period}</h1>
                    </div>
                ))}

            </div>

            <div>

            </div>
        </div>
        </div>
    )
}

export default Experiences