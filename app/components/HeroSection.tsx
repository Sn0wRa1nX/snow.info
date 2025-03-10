"use client"

import { useRef } from "react"

export default function HeroSection() {
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Sn0wAlgo</h1>
        <p className="text-xl mb-8 animate-fade-in-up">Next generation of hyper speed algorithms for Jailbreak</p>
        <button
          onClick={scrollToBottom}
          className="bg-violet text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Show More
        </button>
      </div>
    </section>
  )
}

