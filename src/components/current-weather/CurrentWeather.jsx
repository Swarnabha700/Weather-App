import React from 'react'

const CurrentWeather = ({data}) => {
    return (
        <div className='w-[400px] mx-auto rounded-md shadow-2xl text-white bg-transparent md:mt-4 mt-6 mb-4 md:mb-0 px-4 pb-5 border-2 '>
            <div className="top flex justify-between items-center">
                <div>
                    <p className='font-[600] text-[18px] leading-5 tracking-[1px] m-0'>{data.city}</p>
                    <p className='font-[400] text-[14px] leading-3'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="" className='w-[100px]' />
            </div>
            <div className="bottom flex justify-between items-center">
                <p className='temp font-[600] text-[60px] w-auto tracking-[-5px] my-3'>{Math.round(data.main.temp)}°C</p>
                <div className='details w-[100%] pl-5'>
                    <div className="parameter-row pb-2 pl-5">
                        <span className='parameter-label text-left font-[600] text-lg'>Details</span>
                    </div>
                    <div className="parameter-row flex justify-between px-5">
                        <span className='parameter-label text-left font-[400] text-[14px]'>Feels Like :</span>
                        <span className="parameter-value text-right font-[600] text-[14px]">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row flex justify-between px-5">
                        <span className='parameter-label text-left font-[400] text-[14px]'>Wind :</span>
                        <span className="parameter-value text-right font-[600] text-[14px]">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row flex justify-between px-5">
                        <span className='parameter-label text-left font-[400] text-[14px]'>Humidity :</span>
                        <span className="parameter-value text-right font-[600] text-[14px]">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row flex justify-between px-5">
                        <span className='parameter-label text-left font-[400] text-[14px]'>Pressure :</span>
                        <span className="parameter-value text-right font-[600] text-[14px]">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
