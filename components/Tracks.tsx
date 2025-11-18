// import React from "react";

// const StackIcon = () => (
//   <svg
//     width="45"
//     height="45"
//     viewBox="0 0 69 55"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M67.7238 18.7849L43.9397 29.0531C42.0319 29.876 35.4721 33.3029 33.8733 33.2395C33.284 33.2162 31.3717 32.2939 30.7202 31.9872C23.7023 28.6787 16.6312 24.6446 9.71785 21.0822C7.43862 19.906 2.08853 17.8879 0.416348 16.3945C-0.437532 15.6329 0.169523 15.2437 0.916668 14.7783C2.90683 13.5365 6.70704 12.1044 9.02408 11.0679C14.3519 8.68168 19.7398 6.49012 25.0832 4.13355C26.7287 3.40585 33.3107 0.0106153 34.5337 3.82746e-05C36.088 -0.0126542 41.1246 3.13508 42.8057 3.9897C51.0131 8.16341 59.2962 12.2081 67.4147 16.5404C68.173 17.0481 68.1619 18.0826 67.7238 18.7828V18.7849ZM3.96306 15.4552C3.89857 15.836 4.24102 16.092 4.5212 16.2972C5.32171 16.8874 7.22737 17.7695 8.21467 18.2835C11.7303 20.1091 15.3948 21.7359 18.9304 23.5319C23.2954 25.7467 28.3253 28.8563 32.7192 30.7221C34.0423 31.2827 34.3069 31.0796 35.5833 30.6227C39.1255 29.3577 43.177 27.2994 46.7104 25.7657C51.7003 23.5974 56.6968 21.2578 61.7244 19.1064C62.3359 18.8441 64.6819 18.3364 64.6819 17.6743C64.7064 17.2872 64.3661 17.266 64.1549 17.1052C63.4211 16.5552 61.7734 15.8614 60.855 15.3791C53.0167 11.2456 45.0382 6.97666 37.0709 3.10123C34.5804 1.8891 34.6849 1.95256 32.1544 3.03354C26.7954 5.32876 21.5187 7.90321 16.1887 10.2682C12.1483 12.06 8.08347 13.8391 3.96306 15.4573V15.4552Z"
//       fill="black"
//     />
//     <path
//       d="M1.09366 24.7623C1.50481 24.4935 5.36656 26.4725 6.08277 26.8238C15.4332 31.4168 24.5206 36.5241 33.9174 41.0366L35.5245 40.6937C45.6685 36.7992 55.7064 31.1184 65.8416 27.3911C66.151 27.2768 67.19 26.8704 67.3955 26.9593C69.3629 28.678 66.2173 29.5394 64.7805 30.1828C55.4632 34.3609 46.0023 38.6131 36.5899 42.5584C33.8268 43.7162 33.7715 43.4431 31.2007 42.1393C21.1894 37.0574 11.273 31.6539 1.2086 26.6228C0.547663 26.2164 0.88366 25.3571 1.09145 24.7623H1.09366Z"
//       fill="black"
//     />
//     <path
//       d="M68.845 39.5629L35.8455 53.9031L34.8332 54.1123L2.39302 37.6949C1.4229 36.9383 1.57386 36.6932 1.83803 35.5817C2.01119 35.4358 3.45193 36.055 3.76051 36.1818C13.2663 40.0933 22.9231 46.1772 32.278 50.6657C33.1749 51.0947 34.0873 51.5342 35.0396 51.847C36.5647 51.4708 38.061 50.7946 39.5062 50.2008C48.5525 46.4815 58.4357 41.0612 67.5552 38.0182C67.8261 37.9273 68.6075 37.6124 68.7762 37.8956L68.8428 39.5629H68.845Z"
//       fill="black"
//     />
//   </svg>
// );

