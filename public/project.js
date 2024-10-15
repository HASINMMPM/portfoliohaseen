export const projectData = [
  {
    _id: "project01",
    title: "Brain Flip",
    category: "Memmory Game",
    img: "./project/barin.JPG",
    description: {
      paragraph1:" I developed a fully responsive memory card game using React, featuring smooth gameplay mechanics and dynamic state management with useState and useEffect hooks. The game challenges players to match pairs of emoji-based cards while incorporating logic to manage user interactions, prevent multiple simultaneous clicks, and provide immediate feedback for matched pairs.",
        paragraph2:
        "The card icons are randomized at the start of each game, ensuring a unique experience every time. The game dynamically tracks user interactions and flips cards based on their position, checking for matches. If a pair is matched, the cards remain flipped and marked as 'solved'. If not, they automatically flip back after a brief delay.",
      paragraph3:" I used SweetAlert2 to create a seamless alert system, displaying a congratulatory message once the game is completed, followed by an automatic page refresh to start a new game. The game is designed to handle complex state transitions with ease, using logic to prevent further clicks while cards are being checked for matches, ensuring smooth user experience.",
    paragraph4:"This project demonstrates my ability to build interactive and state-driven applications using React, managing asynchronous events, and optimizing for responsive gameplay across different devices."
  },
    liveLink: "https://brain-flip-game.vercel.app",
    githubLink: "https://github.com/HASINMMPM/Memmory-game",
  },
  {
    _id: "project02",
    title: "Hungry Hub",
    category: "Food Delivery",
    img: "./project/hungryhub.jpg",
    description: {
      paragraph1:"This food delivery website is built using the MERN stack, integrating MongoDB for database management, Express.js and Node.js for the backend, and React for the frontend. It utilizes advanced React features such as useState, useEffect, useContext, and useNavigate hooks to ensure a smooth and responsive user experience.",
      paragraph2:"Users can explore a wide range of restaurants, select dishes based on their preferences, and apply coupon codes for discounts. Secure user authentication is handled through Twilio's SMS-based verification during signup, while admin signup includes email verification via Nodemailer.",
         paragraph3:"For seamless and secure payment processing, Razorpay was integrated, giving users flexible online payment options. Additionally, users can cancel their orders at any time before delivery starts, adding convenience.",
         paragraph4:"The platform includes a feedback system that allows users to leave comments on their experiences, supporting continuous service improvement. This project showcases my ability to handle complex state management and API integrations, demonstrating my full-stack development skills with a focus on scalability and security."
        },
         liveLink: "https://food-order-frontend-ai6i.onrender.com",
    githubLink: "https://github.com/HASINMMPM/Food-order-frontend",
  },
];
// description: {
//   paragraph1:"",
//   paragraph2:"",
//      paragraph3:"",
//      paragraph4:""
//     },
