import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// Tools Images
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/blender.png";
import Tools11 from "/assets/tools/kotlin.png";
import Tools12 from "/assets/tools/firebase.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/ts.png";
import Tools16 from "/assets/tools/php.png";
import Tools17 from "/assets/tools/vite.png";
import Tools18 from "/assets/tools/mysql.png";
import Tools19 from "/assets/tools/flutter.png";
import Tools20 from "/assets/tools/dart.png";

// Tools Data
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Frontend Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "React Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "JavaScript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Programming Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Blender",
    ket: "3D Design Tool",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Kotlin",
    ket: "Programming Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Firebase",
    ket: "Backend Platform",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Markup Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "CSS",
    ket: "Styling Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "TypeScript",
    ket: "Programming Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "PHP",
    ket: "Programming Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "MySQL",
    ket: "Database",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Flutter",
    ket: "Mobile Framework",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Dart",
    ket: "Programming Language",
    dad: "2000",
  },
];

// Project Images
import Proyek1 from "/assets/project/ecoscan.png";
import Proyek2 from "/assets/project/trainwise.png";
import Proyek3 from "/assets/project/reviewly.png";
import Proyek4 from "/assets/project/night-inspection.png";
import Proyek5 from "/assets/project/lumina-ai.png";
import Proyek6 from "/assets/project/portofolio.png";

// Project Data
export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "EcoScan",
    subtitle: "EcoScan is a mobile application powered by Artificial Intelligence...",
    fullDescription:
      "EcoScan is a mobile application powered by Artificial Intelligence and Machine Learning, developed to classify waste and support better recycling decisions. By analyzing waste images and identifying categories such as organic, plastic, paper, metal, and other materials, the app helps users understand how to dispose of waste properly. This project demonstrates the role of AI in environmental sustainability by improving awareness, accessibility, and efficiency in waste management.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Pradz7/EcoScan",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "TrainWise",
    subtitle: "TrainWise is an AI-powered fitness and nutrition coach...",
    fullDescription:
      "TrainWise is an AI-powered fitness and nutrition coach that helps users generate personalized workout and nutrition plans, track progress, and receive chatbot-based guidance through Gemini API. Built with Next.js, TypeScript, Tailwind CSS, FastAPI, and Python, this project shows how AI can support healthier and more personalized fitness experiences.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Pradz7/TrainWise",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Reviewly",
    subtitle: "Reviewly is a web-based movie review analysis application...",
    fullDescription:
      "Reviewly is a web-based movie review analysis application developed to help users understand movie reviews through Natural Language Processing and Named Entity Recognition. Built using Python, Flask, HTML, CSS, and JavaScript, this project provides features for analyzing review text, identifying important entities, and presenting structured insights from user input. This project demonstrates my ability to build AI-powered web applications with NLP integration, text processing, and responsive user interfaces.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Pradz7/Reviewly",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Night Inspection",
    subtitle: "Night Inspection is a Roblox horror game developed using Roblox Studio and Luau...",
    fullDescription:
      "Night Inspection is a Roblox horror game developed using Roblox Studio and Luau, focusing on exploration, puzzle solving, and atmospheric storytelling. The game follows a dark inspection-themed scenario where players must investigate their surroundings, interact with objects, solve clues, and progress through a tense environment. This project demonstrates my ability to create interactive gameplay systems, design immersive environments, implement object interactions, and build game mechanics using Luau scripting.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Pradz7/Night-Inspection",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Lumina AI",
    subtitle: "Lumina AI is a Flask-based AI image editing web application...",
    fullDescription:
      "Lumina AI is a Flask-based AI image editing web application built with Python, HTML, CSS, and JavaScript. It provides AI-assisted tools such as background removal, beautify, color correction, object removal using brush mask and LaMa inpainting, and style transfer. This project demonstrates my ability to integrate AI features into a functional web application while focusing on image processing, user interaction, and practical photo editing workflows.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Pradz7/Lumina-AI",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Portfolio Website",
    subtitle: "This portfolio website is a personal web project...",
    fullDescription:
      "This portfolio website is a personal web project built to showcase my profile, skills, projects, organizational experience, and contact information in a modern and interactive way. Developed using React, Vite, Tailwind CSS, and several animation libraries, the website features responsive design, animated text, interactive project cards, organization experience details, and a 3D lanyard element. This project demonstrates my ability to create visually appealing, user-friendly, and responsive web applications while combining frontend development, UI design, and interactive components.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Pradz7/Portofolio",
    dad: "600",
  },
];