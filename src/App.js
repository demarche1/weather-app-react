import { useState } from 'react'
import { cityWeather } from './api/fetchWeather'

function App() {
   const [city, setCity] = useState(null)
   const [weather, setWeather] = useState(null)

   const getData = async () => {
      try {
         const data = await cityWeather(city)
         setWeather(data)
         console.log(data);
      }
      catch (e) {
         alert('Você deve informar uma cidade válida')
      }
   }

   return (
      <>
         <main className='flex justify-center items-center h-screen w-screen bg-blue-600' >
            <div className='bg-black bg-opacity-70 text-white p-10 rounded'>
               <div>
                  <input onChange={(e) => setCity(e.target.value)} className='p-2 rounded outline-none border-none text-black' type='text' placeholder='Search' />
                  <button onClick={() => getData()} className='p-2 ml-4 bg-green-600 rounded text-white transition-all duration-200 hover:bg-yellow-900'>Search</button>
               </div>

               <div className={weather == null ? 'hidden' : ''}>
                  <h3 className='mt-4 mb-4'>Clima em <span className='text-yellow-500'>{weather != null ? weather.name : ''}</span></h3>
                  <div className='flex items-center ml-2'>
                     <img src={weather !== null ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : 'hidden'}></img>
                     <span className='text-yellow-500' >{weather !== null ? weather.weather[0].description : ''}</span>
                  </div>
                  <ul>
                     <li className='mb-2 inline'>
                        Temperatura: <span className='ml-2 text-yellow-500'>{Math.round(weather != null ? weather.main.temp : '')}°C</span>
                     </li>
                     <li className='ml-2 mb-2 inline'>
                        Máxima:
                     <span className='ml-2 text-yellow-500'>
                           {Math.round(weather != null ? weather.main.temp_max : '')}°C
                     </span>
                     </li>
                     <li className='ml-2 mb-2 inline'>
                        Minima: <span className='ml-2 text-yellow-500'>{Math.round(weather != null ? weather.main.temp_min : '')}°C</span>
                     </li>
                     <li className='mb-2'>
                        Pressão: <span className='text-yellow-500'>{weather != null ? weather.main.pressure : ''}</span>
                     </li>
                     <li className=''>
                        Umidade: <span className='text-yellow-500'>{weather != null ? weather.main.humidity : ''}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </main>
      </>
   );
}

export default App;
