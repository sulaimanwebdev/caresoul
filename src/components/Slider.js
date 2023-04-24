import { Fragment, useState, useEffect, useRef, } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider = (props) => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = useState('');
  
    useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
       setIsOpen(false)
     }
   
     function openModal() {
       setIsOpen(true)
     }


  return (
    <>
   {
    props.data2.map((ele)=>{
      return(
        <>

<div className="flex items-center justify-between gap-6 py-4">
   <div className='font-bold text-[30px]'>{ele.name}</div>
    <div className="flex items-center gap-3">
      <div ref={navigationPrevRef} className='flex items-center justify-center w-[45px] h-[45px] bg-blue-500 rounded-full transition hover:bg-blue-600 cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z" fill="white"/></svg></div>
      <div ref={navigationNextRef} className='flex items-center justify-center w-[45px] h-[45px] bg-blue-500 rounded-full transition hover:bg-blue-600 cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z" fill="white"/></svg></div>
    </div>

   </div>

   

        <Swiper
          breakpoints={{
           
            0: {
              slidesPerView: 1.2,
            },
            635: {
              slidesPerView: 2.2,
            },
            952: {
              slidesPerView: 3.2,
            },
          }}
          slidesPerView={3.2}
          spaceBetween={25}
          rewind={true}
          pagination={{
            clickable: true,
            // el: 'swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'timeline-icon',
            bulletActiveClass: 'timeline-icon-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='w-full'
        >
  
        


              
                      {
                        ele.mainData.map((ele2)=>{
                          return(
                            <>
                            <SwiperSlide
                      className='transition rounded-lg block'
                    >
                      <div>
                        <button className='w-full'>
                            <img src={ele2.image} className='grayscale select-none h-[27vh] w-full object-cover object-bottom rounded-[14px]' alt="cover" />
                            <div className="flex items-center justify-between gap-2 mt-2 ">
                            <div className='font-[500] text-[19px] leading-[36px] uppercase'>{ele2.text}</div>
                            <div className=''><svg width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="black"/></svg></div>
                            </div>
                        </button>
                      </div>



              

              </SwiperSlide>
                            </>
                          )
                        })
                      }
      




        </Swiper>
        </>
      )
    })
   }
    </>
  )
}

export default Slider;