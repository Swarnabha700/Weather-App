import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'


const Week_Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Forcast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = Week_Days.slice(dayInWeek, Week_Days.length).concat(Week_Days.slice(0, dayInWeek));

  return (
    <>
      <label className='title text-[23px] font-[700] border-b-2 border-b-black py-1 ml-2'>7 Days Forecast</label>
      <Accordion allowZeroExpanded className='py-3'>
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='dailyItem bg-[#f5f5f5] rounded-md h-[45px] m-[5px] flex items-center cursor-pointer text-[14px] py-1 px-5'>
                    <img alt="" className='w-[40px]' src={`icons/${item.weather[0].icon}.png`} />
                    <label className='day text-[#000000] flex-1 font-[600] ml-[15px]'>{forecastDays[idx]}</label>
                    <label className="description flex-1 mr-[15px] text-right font-semibold">{item.weather[0].description}</label>
                    <label className='min-max text-[#494848] font-semibold'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="dailyDetailsGrid grid gap-y-0 justify-items-center gap-x-4 grid-cols-1 md:grid-cols-2 flex-1 py-1 px-4">
                  <div className="dailyDetailsGridItem">
                    <label >Pressure:</label>
                    <label className='font-semibold text-[17px] '>{item.main.pressure} hPa</label>
                  </div>
                  <div className="dailyDetailsGridItem">
                    <label>Humidity:</label>
                    <label className='font-semibold text-[17px]'>{item.main.humidity} %</label>
                  </div>
                  <div className="dailyDetailsGridItem">
                    <label>Clouds:</label>
                    <label className='font-semibold text-[17px]'>{item.clouds.all} %</label>
                  </div>
                  <div className="dailyDetailsGridItem">
                    <label>Wind speed:</label>
                    <label className='font-semibold text-[17px]'>{item.wind.speed} m/s</label>
                  </div>
                  <div className="dailyDetailsGridItem">
                    <label>Sea level:</label>
                    <label className='font-semibold text-[17px] '>{item.main.sea_level} m</label>
                  </div>
                  <div className="dailyDetailsGridItem">
                    <label>Feels like:</label>
                    <label className='font-semibold text-[17px] '>{Math.round(item.main.feels_like)} °C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  )
}

export default Forcast
