import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Royal Motors Service Point',
    img: './royal.png',
    desc: `Developed a modern, responsive website for Royal Motors Service Point using React.js and SCSS. Integrated EmailJS for dynamic enquiry handling and Google Maps for real-time location display. Crafted smooth navigation, SEO-friendly routing, and optimized UX across devices. A complete front-end build showcasing UI precision, service integration, and user engagement.`,
    link: 'https://royal-motors-service-point.vercel.app/',
  },
  {
    id: 2,
    title: 'MAAC India',
    img: './maac.png',
    desc: 'Spearheaded the front-end overhaul of MAAC’s official website using the MERN stack. Delivered a responsive, animation-enhanced UI with modern design elements, and ensured seamless integration with the existing CMS to streamline content delivery and elevate user engagement.',
    link: 'https://www.maacindia.com/',
  },
  {
    id: 3,
    title: 'ARENA',
    img: './arena.png',
    desc: 'Developed the front-end of a fully responsive website redesign using the MERN stack. Built interactive UI components with smooth animations and optimized performance across devices. Integrated the new interface with the existing CMS to ensure consistent and efficient content delivery.',
    link: 'https://www.arena-multimedia.com/',
  },
  {
    id: 4,
    title: 'Anubhuti and Surnag Developers',
    img: './anubhuti.png',
    desc: 'Successfully developed a fully functional website for Design Anubhuti and Surnag using the MERN stack. Built responsive frontend with React.js for smooth user experience. Developed secure backend with Node.js, Express & MongoDB. Integrated Admin Dashboards for efficient content and user management. Deployed on Hostinger ensuring reliability and performance.',
    link: 'https://designanubhuti.com/',
  },
  {
    id: 5,
    title: 'Vibhog',
    img: './vibhog.png',
    desc: 'Built and deployed a clean, responsive WordPress website for a rice and atta brand. Hosted on Hostinger, the site features optimized product display, contact forms, and brand-focused design to support credibility and customer trust.',
    link: 'https://mdln.co.in/',
  },
  {
    id: 6,
    title: 'AI Chat Application',
    img: './AI_CHAT.gif',
    desc: 'Developed a full-stack AI chat platform using React, Express, and MongoDB, powered by Google Gemini AI. Enhanced real-time interactions and optimized server-side processing, achieving a 25% reduction in latency for improved performance and user experience.',
    link: 'https://github.com/Kalpesh-Parab/AI-Chat-react.git',
  },
  {
    id: 7,
    title: 'React-Booking App',
    img: './Booking.jpg',
    desc: 'Created a high-performance booking application utilizing React, Node.js, and MongoDB. The platform features a responsive UI for seamless hotel searches and reservations, alongside a scalable backend API for user authentication and booking management, ensuring efficient data handling.',
    link: 'https://github.com/Kalpesh-Parab',
  },
  {
    id: 8,
    title: 'React-Admin Dashboard',
    img: './Admin_react.gif',
    desc: 'Developed a scalable admin dashboard using React, centralizing user and product management with effective data visualization. Integrated dark mode functionality to enhance user experience and usability for prolonged engagement, making the interface more accessible and user-friendly.',
    link: 'https://github.com/Kalpesh-Parab/yatri_Travels/tree/main/admin/src',
  },
  {
    id: 9,
    title: 'IPL Win Predictor',
    img: './IPL_Win_Predictor.gif',
    desc: `Designed a machine learning model capable of predicting IPL match outcomes with 88% accuracy. Implemented advanced optimization techniques to reduce model training time by 30%, enhancing the system's responsiveness for real-time data predictions.`,
    link: 'https://github.com/Kalpesh-Parab/IPL.git',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imgContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
