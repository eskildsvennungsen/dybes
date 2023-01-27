"use client"
import { React, useState } from "react";
import {Roboto_Mono} from '@next/font/google'

const roboto = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto_mono',
    weight: '500'
})


export default function About() {
    const [count, setCount] = useState(0)

    return (
      <main className={`${roboto.variable} bg-white py-32 h-screen`}> 
        <div className="max-w-7xl mx-auto justify-center">
            <div className="mx-auto px-4 py-2 max-w-sm md:max-w-md lg:max-w-xl bg-white rounded p-3 shadow-lg">
                <h1 className="text-3xl lg:text-5xl text-gray-600">Current count: <span>{count}</span></h1>
            <button onClick={() => {setCount(count + 1)}} className="rounded bg-white p-2 hover:shadow-inner hover:bg-gray-50">
                <span className={count % 2 === 0 ? "text-amber-500" : "text-red-500"}>- </span><span className=" text-gray-800">CLICK ME...</span></button>
            </div>
        </div>
      </main>
    )
  }