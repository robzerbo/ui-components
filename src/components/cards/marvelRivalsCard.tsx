'use client'

import Image from "next/image"

export default function Card(){

    return (
        <div className='relative bg-card h-64 min-w-40 max-w-fit clip m-1'>
            <Image src='/components/cards/jeff2.png' alt='Imagem do personagem' className='absolute z-10 top-0 w-full' width={200} height={200}/>
            <div className='absolute z-20 flex flex-row justify-baseline items-baseline bottom-0 left-0 bg-card-body gap-1 w-full h-24 p-1 text-card-name'>
                <h2 className='h-fit relative px-2 font-semibold'>Jeff The Land Shark</h2> 
                <Image src='/marvel_rivals_classes/Strategist_Icon.webp' alt='Strategist_Icon' className='w-fit h-fit absolute right-2' width={50} height={50}/>
            </div>
        </div>
    )
}