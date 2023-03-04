import React from 'react'
import HeroHomeImg from "../assets/hero.svg"
export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center mt-4">

        <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
          <div className='text-white'>
            <h1 className='text-3xl md:text-6xl'>About Us</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider'></p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroHomeImg} alt="img" width="350" height="350" />
          </div>
        </div>

        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1">
          <h1 className="text-5xl font-semibold mt-20 mb-10 text-white">
            Own your creations
          </h1>

          <span className="text-center font-bold text-xl my-20 text-white">
            <p className=''>Explore different NFT's</p>

            <hr className="h-[0.15rem] w-96 my-4 bg-black" />

            <p className=''>Sell your NFT</p>


            <hr className="h-[0.15rem] w-96 my-4 bg-black" />

            <p className=''>Use AI to generate images for you</p>

          </span>
        </section>

        <section className="p-20 space-y-8">
          <div className='text-white'>
            <h1 className='text-5xl'>Tips for Content Creator:</h1>
            <ul className="text-xl ml-5 py-4">
              <li className="list-disc py-1">Choose a platform.</li>
              <li className="list-disc py-1">Identify your audience.</li>
              <li className="list-disc py-1">Design the content plan.</li>
              <li className="list-disc py-1">Establish the business/brand voice.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
