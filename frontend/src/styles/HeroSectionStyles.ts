const HeroSectionStyles = {
  section: "relative flex flex-col md:flex-row items-center bg-white text-black p-8 min-h-screen",
  textContainer: "md:w-1/2 p-6 z-10 text-center md:text-left",
  title: "text-3xl sm:text-5xl font-bold mb-4",
  description: "text-lg md:text-xl mb-6",
  getStartedButton: "bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600",

  // Moved gradientCircle into canvasContainer to ensure it’s behind the 3D model
  canvasContainer: "relative w-full md:w-1/2 h-[50vh] md:h-[70vh] flex justify-center items-center z-10",
  gradientCircle: `
    absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 
    blur-3xl opacity-70 animate-gradientMove z-0
  `,
};

// Define animation for gradient movement
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradientMove {
    background-size: 200% 200%;
    animation: gradientMove 10s ease infinite;
  }
`;
document.head.appendChild(styleElement);

export default HeroSectionStyles;