// const TrackCard = ({ title, description }) => (
//   <div className="bg-white rounded-[1.75rem] overflow-hidden border-2 border-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col max-w-xs">
//     <div className="flex items-start justify-between p-4 pb-2">
//       <h3 className="text-3xl font-bold text-black">{title}</h3>
//       <div className="text-black flex-shrink-0">
//         <StackIcon />
//       </div>
//     </div>
//     <div className="bg-black mx-[0.15rem] mb-[0.15rem] rounded-b-[1.5rem] p-4 flex-1 flex items-center">
//       <p className="text-white text-base leading-relaxed">{description}</p>
//     </div>
//   </div>
// );

// export default function TracksComponent() {
//   const tracks = [
//     {
//       title: "Fullstack",
//       description:
//         "The Fullstack Track focuses on building complete, end-to-end web solutions.",
//     },
//     {
//       title: "Open Innovation",
//       description:
//         "Build creative solutions to real-world problems without track constraints.",
//     },
//     {
//       title: "AI/ML",
//       description:
//         "Leverage artificial intelligence and machine learning to create intelligent, data-driven applications.",
//     },
//     {
//       title: "Blockchain",
//       description:
//         "Develop decentralized solutions emphasizing transparency, trust, and security.",
//     },
//     {
//       title: "CyberSecurity",
//       description:
//         "Design systems and tools that protect data, networks, and users from digital threats.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-3">
//       <div className="bg-black rounded-[3rem] w-full max-w-[2200px] px-12 py-14">
//         <h1 className="text-[7rem] font-black text-white mb-16 tracking-tight leading-none">
//           TRACKS
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mx-auto max-w-5xl">
//           {tracks.slice(0, 3).map((track, index) => (
//             <TrackCard
//               key={index}
//               title={track.title}
//               description={track.description}
//             />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
//           {tracks.slice(3).map((track, index) => (
//             <TrackCard
//               key={index + 3}
//               title={track.title}
//               description={track.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// const StackIcon = () => (
//   <svg
//     width="45"
//     height="45"
//     viewBox="0 0 69 55"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M67.7238 18.7849L43.9397 29.0531C42.0319 29.876 35.4721 33.3029 33.8733 33.2395C33.284 33.2162 31.3717 32.2939 30.7202 31.9872C23.7023 28.6787 16.6312 24.6446 9.71785 21.0822C7.43862 19.906 2.08853 17.8879 0.416348 16.3945C-0.437532 15.6329 0.169523 15.2437 0.916668 14.7783C2.90683 13.5365 6.70704 12.1044 9.02408 11.0679C14.3519 8.68168 19.7398 6.49012 25.0832 4.13355C26.7287 3.40585 33.3107 0.0106153 34.5337 3.82746e-05C36.088 -0.0126542 41.1246 3.13508 42.8057 3.9897C51.0131 8.16341 59.2962 12.2081 67.4147 16.5404C68.173 17.0481 68.1619 18.0826 67.7238 18.7828V18.7849ZM3.96306 15.4552C3.89857 15.836 4.24102 16.092 4.5212 16.2972C5.32171 16.8874 7.22737 17.7695 8.21467 18.2835C11.7303 20.1091 15.3948 21.7359 18.9304 23.5319C23.2954 25.7467 28.3253 28.8563 32.7192 30.7221C34.0423 31.2827 34.3069 31.0796 35.5833 30.6227C39.1255 29.3577 43.177 27.2994 46.7104 25.7657C51.7003 23.5974 56.6968 21.2578 61.7244 19.1064C62.3359 18.8441 64.6819 18.3364 64.6819 17.6743C64.7064 17.2872 64.3661 17.266 64.1549 17.1052C63.4211 16.5552 61.7734 15.8614 60.855 15.3791C53.0167 11.2456 45.0382 6.97666 37.0709 3.10123C34.5804 1.8891 34.6849 1.95256 32.1544 3.03354C26.7954 5.32876 21.5187 7.90321 16.1887 10.2682C12.1483 12.06 8.08347 13.8391 3.96306 15.4573V15.4552Z"
//       fill="black"
//     />
//     <path
//       d="M1.09366 24.7623C1.50481 24.4935 5.36656 26.4725 6.08277 26.8238C15.4332 31.4168 24.5206 36.5241 33.9174 41.0366L35.5245 40.6937C45.6685 36.7992 55.7064 31.1184 65.8416 27.3911C66.151 27.2768 67.19 26.8704 67.3955 26.9593C69.3629 28.678 66.2173 29.5394 64.7805 30.1828C55.4632 34.3609 46.0023 38.6131 36.5899 42.5584C33.8268 43.7162 33.7715 43.4431 31.2007 42.1393C21.1894 37.0574 11.273 31.6539 1.2086 26.6228C0.547663 26.2164 0.88366 25.3571 1.09145 24.7623H1.09366Z"
//       fill="black"
//     />
//     <path
//       d="M68.845 39.5629L35.8455 53.9031L34.8332 54.1123L2.39302 37.6949C1.4229 36.9383 1.57386 36.6932 1.83803 35.5817C2.01119 35.4358 3.45193 36.055 3.76051 36.1818C13.2663 40.0933 22.9231 46.1772 32.278 50.6657C33.1749 51.0947 34.0873 51.5342 35.0396 51.847C36.5647 51.4708 38.061 50.7946 39.5062 50.2008C48.5525 46.4815 58.4357 41.0612 67.5552 38.0182C67.8261 37.9273 68.6075 37.6124 68.7762 37.8956L68.8428 39.5629H68.845Z"
//       fill="black"
//     />
//   </svg>
// );

