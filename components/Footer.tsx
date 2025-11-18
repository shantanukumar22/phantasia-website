import React from "react";
import Image from "next/image";

const PhantasiaFooter = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          {/* Phantasia Logo */}
          <div className="mb-6 sm:mb-8 w-full max-w-xs sm:max-w-md md:max-w-2xl">
            <Image
              src="/footerlogo.png"
              alt="Phantasia"
              width={2400}
              height={480}
              className="w-full h-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 mb-4">
            {/* Telegram */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.562 8.161L15.803 17.364C15.803 17.364 15.561 17.928 15.004 17.688L10.849 14.478L9.337 13.784L6.253 12.762C6.253 12.762 5.794 12.601 5.755 12.241C5.716 11.881 6.293 11.681 6.293 11.681L16.864 7.721C16.864 7.721 17.562 7.401 17.562 8.161Z"
                  fill="black"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                  fill="black"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.953 4.57C23.069 4.96 22.124 5.224 21.129 5.335C22.143 4.723 22.923 3.772 23.292 2.632C22.341 3.199 21.287 3.593 20.165 3.784C19.269 2.841 17.992 2.248 16.574 2.248C13.857 2.248 11.654 4.451 11.654 7.173C11.654 7.557 11.699 7.931 11.781 8.291C7.691 8.113 4.066 6.13 1.64 3.162C1.213 3.884 0.974 4.723 0.974 5.619C0.974 7.317 1.844 8.814 3.162 9.686C2.355 9.662 1.596 9.441 0.934 9.077V9.137C0.934 11.533 2.627 13.535 4.88 13.984C4.467 14.095 4.031 14.156 3.584 14.156C3.27 14.156 2.964 14.125 2.668 14.068C3.287 16.036 5.094 17.462 7.245 17.501C5.565 18.823 3.456 19.609 1.175 19.609C0.778 19.609 0.387 19.585 0 19.539C2.179 20.937 4.768 21.752 7.548 21.752C16.561 21.752 21.502 14.236 21.502 7.74L21.484 7.132C22.448 6.434 23.295 5.563 23.953 4.57Z"
                  fill="black"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 sm:gap-10 md:gap-12">
          {/* Left Side - Code Create Conquer */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <div>CODE.</div>
              <div>CREATE.</div>
              <div>CONQUER.</div>
            </h2>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex-1 flex flex-col justify-center h-full items-center lg:items-end w-full">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/fslogo.png"
                  alt="FS Logo"
                  width={120}
                  height={50}
                  className="w-20 sm:w-24 md:w-28 lg:w-auto h-auto"
                />
              </div>
              <div className="text-xs sm:text-sm md:text-base leading-relaxed">
                <p className="font-normal mb-1">fullstack@bennet.edu.in</p>
                <p className="font-normal mb-1">Bennett University,</p>
                <p className="font-normal mb-1">Plot Nos 8-11, TechZone II,</p>
                <p className="font-normal">
                  Greater Noida 201310, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PhantasiaFooter;
