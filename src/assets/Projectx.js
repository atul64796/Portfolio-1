import { v4 as uuidv4 } from 'uuid';

import image1 from "../images/music.png"
import image2 from "../images/todo.png"
import image3 from "../images/chat-bot.png"
import image4 from "../images/twitter.png"
import image5 from "../images/weather.png"




const Projectx = [
    {
        id:uuidv4(),
        title:" Spotify Music App",
        desc:"A music streaming application where users can explore different genres, play songs, and enjoy a seamless audio experience.",
        img :  image1,
    },
    {
        id:uuidv4(),
        title:"To-Do List App ",
        desc:"A task management app that allows users to add, edit, and delete tasks. Built with React for dynamic updates and a smooth user experience.",
        img :  image2 ,
    },
    {
        id:uuidv4(),
        title:"Chat Bot App",
        desc:"I created a chatbot using HTML, CSS, and JavaScript that lets users ask any question and upload images. It uses the Gemini API to generate intelligent responses.",
        img :  image3 ,
    },
    {
        id:uuidv4(),
        title:"Twitter-X Clone",
        desc:"A social media web app inspired by Twitter, allowing users to post, like, and interact with tweets. Built using modern web technologies for a smooth user experience.",
        img :  image4 ,
    },
    {
        id:uuidv4(),
        title:"Weather App",
        desc:"I built a weather app with HTML, CSS, and JavaScript that shows real-time weather using the OpenWeather API. 🌦️",
        img :  image5 ,
    }
  
]


export default Projectx;