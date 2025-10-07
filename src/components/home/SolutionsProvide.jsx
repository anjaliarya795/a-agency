import React from 'react'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import { ourSolutions } from '@/constants/ourSolutions'
import CommonAnimation from '../shared/CommonAnimation'
function SolutionsProvide() {
    return (
        <PaddingWrapper>
            <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-secondary text-2xl border-b-2 border-secondary font-bold">Our Services</span>
                <span className="text-4xl font-bold">What Solutions We Provide</span>
            </div>
            <div className="w-full flex-row justify-center gap-8 grid lg:grid-cols-3 sm:grid-cols-2">
                {
                    ourSolutions.map(solution => (
                        <SolutionsProvideItem key={solution.title} solution={solution} />
                    ))
                }
            </div>
        </PaddingWrapper>
    )
}

export default SolutionsProvide


function SolutionsProvideItem({ solution }) {
    return (
        <CommonAnimation duration={0.25} className="text-center flex-col bg-slate-100 py-12 p-6 gap-3 flex rounded-lg duration-500 group hover:bg-primary hover:text-white hover:scale-105 shadow-md hover:shadow-lg">
            <div className="size-28 rotate-45 bg-primary group-hover:bg-secondary rounded-tl-[28px]  rounded-tr-[20px] rounded-br-[28px] rounded-bl-[20px] mx-auto flex flex-row items-center justify-center">
                <span className='text-5xl text-white mx-auto group-hover:text-black -rotate-45'>

                    {
                        solution.icon
                    }
                </span>
            </div>
            <p className="text-3xl mt-6 font-medium">{solution.title}</p>
            <p className="text-lg text-slate-700 group-hover:text-white">{solution.description}</p>
        </CommonAnimation>
    )
}