// const TrackCard = ({ title, description }) => (
//   <div className="bg-white rounded-[1.75rem] overflow-hidden border-2 border-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[280px]">
//     <div className="flex items-start justify-between p-5 pb-3">
//       <h3 className="text-2xl font-bold text-black leading-tight">{title}</h3>
//       <div className="text-black flex-shrink-0 ml-2">
//         <StackIcon />
//       </div>
//     </div>
//     <div className="bg-black mx-[0.15rem] mb-[0.15rem] rounded-b-[1.5rem] p-5 flex-1 flex items-start">
//       <p className="text-white text-sm leading-relaxed">{description}</p>
//     </div>
//   </div>
// );

// export default function TracksComponent() {
//   const tracks = [
//     {
//       title: "Fullstack",
//       description:
//         "The Fullstack Track focuses on building complete, end-to-end web solutions.",
//     },
//     {
//       title: "Open Innovation",
//       description:
//         "Build creative solutions to real-world problems without track constraints.",
//     },
//     {
//       title: "AI/ML",
//       description:
//         "Leverage artificial intelligence and machine learning to create intelligent, data-driven applications.",
//     },
//     {
//       title: "Blockchain",
//       description:
//         "Develop decentralized solutions emphasizing transparency, trust, and security.",
//     },
//     {
//       title: "CyberSecurity",
//       description:
//         "Design systems and tools that protect data, networks, and users from digital threats.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
//       <div className="bg-black rounded-[3rem] w-full max-w-[1400px] px-10 py-12">
//         <h1 className="text-[5.5rem] font-black text-white mb-12 tracking-tight leading-none">
//           TRACKS
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
//           {tracks.slice(0, 3).map((track, index) => (
//             <TrackCard
//               key={index}
//               title={track.title}
//               description={track.description}
//             />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[calc(66.666%-0.5rem)] mx-auto">
//           {tracks.slice(3).map((track, index) => (
//             <TrackCard
//               key={index + 3}
//               title={track.title}
//               description={track.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const StackIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 69 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M67.7238 18.7849L43.9397 29.0531C42.0319 29.876 35.4721 33.3029 33.8733 33.2395C33.284 33.2162 31.3717 32.2939 30.7202 31.9872C23.7023 28.6787 16.6312 24.6446 9.71785 21.0822C7.43862 19.906 2.08853 17.8879 0.416348 16.3945C-0.437532 15.6329 0.169523 15.2437 0.916668 14.7783C2.90683 13.5365 6.70704 12.1044 9.02408 11.0679C14.3519 8.68168 19.7398 6.49012 25.0832 4.13355C26.7287 3.40585 33.3107 0.0106153 34.5337 3.82746e-05C36.088 -0.0126542 41.1246 3.13508 42.8057 3.9897C51.0131 8.16341 59.2962 12.2081 67.4147 16.5404C68.173 17.0481 68.1619 18.0826 67.7238 18.7828V18.7849ZM3.96306 15.4552C3.89857 15.836 4.24102 16.092 4.5212 16.2972C5.32171 16.8874 7.22737 17.7695 8.21467 18.2835C11.7303 20.1091 15.3948 21.7359 18.9304 23.5319C23.2954 25.7467 28.3253 28.8563 32.7192 30.7221C34.0423 31.2827 34.3069 31.0796 35.5833 30.6227C39.1255 29.3577 43.177 27.2994 46.7104 25.7657C51.7003 23.5974 56.6968 21.2578 61.7244 19.1064C62.3359 18.8441 64.6819 18.3364 64.6819 17.6743C64.7064 17.2872 64.3661 17.266 64.1549 17.1052C63.4211 16.5552 61.7734 15.8614 60.855 15.3791C53.0167 11.2456 45.0382 6.97666 37.0709 3.10123C34.5804 1.8891 34.6849 1.95256 32.1544 3.03354C26.7954 5.32876 21.5187 7.90321 16.1887 10.2682C12.1483 12.06 8.08347 13.8391 3.96306 15.4573V15.4552Z"
      fill="black"
    />
    <path
      d="M1.09366 24.7623C1.50481 24.4935 5.36656 26.4725 6.08277 26.8238C15.4332 31.4168 24.5206 36.5241 33.9174 41.0366L35.5245 40.6937C45.6685 36.7992 55.7064 31.1184 65.8416 27.3911C66.151 27.2768 67.19 26.8704 67.3955 26.9593C69.3629 28.678 66.2173 29.5394 64.7805 30.1828C55.4632 34.3609 46.0023 38.6131 36.5899 42.5584C33.8268 43.7162 33.7715 43.4431 31.2007 42.1393C21.1894 37.0574 11.273 31.6539 1.2086 26.6228C0.547663 26.2164 0.88366 25.3571 1.09145 24.7623H1.09366Z"
      fill="black"
    />
    <path
      d="M68.845 39.5629L35.8455 53.9031L34.8332 54.1123L2.39302 37.6949C1.4229 36.9383 1.57386 36.6932 1.83803 35.5817C2.01119 35.4358 3.45193 36.055 3.76051 36.1818C13.2663 40.0933 22.9231 46.1772 32.278 50.6657C33.1749 51.0947 34.0873 51.5342 35.0396 51.847C36.5647 51.4708 38.061 50.7946 39.5062 50.2008C48.5525 46.4815 58.4357 41.0612 67.5552 38.0182C67.8261 37.9273 68.6075 37.6124 68.7762 37.8956L68.8428 39.5629H68.845Z"
      fill="black"
    />
  </svg>
);

const TrackCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-[1.75rem] overflow-hidden border-2 border-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[200px] sm:h-[220px] md:h-[240px] w-full max-w-[340px] mx-auto">
      <div className="flex items-start justify-between p-3 sm:p-4 md:p-5 pb-2 sm:pb-3">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">{title}</h3>
        <div className="text-black shrink-0 ml-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 69 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          >
            <path
              d="M67.7238 18.7849L43.9397 29.0531C42.0319 29.876 35.4721 33.3029 33.8733 33.2395C33.284 33.2162 31.3717 32.2939 30.7202 31.9872C23.7023 28.6787 16.6312 24.6446 9.71785 21.0822C7.43862 19.906 2.08853 17.8879 0.416348 16.3945C-0.437532 15.6329 0.169523 15.2437 0.916668 14.7783C2.90683 13.5365 6.70704 12.1044 9.02408 11.0679C14.3519 8.68168 19.7398 6.49012 25.0832 4.13355C26.7287 3.40585 33.3107 0.0106153 34.5337 3.82746e-05C36.088 -0.0126542 41.1246 3.13508 42.8057 3.9897C51.0131 8.16341 59.2962 12.2081 67.4147 16.5404C68.173 17.0481 68.1619 18.0826 67.7238 18.7828V18.7849ZM3.96306 15.4552C3.89857 15.836 4.24102 16.092 4.5212 16.2972C5.32171 16.8874 7.22737 17.7695 8.21467 18.2835C11.7303 20.1091 15.3948 21.7359 18.9304 23.5319C23.2954 25.7467 28.3253 28.8563 32.7192 30.7221C34.0423 31.2827 34.3069 31.0796 35.5833 30.6227C39.1255 29.3577 43.177 27.2994 46.7104 25.7657C51.7003 23.5974 56.6968 21.2578 61.7244 19.1064C62.3359 18.8441 64.6819 18.3364 64.6819 17.6743C64.7064 17.2872 64.3661 17.266 64.1549 17.1052C63.4211 16.5552 61.7734 15.8614 60.855 15.3791C53.0167 11.2456 45.0382 6.97666 37.0709 3.10123C34.5804 1.8891 34.6849 1.95256 32.1544 3.03354C26.7954 5.32876 21.5187 7.90321 16.1887 10.2682C12.1483 12.06 8.08347 13.8391 3.96306 15.4573V15.4552Z"
              fill="black"
            />
            <path
              d="M1.09366 24.7623C1.50481 24.4935 5.36656 26.4725 6.08277 26.8238C15.4332 31.4168 24.5206 36.5241 33.9174 41.0366L35.5245 40.6937C45.6685 36.7992 55.7064 31.1184 65.8416 27.3911C66.151 27.2768 67.19 26.8704 67.3955 26.9593C69.3629 28.678 66.2173 29.5394 64.7805 30.1828C55.4632 34.3609 46.0023 38.6131 36.5899 42.5584C33.8268 43.7162 33.7715 43.4431 31.2007 42.1393C21.1894 37.0574 11.273 31.6539 1.2086 26.6228C0.547663 26.2164 0.88366 25.3571 1.09145 24.7623H1.09366Z"
              fill="black"
            />
            <path
              d="M68.845 39.5629L35.8455 53.9031L34.8332 54.1123L2.39302 37.6949C1.4229 36.9383 1.57386 36.6932 1.83803 35.5817C2.01119 35.4358 3.45193 36.055 3.76051 36.1818C13.2663 40.0933 22.9231 46.1772 32.278 50.6657C33.1749 51.0947 34.0873 51.5342 35.0396 51.847C36.5647 51.4708 38.061 50.7946 39.5062 50.2008C48.5525 46.4815 58.4357 41.0612 67.5552 38.0182C67.8261 37.9273 68.6075 37.6124 68.7762 37.8956L68.8428 39.5629H68.845Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="bg-black mx-[0.15rem] mb-[0.15rem] rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl p-3 sm:p-4 md:p-5 flex-1 flex items-center justify-center">
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function TracksComponent() {
  const tracks = [
    {
      title: "Fullstack",
      description:
        "The Fullstack Track focuses on building complete, end-to-end web solutions.",
    },
    {
      title: "Open Innovation",
      description:
        "Build creative solutions to real-world problems without track constraints.",
    },
    {
      title: "AI/ML",
      description:
        "Leverage artificial intelligence and machine learning to create intelligent, data-driven applications.",
    },
    {
      title: "Blockchain",
      description:
        "Develop decentralized solutions emphasizing transparency, trust, and security.",
    },
    {
      title: "CyberSecurity",
      description:
        "Design systems and tools that protect data, networks, and users from digital threats.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 sm:px-4 py-6 sm:py-8">
      <div className="bg-black rounded-2xl sm:rounded-3xl md:rounded-[3rem] w-full max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-black text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tight leading-none">
          TRACKS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 md:px-8">
          {tracks.slice(0, 3).map((track, index) => (
            <TrackCard
              key={index}
              title={track.title}
              description={track.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2 sm:px-4 md:px-8 max-w-[900px] mx-auto">
          {tracks.slice(3).map((track, index) => (
            <TrackCard
              key={index + 3}
              title={track.title}
              description={track.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
