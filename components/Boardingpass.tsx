const BoardingPass = () => {
  return (
    <div className="md:min-h-screen text-black py-8 sm:py-12 md:pt-5 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extralight mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 text-center sm:text-left mb-4 sm:mb-6">
        Get Your Boarding Pass for PHANTASIA now !
      </div>
      <div className="px-2 py-4 sm:p-6 md:p-8 lg:p-12">
        <img 
          src="/boardingpass.png" 
          alt="Boarding Pass"
          className="w-full h-auto max-w-5xl mx-auto"
        />
      </div>
    </div>
  );
};

export default BoardingPass;
