import React from 'react';
import MovieImg from '../assets/movie.png'
import WeatherImg from '../assets/weather.png'
import SportImg from '../assets/sport.jpg'

const Cards = () => {
  return (
<div className='w-full  bg-white'>
    <div className='w-[100%]  flex flex-col bg-[#000300] text-white px-12 py-7 mb-2'>
        <h1 className='w-full text-3xl font-bold'>Uso de las APIs</h1>
        <p className='py-2'> Para el trabajo se uso APIs de diferentes temas....</p>
    </div>

    {/*Movie API*/}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4 py-12'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={MovieImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Movie API</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Nos permite ver datos como...</p>
              </div>
              <button className='bg-[#9370db] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver</button>
          </div>

    {/*Weather API*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={WeatherImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Weather API</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Nos permite ver datos como...</p>
              </div>
              <button className='bg-black text-[#9370db] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver</button>
          </div>
    
    {/*Sport API*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={SportImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Sports API</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Nos permite ver datos como...</p>
              </div>
              <button className='bg-[#9370db] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Ver</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;