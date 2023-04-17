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
   <div className="flex items-center justify-between gap-6 mb-5">
   <div className='font-bold text-[30px]'>{props.title}</div>
    {/* <div className="flex items-center gap-3">
      <div ref={navigationPrevRef} className='flex items-center justify-center w-[45px] h-[45px] bg-purple-500 rounded-full transition hover:bg-purple-600 cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z" fill="white"/></svg></div>
      <div ref={navigationNextRef} className='flex items-center justify-center w-[45px] h-[45px] bg-purple-500 rounded-full transition hover:bg-purple-600 cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z" fill="white"/></svg></div>
    </div> */}

    <input type="text" placeholder='Search' className='w-[400px] bg-white px-2 py-2 rounded-md border-solid border border-purple-300 outline-none' />
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
  
        


                {props.data.filter(parameter => parameter.category.includes(props.title))
                  .map(parameter => {
                    return (
                      <SwiperSlide
                      key={parameter.id}
                      className='transition rounded-lg block'
                    >
                      <div>
                        <button onClick={openModal} className='w-full'>
                            <img src={parameter.image} className='grayscale select-none h-[230px] w-full object-cover object-bottom rounded-[14px]' alt="cover" />
                            <div className="flex items-center justify-between gap-2 mt-2 ">
                            <div className='font-[500] text-[19px] leading-[36px] uppercase'>{parameter.text}</div>
                            <div className=''><svg width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="black"/></svg></div>
                            </div>
                        </button>
                      </div>



                {/* Modal */}
   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-purple-500 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  
                 <div className="flex items-center justify-end">
                  <button onClick={closeModal} className='outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(168 85 247)" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                 <video id='video' controls="controls" preload='none' className='w-full mt-5' poster="https://assets.codepen.io/32795/poster.png">
                  <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
                  <p>Your user agent does not support the HTML5 Video element.</p>
                 </video>
                 
                 <button className='text-purple-500 mt-5'>#{parameter.category}</button>
                 <div className='font-bold text-[30px]'>{parameter.text}</div>
                 <div className='mt-2'>{parameter.description}</div>
                 <a href={parameter.link} className='flex w-fit rounded-md px-4 py-2.5 text-white font-semibold mt-7 bg-purple-500 transition hover:bg-purple-600'>Get Started</a>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



              </SwiperSlide>
      
      )
    })
}



        </Swiper>
    </>
  )
}

export default Slider;