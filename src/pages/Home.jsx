const Home = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Cheat Sheets</h2>
      <p className="mb-12 text-lg text-gray-500">
        We are cheat Sheets & Tricks for.... ⬇️
      </p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Window Cheat Sheets</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Browser Cheat Sheets</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">VS Code</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-600 rounded-lg" />
              <div className="relative h-full p-5 bg-white border-2 border-graybg-gray-600 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Linix / Terminal</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-graybg-gray-600 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Mind Mapping
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                ------------ <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
