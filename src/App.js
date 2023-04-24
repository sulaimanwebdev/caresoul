import {useEffect} from 'react';
import Slider from "./components/Slider";

const tele = window.Telegram.WebApp;

export default function App() {
  
  useEffect(() => {
    tele.ready();
  });
  
  let data = [
    {
      id: 1,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Movies"
    },

    {
      id: 2,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Movies"
    },

    {
      id: 3,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Movies"
    },

    {
      id: 4,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Movies"
    },


    {
      id: 6,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Series"
    },

    {
      id: 7,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Series"
    },

    {
      id: 8,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Series"
    },

    {
      id: 9,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Series"
    },

    {
      id: 11,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Music"
    },

    {
      id: 12,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Music"
    },

    {
      id: 13,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Music"
    },

    {
      id: 14,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Music"
    },



    {
      id: 16,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Books"
    },

    {
      id: 17,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Books"
    },

    {
      id: 18,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Books"
    },

    {
      id: 19,
      image: "/images/cover.webp",
      text: "Batman",
      description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
      video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      link: "#",
      category: "Books"
    },
  ];

  


  let data2 = [
    {
      name: "Movies",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],
    },






    {
      name: "Top 10 Movies",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },





    {
      name: "Series",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },









    {
      name: "Top 10 Series",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },









    {
      name: "Music",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },







    {
      name: "Top 10 Music",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },








    {
      name: "Books",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    },





    {
      name: "Top 10 Books",
      mainData: [
        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },

        {
          image: "/images/cover.webp",
          text: "Batman",
          description: "Description of the video Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique totam earum commodi amet! Iusto porro nobis exercitationem.",
          video: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          link: "https://t.me/erroridiprezzo_offertedalweb",
          category: "Books"
        },
      ],

    }




  ]

  
  return (
    <div className="pl-[70px]">
     <div className="fixed top-0 left-0 w-[70px] flex items-center justify-center flex-col gap-5 py-3 px-2 bg-white border-solid border-r border-gray-200 min-h-screen max-h-screen overflow-y-auto overflow-x-hidden">
      <a href="#movies" className="min-w-[50px] min-h-[50px] bg-blue-500 transition hover:bg-blue-600 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg></a>
      <a href="#series" className="min-w-[50px] min-h-[50px] bg-blue-500 transition hover:bg-blue-600 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg></a>
      <a href="#music" className="min-w-[50px] min-h-[50px] bg-blue-500 transition hover:bg-blue-600 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-award-fill" viewBox="0 0 16 16"><path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/></svg></a>
      <a href="#books" className="min-w-[50px] min-h-[50px] bg-blue-500 transition hover:bg-blue-600 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg></a>
     </div>

     <div className="w-full px-5 pb-5">
     <input type="text" placeholder='Search' className='flex items-center justify-center mx-auto max-w-full sm:max-w-[400px] w-full mt-3 bg-white px-2 py-2 rounded-md border-solid border border-blue-300 outline-blue-500' />

       <Slider data2={data2}/>

       

     </div>
    </div>
  )
}