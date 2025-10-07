'use client'
import React from 'react'
import {twMerge} from 'tailwind-merge'

type FilledBtnType = {
  label?:string,className?:string,onClick?:()=>void
} 

function FilledBtn({label,className,onClick=()=>{}}:FilledBtnType) {
  return (
    <button onClick={onClick} className={twMerge(` font-semibold bg-secondary hover:scale-105 duration-500 hover:bg-secondary-500/90 md:px-12 px-8 md:py-4 py-3 rounded-3xl`,className)}>{label}</button>
  )
}

export default FilledBtn