import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { expeeriences } from '../../resources/experiences'

function Experiences(){
    const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
    return(
        <div className='my-10'>
        <SectionTitle title="Experience"/>

        <div className='flex py-10 gap-20 flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#ffff] w-1/3 sm-flex-row sm:overflow-x-scroll sm:w-full'>
                {expeeriences.map((experience , index)=> (
                    <div onClick={()=>{
                        setSelectedItemIndex(index);
                    }} className='p-5 nss cursor-pointer'>
                        <h1 className={` ${selectedItemIndex=== index ? 'text-primary border-2  border-tertiary rounded-lg bg-[#ffffffa5]' : 'text-lastly'}`}>{experience.period}</h1>
                    </div>
                ))}

            </div>

            <div className='flex flex-col gap-5'>
              <h1 className='nss text-tertiary text-2xl '>{expeeriences[selectedItemIndex].title}</h1>
              <h1 className='nss text-fourthly '>{expeeriences[selectedItemIndex].company}</h1>
              <h1 className='nss text-lastly '>I amn nfaenfahfl bujfjammb jafjfnaf banfaemf bjafja f bjafja efm 
                nkanakfakenfjaefjaejlflanef jjaenfmaegiajlg aegag anfkae
                kfaekgkagknakgnkaenguiahgkangihguaark kgkankg;ankgbajlagaag
                jgnkgkmgajjg hifakegakhjaa iihgfiangauig hirfkaenkag k;rg
              </h1>

            </div>
        </div>
        </div>
    );
}

export default Experiences