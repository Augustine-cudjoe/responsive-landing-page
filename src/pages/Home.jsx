import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu ,IoIosArrowForward} from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

import { GoDot } from "react-icons/go";
import { FaSquareFacebook } from "react-icons/fa6";
import Grp3 from "../assets/image/Grp3.png"
import Glyph from "../assets/image/Glyph.jpg"
import Glyph2 from "../assets/image/Glyph2.jpg"
import { FaTwitter } from "react-icons/fa";

function Home() {
    const [open,setOpen]=useState(false)
    const navigation = [
      {id:0, name: 'first Menu', href: '#', current: true },
      {id:1, name: 'second Menu', href: '#', current: false },
      { id:2,name: 'third Menu', href: '#', current: false },
      {id:3, name: 'four Menu', href: '#', current: false },
      {id:4, name: 'firth Menu', href: '#', current: false },
      { id:5, name: 'six Menu', href: '#', current: false },
    ]
  return (
    <div className=' overflow-x-hidden'>
    <nav >
    <div className='flex flex-col  md:hidden '>
           <div className="flex flex-shrink-0 items-center  w-full px-2 py-2  z-[150] fixed  py-2 gap-[20px] ">
              <div>
              <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7291 12.3304H3.92235L2.69866 15.7925H0L5.73603 0.21843H8.91543L14.6515 15.7925H11.9637L10.7291 12.3304ZM9.94245 10.0915L7.33119 2.73038L4.71993 10.0915H9.94245ZM22.582 16C21.0888 16 19.745 15.6742 18.5504 15.0225C17.3558 14.3709 16.4181 13.4407 15.737 12.2321C15.056 11.0234 14.7155 9.61093 14.7155 7.99454C14.7155 6.38543 15.056 4.97657 15.737 3.76792C16.4181 2.55927 17.3558 1.62913 18.5504 0.977474C19.745 0.325822 21.0888 0 22.582 0C23.6673 0 24.6797 0.176563 25.6194 0.529693C26.559 0.882823 27.3802 1.39249 28.0831 2.0587C28.786 2.72492 29.3305 3.52036 29.7165 4.44505L27.2801 5.37338C26.8795 4.44869 26.2622 3.72788 25.4282 3.21092C24.5942 2.69397 23.6455 2.43549 22.582 2.43549C21.5914 2.43549 20.6973 2.65756 19.8997 3.10171C19.1021 3.54585 18.4739 4.18839 18.015 5.02935C17.5561 5.87031 17.3267 6.8587 17.3267 7.99454C17.3267 9.13766 17.5561 10.1297 18.015 10.9706C18.4739 11.8116 19.1021 12.4542 19.8997 12.8983C20.6973 13.3424 21.5914 13.5645 22.582 13.5645C23.6527 13.5645 24.6033 13.3079 25.4336 12.7945C26.264 12.2812 26.8795 11.5622 27.2801 10.6375L29.7165 11.5659C29.3305 12.4833 28.786 13.2751 28.0831 13.9413C27.3802 14.6075 26.559 15.1172 25.6194 15.4703C24.6797 15.8234 23.6673 16 22.582 16ZM46.5297 15.7925L45.5027 3.49488L41.0341 15.7925H39.3952L34.9484 3.51672L33.9105 15.7925H31.3101L32.5557 0.21843H36.194L40.2037 11.2273L44.2462 0.21843H47.8845L49.1191 15.7925H46.5297ZM54.799 2.54471V6.8587H60.1526V9.16314H54.799V13.4553H60.8519V15.7925H52.1549V0.21843H60.8519V2.54471H54.799Z" fill="#0065F2"/>
               </svg>
              </div>
               <form className='flex items-center space-x-3'>
                    
                    <input type='text' className=' border-2 border-[#0065F2] rounded-lg '/>
                      <CiSearch className="text-[#0065F2] h-[20px] w-[20px] "/>
                </form>
               <div onClick={()=>setOpen(!open)} className='ms-auto text-[#0065F2]'>
                  {
                    open?(<IoMdClose size={20}/>):(<IoMdMenu size={20}/>)
                  }
               </div>
                 
              </div>
                <div className='mt-10 z-[50] '>
                 <ul className={`${open?('transition-all duration-300 w-full fixed  h-screen right-0 top-[50px]  bg-[#0065F2] ' ):('w-0 h-0')} `}>
                 
                    <li className="flex flex-col text-white  items-start pt-5  ps-5 space-y-5 ">
                    {navigation.map((item) => (
                      <NavLink 
                        key={item.id}
                        to={item.href}
                       
                        className={({isActive})=>{
                            isActive?('text-[#0065F2]'):('text-white text-[16px] leading-6 space-y-3 font-medium capitalize py-2 ')
                        }}
                          
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    
                  </li>
                  
                
                 </ul>
                 </div>
    </div>
    <div className="hidden md:flex flex-row items-center justify-center sm:items-stretch sm:justify-start px-5  py-5 fixed w-full z-[150] ">
              <div className="flex flex-shrink-0 items-center ">
              <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7291 12.3304H3.92235L2.69866 15.7925H0L5.73603 0.21843H8.91543L14.6515 15.7925H11.9637L10.7291 12.3304ZM9.94245 10.0915L7.33119 2.73038L4.71993 10.0915H9.94245ZM22.582 16C21.0888 16 19.745 15.6742 18.5504 15.0225C17.3558 14.3709 16.4181 13.4407 15.737 12.2321C15.056 11.0234 14.7155 9.61093 14.7155 7.99454C14.7155 6.38543 15.056 4.97657 15.737 3.76792C16.4181 2.55927 17.3558 1.62913 18.5504 0.977474C19.745 0.325822 21.0888 0 22.582 0C23.6673 0 24.6797 0.176563 25.6194 0.529693C26.559 0.882823 27.3802 1.39249 28.0831 2.0587C28.786 2.72492 29.3305 3.52036 29.7165 4.44505L27.2801 5.37338C26.8795 4.44869 26.2622 3.72788 25.4282 3.21092C24.5942 2.69397 23.6455 2.43549 22.582 2.43549C21.5914 2.43549 20.6973 2.65756 19.8997 3.10171C19.1021 3.54585 18.4739 4.18839 18.015 5.02935C17.5561 5.87031 17.3267 6.8587 17.3267 7.99454C17.3267 9.13766 17.5561 10.1297 18.015 10.9706C18.4739 11.8116 19.1021 12.4542 19.8997 12.8983C20.6973 13.3424 21.5914 13.5645 22.582 13.5645C23.6527 13.5645 24.6033 13.3079 25.4336 12.7945C26.264 12.2812 26.8795 11.5622 27.2801 10.6375L29.7165 11.5659C29.3305 12.4833 28.786 13.2751 28.0831 13.9413C27.3802 14.6075 26.559 15.1172 25.6194 15.4703C24.6797 15.8234 23.6673 16 22.582 16ZM46.5297 15.7925L45.5027 3.49488L41.0341 15.7925H39.3952L34.9484 3.51672L33.9105 15.7925H31.3101L32.5557 0.21843H36.194L40.2037 11.2273L44.2462 0.21843H47.8845L49.1191 15.7925H46.5297ZM54.799 2.54471V6.8587H60.1526V9.16314H54.799V13.4553H60.8519V15.7925H52.1549V0.21843H60.8519V2.54471H54.799Z" fill="#0065F2"/>
               </svg>

              </div>
              
                <div className="flex space-x-4 ms-auto items-center">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      
                      className='text-[#0065F2] text-[16px] leading-6 font-medium capitalize'
                        
                    >
                      {item.name}
                    </a>
                  ))}
                  <form>
                   <CiSearch className="text-[#0065F2] h-[18px] w-[18px] font-extrabold text-2xl"/>
                  </form>
                </div>
              
    </div>
  </nav>
  < section className=' h-auto md:h-[500px] py-[20px] px-[30px] md:pt-[60px] lg:py-[60px] md:px-[50px] lg:px-[120px]  w-full  hero'>
       <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center  md:px-0">
        <div className='w-full lg:w-[445px] lg:h-[288px] md:gap-[20px] lg:gap-[40px]'>
          <p className='text-[#0065F2] py-2 text-lg md:text-[30px] lg:text-[56px] font-bold md:tracking-tighter lg:leading-[60px]'> Medium length display headline</p>
           <p className='py-2 md:py-0 leading-7 font-normal text-base md:text-[18px] text-[#0065F2] w-full md:w-[300px]  md:h-[80px] md:mb-2 lg:mb-0  lg:w-[445px] h-auto md:h-[56px]'>      Separated they live in Bookmarks right at the coast of the famous Semantics, large language </p>
           <div className='flex items-center justify-between gap-[25px]  md:gap-[10px] lg:gap-[10px] lg:justify-between w-full md:w-[365px] md:h-[48px]  py-5 '>
          <button className='bg-[#0065F2] text-white w-[109px] h-[48px]  py-[12px] px-[20px]'>
          Action
          </button>
          <p className='text-[#0065F2] text-[14px] leading-5 font-normal md:w-[230px] w-full lg:w-full'>5,000 people like you have purchased this product! </p>
        </div>
        </div>
          <div className=' '>
            <img className='w-full h-auto  lg:w-[555px] lg:h-[555px] rounded-full ' src='https://s3-alpha-sig.figma.com/img/467f/ac93/a6b9d2354374e3d17bdcbace83192106?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4DvqGzczC~nD~d2Pfs1gmUtkJt5Vl~2YCmdXGIfUTldpVwD5VkdwbUfMfjm563aeKU6ITcqq2uxzrtGoHYQed~mGS-j6Xj6F7kIYj-IX4BQHjCTxjVvyrn~vQBgyit3HJulY8eHGN3M7yKMhYisZc39iIZeparu6B1PIXKLvynL8cw1wRmWosE78BG4Erfw79AyGn7agUaLiP4b45lG-zs9whjUqxrJa0NYa~rkmYDphl6JXekgxz-Nt8q5yMmaCbzovh3fghq9CRaRdbWWgZj1usGdr8Cih4c6f2GhvhIOeD2pfgplEtN3ellD2U-c-k9Di6-TIrSq-6QjF23Nng__' />
       
        </div>
       </div>
  </section>
  <section className=' flex  flex-col  md:flex-row items-center justify-between px-[30px] gap-[10px] w-full h-auto md:h-[248px] lg:mt-10 py-[60px] md:py-[30px] lg:py-[60px] px-[20px] gap-[10px] md:px-[50px] lg:px-[120px] space-y-9 md:space-y-0 content1'>
    <div className='flex flex-col lg:w-[350px] lg:h-[128px] gap-[16px] '>
      <div className="flex items-center gap-[16px]">
        <img src={Grp3} className='w-[40px] h-[34px]'/>
        <p className='font-normal text-[18px] text-[#0065F2] leading-7'>          Feature one</p>
      </div>
      <p className=' lg:w-[305px] h-[72px] font-normal leading-7 text-[16px] tracking-[0.1px] text-[#0065F2]'> All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>

    </div>
    <div className='flex flex-col lg:w-[350px] lg:h-[128px] gap-[16px]   '>
      <div className="flex items-center gap-[16px] ">
        <img src={Glyph} className='w-[40px] h-[34px]'/>
        <p className='font-normal text-[18px] text-[#0065F2] leading-7'>          Feature two</p>
      </div>
      <p className=' lg:w-[305px] h-[72px] font-normal leading-7 text-[16px] tracking-[0.1px] text-[#0065F2]'> All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>

    </div>
    <div className='flex flex-col lg:w-[350px] lg:h-[128px] gap-[16px] '>
      <div className="flex items-center gap-[16px] ">
        <img src={Glyph2} className='w-[40px] h-[34px]'/>
        <p className='font-normal text-[18px] text-[#0065F2] leading-7'>          Feature three</p>
      </div>
      <p className=' lg:w-[305px] h-[72px] font-normal leading-7 text-[16px] tracking-[0.1px] text-[#0065F2]'> All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>

    </div>
  </section>
  <section className='mb-5 h-auto mb-10 md:h-[500px] py-[20px] px-[30px]  md:py-[60px] md:px-[50px] lg:px-[120px]  w-full   gap-[110px] content2'>
       <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center ">
        <div className='w-full h-auto md:w-6/12 lg:w-[445px] lg:h-[288px] md:gap-[20px] lg:gap-[40px]'>
          <p className='text-[#0065F2] text-lg  md:text-[24px] font-bold -tracking-[0.1px] leading-6 h-auto lg:h-[64px]  lg:w-[445px]'> Long headline on two lines to turn your visitors into users and achieve more</p>
           <p className='leading-7 font-normal text-base md:text-[18px] text-[#0065F2] w-full md:w-11/12 lg:w-[445px] h-auto lg:h-[48px] tracking-[0.1px]'>   Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean </p>
             <ul className='lg:[445px] h-[120px] gap-[8px] mt-5 space-y-3'>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <GoDot className='w-[1em] h-[1em]'/> </span> Showcase and embed your work with </li>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <GoDot className='w-[1em] h-[1em]'/> </span> Publish across social channels in a click </li>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <GoDot className='w-[1em] h-[1em]'/> </span> Sell your videos worldwide</li>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <GoDot className='w-[1em] h-[1em]'/> </span> Embed your work with </li>
             </ul>
        </div>
          <div className='  '>
            <img className='w-full h-auto  lg:w-[555px] lg:h-[555px] ' src='https://s3-alpha-sig.figma.com/img/467f/ac93/a6b9d2354374e3d17bdcbace83192106?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4DvqGzczC~nD~d2Pfs1gmUtkJt5Vl~2YCmdXGIfUTldpVwD5VkdwbUfMfjm563aeKU6ITcqq2uxzrtGoHYQed~mGS-j6Xj6F7kIYj-IX4BQHjCTxjVvyrn~vQBgyit3HJulY8eHGN3M7yKMhYisZc39iIZeparu6B1PIXKLvynL8cw1wRmWosE78BG4Erfw79AyGn7agUaLiP4b45lG-zs9whjUqxrJa0NYa~rkmYDphl6JXekgxz-Nt8q5yMmaCbzovh3fghq9CRaRdbWWgZj1usGdr8Cih4c6f2GhvhIOeD2pfgplEtN3ellD2U-c-k9Di6-TIrSq-6QjF23Nng__' />
          </div>
       </div>
  </section>
  <section className=' content1 flex flex-col md:flex-row md:justify-between md:items-center  gap-[110px]  min-h-[570px] mb-10  md:mb-0 md:min-h-[500px] py-[20px] px-[20px]  md:py-[60px] md:px-[50px] lg:px-[120px]  w-full   '>
      <div className=' md:w-full h-auto  lg:w-[500px] lg:h-[380px] pt-0 mb-5 '>
            <img className='w-full h-[400px] lg:h-full ' src='https://s3-alpha-sig.figma.com/img/6eb0/29db/f5de4640d3675f344e48f8ac104b054e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qM-9FffONS6y45cn8Jj94IlItB4HaMvgzYT2FfcXNr69CJbROs3DE3PCIaJoejyQz5sVmhDBe~HRPmtZsZCz1s~H6wspXc5AU9mLLEHjSJ4y~XJs4pwEG0dqh1oIs9OcecY7FaN9oFZaZGzQqXc758DrAQBYrqa2lmULLxCJR~ShNz7vBjYcspPvyKiNJ7znvnWEGWObkYsx~2kNbNWr0wY1nUo5ztO3JPgrXQmn0Dm9t-u0sCGvC0KBPqOXT4RzkvYPQIRmsoZKoFMNYxbWB-CvHcy-k5p9W1e7Im4M6zJIpXqGufrQnGhQOCDZhmC1VpoUqsAmiBUlwiFAPfu0Vw__' />
            
      </div>
        <div className='w-full md:w-6/12 lg:w-[445px] lg:h-[256px] md:gap-[20px] lg:gap-[40px]'>
          <p className='text-[#0065F2] text-lg  md:text-[24px] font-bold -tracking-[0.1px] leading-6 h-auto lg:h-[64px]  lg:w-[445px]'> Long headline on two lines to turn your visitors into users and achieve more</p>
           <p className='leading-7 font-normal text-base md:text-[18px] text-[#0065F2] w-full md:w-11/12 md:mt-2 lg:mt-0 lg:w-[445px] h-auto lg:h-[72px] tracking-[0.1px]'> Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast </p>
             <ul className='lg:w-[445px] h-[88px] gap-[8px] mt-5 space-y-3'>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <CiCircleCheck  className='w-[20px] h-[20px]'/> </span> Showcase and embed your work with </li>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <CiCircleCheck  className='w-[20px] h-[20px]'/> </span> Publish across social channels in a click </li>
              <li className='font-normal text-[16px] leading-7 trackinh-[0.1px] text-[#0065F2] w-full  md:w-[429px] h-auto md:h-[24px] flex items-center gap-2 '> <span> <CiCircleCheck  className='w-[20px] h-[20px]'/> </span> Sell your videos worldwide</li>

             </ul>
        </div>
      
      
  </section>
  <section className='content1 flex pb-20  h-auto md:min-h-[500px] py-[20px] px-[30px] md:py-[58px] md:px-[50px] lg:px-[120px]  w-full   gap-0 md:gap-[50px] lg:gap-[110px]'>
       <div className=' flex flex-col    md:grid  md:grid-cols-3 w-full lg:w-[1114px]  h-auto md:min-h-[426px] md:gap-[30px] '>
         <div className='card flex flex-col w-full lg:w-[330px] border-2 border-[#FFFFFF] shadow-md px-2 md:px-2 h-[380px]  md:min-h-full mx-auto mb-5 md:mb-0 lg:h-[422px] lg:p-[24px] lg:gap-[58px]'>
             <p className='text-base md:text-[16px] lg:text-[18px] font-normal leading-7 w-full lg:w-[286px]  lg:h-[196px] md:h-min-[197px] text-[#0065F2] base-p'> “All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”</p> 
            <div className="flex flex-row items-end content-end w-[300px] h-[120px] ">
              <div className=' h-[120px] gap-[16px] flex flex-col   pt-10 md:pt-5 lg:pt-0'>
                <img className='rounded-full w-[60px] h-[60px]' src='https://s3-alpha-sig.figma.com/img/ed2b/47b9/0a6fe38f95709fdd2e0a6703f37961d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtOb7cXq9WcXA05drUn66PUdCOnqqYz-6TQ1fZ8Y57AKoQX3BHvaDE1E16bhk0vco1GljIkDkO5gJh6STv3tL01fNlTzOgX4B8yLHChH67Dzp8Me9f-qpuw9fmV2F-shEwYibS4Cr7zq5qRZYNWcIurSihk9jJoZ5EAxVnOB51uwVHCTt0gs9oE1m7QfViBuF~e3fV3g6fwBQaxASkbmB2ZfgFglpjfuSeX6InPNbQPnGOf5~xKlxLkEgI36SfPM5PyjDrgYrS~R9C8vvZBSEUQg~UbLjyQDI5NRmn5rWcCk6lZ25AKw62XECoJ86G-yZxkiGAdz9Zh4~zl9mTKvVQ__' alt='social'/>
                
                 <div>
                  <p className='text-[16px] md:text-[14px] lg:text-[16px] tracking-[0.01px] leading-7 font-medium text-[#0065F2]'> Name Surname</p>
                  <p className='text-[14px] md:text-[11px] lg:text-[14px] tracking-[0.01px] leading-7 font-normal text-[#0065F2]'> Description</p>
                 </div>
              </div>
               <p className='flex items-center justify-between ms-[7rem] gap-[16px] h-[16px]  w-[48px] text-[#0065F2] md:ms-[10px] lg:ms-auto social'> 
                  < FaSquareFacebook />
                  <span> <FaTwitter/> </span>
                </p>
              <div>
                
              </div>
            </div>
          </div>
          <div className=' card flex flex-col w-full lg:w-[330px] border-2 border-[#FFFFFF] shadow-md px-2 md:px-2 h-[380px]  md:min-h-full mx-auto mb-5 md:mb-0 lg:h-[422px] lg:p-[24px] lg:gap-[58px]'>
             <p className='base-p text-base md:text-[16px] lg:text-[18px] font-normal leading-7 w-full lg:w-[286px]  lg:h-[196px] md:h-min-[197px] text-[#0065F2] '> “All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”</p> 
            <div className="flex flex-row items-end w-[300px] h-[120px] ">
            <div className=' h-[120px] gap-[16px] flex flex-col   pt-10 md:pt-5 lg:pt-0'>
            <img className='rounded-full w-[60px] h-[60px]' src='https://s3-alpha-sig.figma.com/img/ed2b/47b9/0a6fe38f95709fdd2e0a6703f37961d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtOb7cXq9WcXA05drUn66PUdCOnqqYz-6TQ1fZ8Y57AKoQX3BHvaDE1E16bhk0vco1GljIkDkO5gJh6STv3tL01fNlTzOgX4B8yLHChH67Dzp8Me9f-qpuw9fmV2F-shEwYibS4Cr7zq5qRZYNWcIurSihk9jJoZ5EAxVnOB51uwVHCTt0gs9oE1m7QfViBuF~e3fV3g6fwBQaxASkbmB2ZfgFglpjfuSeX6InPNbQPnGOf5~xKlxLkEgI36SfPM5PyjDrgYrS~R9C8vvZBSEUQg~UbLjyQDI5NRmn5rWcCk6lZ25AKw62XECoJ86G-yZxkiGAdz9Zh4~zl9mTKvVQ__' alt='social'/>
                
                 <div>
                  <p className='text-[16px] md:text-[14px] lg:text-[16px] tracking-[0.01px] leading-7 font-medium text-[#0065F2]'> Name Surname</p>
                  <p className='text-[14px] md:text-[11px] lg:text-[14px] tracking-[0.01px] leading-7 font-normal text-[#0065F2]'> Description</p>
                 </div>
              </div>
              <p className='flex items-center justify-between ms-[7rem] gap-[16px] h-[16px]  w-[48px] text-[#0065F2] md:ms-[10px] lg:ms-auto social'> 
                  < FaSquareFacebook />
                  <span> <FaTwitter/> </span>
                </p>
              <div>
                
              </div>
            </div>
          </div>
          <div className='card  flex flex-col w-full lg:w-[330px] border-2 border-[#FFFFFF] shadow-md px-2 md:px-2 h-[380px]  md:min-h-full mx-auto mb-5 md:mb-0 lg:h-[422px] lg:p-[24px] lg:gap-[58px]'>
             <p className='base-p text-base md:text-[16px] lg:text-[18px] font-normal leading-7 w-full lg:w-[286px]  lg:h-[196px] md:h-min-[197px] text-[#0065F2] '> “All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”</p> 
            <div className="flex flex-row items-end w-[300px] h-[120px] content-end ">
            <div className=' h-[120px] gap-[16px] flex flex-col   pt-10 md:pt-5 lg:pt-0'>
            <img className='rounded-full w-[60px] h-[60px]' src='https://s3-alpha-sig.figma.com/img/ed2b/47b9/0a6fe38f95709fdd2e0a6703f37961d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtOb7cXq9WcXA05drUn66PUdCOnqqYz-6TQ1fZ8Y57AKoQX3BHvaDE1E16bhk0vco1GljIkDkO5gJh6STv3tL01fNlTzOgX4B8yLHChH67Dzp8Me9f-qpuw9fmV2F-shEwYibS4Cr7zq5qRZYNWcIurSihk9jJoZ5EAxVnOB51uwVHCTt0gs9oE1m7QfViBuF~e3fV3g6fwBQaxASkbmB2ZfgFglpjfuSeX6InPNbQPnGOf5~xKlxLkEgI36SfPM5PyjDrgYrS~R9C8vvZBSEUQg~UbLjyQDI5NRmn5rWcCk6lZ25AKw62XECoJ86G-yZxkiGAdz9Zh4~zl9mTKvVQ__' alt='social'/>
                
                 <div>
                  <p className='text-[16px] md:text-[14px] lg:text-[16px] tracking-[0.01px] leading-7 font-medium text-[#0065F2]'> Name Surname</p>
                  <p className='text-[14px] md:text-[11px] lg:text-[14px] tracking-[0.01px] leading-7 font-normal text-[#0065F2]'> Description</p>
                 </div>
              </div>
              <p className='flex items-center  ms-[7em] gap-[16px] h-[16px]  w-[48px] text-[#0065F2] md:ms-[10px] lg:ms-auto social'> 
                  < FaSquareFacebook />
                  <span> <FaTwitter/> </span>
                </p>
              <div>
                
              </div>
            </div>
          </div>
       </div>
  </section>
  <section className='flex flex-col h-auto md:min-h-[529px] md:mt-20 py-[20px] px-[30px]  md:py-[58px]  md:px-[50px] lg:px-[120px]  w-full   gap-0 md:gap-[50px] lg:gap-[110px] mb-5'>
     <div className="flex flex-col w-full md:w-[540px] h-auto md:h-[472px] gap-[32px] mx-auto ">
       <h3 className='w-full   md:w-[540px] text-center h-auto md:h-[48px] gap-[0px]  opacity-100 font-bold text-lg  md:text-[40px] leading-9 tracking-[0.1px] text-[#0065F2] sm:text-center'> Short headline</h3>
       <p className=' text-[16px] font-normal leading-6 tracking-[0.1px] text-[#0065F2] h-[100px] md:h-[72px] w-full md:w-[540px]'> Acme automates your subscription revenue and customer reporting. Just connect your data and Acme will calculate and visualize your most important metrics. </p>
       <ul className='h-auto md:h-[300px] space-y-5'>
        <li className='flex items-center w-11/12  md:w-[540px] h-auto md:h-[28px] text-base  md:text-[18px] leading-7 text-[#0065F2] border-b-2 border-[#0065F2] pb-2'> System requirements <span className='ms-auto'> <IoIosArrowForward className='h-[14px] w-[22px] '/> </span></li>
        <li className='flex items-center w-11/12  md:w-[540px] h-auto md:h-[28px] text-base  md:text-[18px] leading-7 text-[#0065F2] border-b-2 border-[#0065F2] pb-2'> Where can I learn more about how to get started? <span className='ms-auto'> <IoIosArrowForward className='h-[14px] w-[22px] '/> </span></li>
        <li className='flex items-center w-11/12  md:w-[540px] h-auto md:h-[28px] text-base  md:text-[18px] leading-7 text-[#0065F2] border-b-2 border-[#0065F2] pb-2'> Is Acme available for Linux?<span className='ms-auto'> <IoIosArrowForward className='h-[14px] w-[22px] '/> </span></li>
        <li className='flex items-center w-11/12  md:w-[540px] h-auto md:h-[28px] text-base  md:text-[18px] leading-7 text-[#0065F2] border-b-2 border-[#0065F2] pb-2'> What about a version for iOS? <span className='ms-auto'> <IoIosArrowForward className='h-[14px] w-[22px] '/> </span></li>
        <li className='flex items-center w-11/12  md:w-[540px] h-auto md:h-[28px] text-base  md:text-[18px] leading-7 text-[#0065F2] border-b-2 border-[#0065F2] pb-2'> Will I automatically be charged when my trial ends? <span className='ms-auto'> <IoIosArrowForward className='h-[14px] w-[22px] '/> </span></li>
       </ul>
      </div>   
  </section>
  <section className='flex justify-center    h-auto md:h-[529px] py-[10px] px-[30px]  md:py-[58px] md:px-[50px] lg:px-[120px]  w-full   gap-0 md:gap-[50px] lg:gap-[110px] mb-5'>
     <div className="flex flex-col w-[540px] h-[200px] gap-[32px]">
       <h5 className='w-full md:w-[540px] h-auto md:h-[48px] gap-[0px] opacity-100 font-medium text-[16px] text-center leading-9 tracking-[0.1px] text-[#0065F2]'> Tagline</h5>
       <h1 className='text-[18px] md:text-[40px] font-bold text-center  leading-5 md:leading-[48px] tracking-[0.1px] text-[#0065F2] h-auto md:h-[72px] w-full md:w-[490px] mb-5 '>Long headline to turn your visitors into users</h1>
       <button className='bg-[#0065F2] text-white w-[89px] h-[36px]  py-[6px] px-[10px] mx-auto gap-[10px]'>
          Action
          </button>
      </div>   
  </section>
  <section className=' w-full  h-auto lg:h-[236px]  px-[30px] md:px-[50px] lg:px-[120px] foot '>
      <div className='flex flex-col  md:flex-row md:justify-between items-start gap-[30px] md:gap-[50px] lg:gap-[122px] '>
         <div className=" w-[61px] h-auto ">
              <svg width="59.87px" height="15px" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7291 12.3304H3.92235L2.69866 15.7925H0L5.73603 0.21843H8.91543L14.6515 15.7925H11.9637L10.7291 12.3304ZM9.94245 10.0915L7.33119 2.73038L4.71993 10.0915H9.94245ZM22.582 16C21.0888 16 19.745 15.6742 18.5504 15.0225C17.3558 14.3709 16.4181 13.4407 15.737 12.2321C15.056 11.0234 14.7155 9.61093 14.7155 7.99454C14.7155 6.38543 15.056 4.97657 15.737 3.76792C16.4181 2.55927 17.3558 1.62913 18.5504 0.977474C19.745 0.325822 21.0888 0 22.582 0C23.6673 0 24.6797 0.176563 25.6194 0.529693C26.559 0.882823 27.3802 1.39249 28.0831 2.0587C28.786 2.72492 29.3305 3.52036 29.7165 4.44505L27.2801 5.37338C26.8795 4.44869 26.2622 3.72788 25.4282 3.21092C24.5942 2.69397 23.6455 2.43549 22.582 2.43549C21.5914 2.43549 20.6973 2.65756 19.8997 3.10171C19.1021 3.54585 18.4739 4.18839 18.015 5.02935C17.5561 5.87031 17.3267 6.8587 17.3267 7.99454C17.3267 9.13766 17.5561 10.1297 18.015 10.9706C18.4739 11.8116 19.1021 12.4542 19.8997 12.8983C20.6973 13.3424 21.5914 13.5645 22.582 13.5645C23.6527 13.5645 24.6033 13.3079 25.4336 12.7945C26.264 12.2812 26.8795 11.5622 27.2801 10.6375L29.7165 11.5659C29.3305 12.4833 28.786 13.2751 28.0831 13.9413C27.3802 14.6075 26.559 15.1172 25.6194 15.4703C24.6797 15.8234 23.6673 16 22.582 16ZM46.5297 15.7925L45.5027 3.49488L41.0341 15.7925H39.3952L34.9484 3.51672L33.9105 15.7925H31.3101L32.5557 0.21843H36.194L40.2037 11.2273L44.2462 0.21843H47.8845L49.1191 15.7925H46.5297ZM54.799 2.54471V6.8587H60.1526V9.16314H54.799V13.4553H60.8519V15.7925H52.1549V0.21843H60.8519V2.54471H54.799Z" fill="#0065F2"/>
               </svg>

        </div>
        <div className='w-full lg:w-[455px] h-auto gap-5 md:gap-[20px] lg:gap-[50px] flex flex-col md:grid md:grid-cols-3 '>
          <div className='flex flex-col mb-2'>
            <h5 className=' text-[#0065F2] text-[16px] pb-3 md:pb-5 font-medium leading-6 tracking-[0.01px]'> First column </h5>
             <ul className='w-[100px]  gap-[8px] space-y-2'>
              <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                First page
                </NavLink> </li>
             <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                Second page
                </NavLink> 
                </li>
                <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                 Third
                </NavLink> </li>
                <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                   Fourth
                </NavLink> </li>
             </ul>
          </div>
          <div className='flex flex-col mb-2 '>
            <h5 className=' text-[#0065F2] text-[16px] pb-3 md:pb-5 font-medium leading-6 tracking-[0.01px]'> Second </h5>
             <ul className='w-[100px]  gap-[8px] space-y-2'>
              <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                First page
                </NavLink> </li>
             <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                Second page
                </NavLink> 
                </li>
                <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                 Third
                </NavLink> </li>
               
             </ul>
          </div>
          <div className='flex flex-col '>
            <h5 className=' text-[#0065F2] text-[16px] pb-3 md:pb-5 font-medium leading-6 tracking-[0.01px]'> Third </h5>
             <ul className='w-[100px]  gap-[8px] space-y-2'>
              <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                First page
                </NavLink> </li>
             <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                Second page
                </NavLink> 
                </li>
                <li className='font-normal leading-5 text-[16px] text-[#0065F2]'> 
              <NavLink to="/"> 
                 Third
                </NavLink> </li>
               
             </ul>
          </div>
        </div>
        <div className=' w-full md:w-[350px] h-auto md:gap-[24px] md:px-5'  >
           <form className='relative'>
            <h5 className=' text-[16px] font-medium leading-6 tracking-[0.01px] text-[#0065F2] mb-2'> Subscribe</h5>
             <input type='text' className='w-full  lg:w-[250px] h-[48px]  border-2 border-[#E0ECFD66] rounded-md'/>
               < IoIosArrowForward className=' absolute right-[1rem] md:right-[1rem] lg:right-[3rem] top-[3rem]  md:top-[48.5px]  text-[#0065F2]'/>
              <p className='text-[14px] font-normal leading-5 text-[#0065F2] opacity-40'> Join our newsletter to stay up to date on features and releases</p>
           </form>
        </div>
      </div>
  </section>
   </div>
  )
}

export default Home;