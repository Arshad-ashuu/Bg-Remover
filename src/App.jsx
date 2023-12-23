import { useState } from 'react';
import './App.css';


function App() {
  const [image, setimage] = useState(null);
  const [bgremove, setbgremove] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlechange = () => {
    setLoading(true);
    setError(null);

    const apiKey = 'KoxAv3zBoNgniSKJi4ThZsoy';
    const url = 'https://api.remove.bg/v1.0/removebg';

    const formData = new FormData();
    formData.append('image_file', image, image.name);
    formData.append('size', 'auto');

    fetch(url, {
      method: 'POST',
      headers: {
        'X-Api-Key': apiKey,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setbgremove(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error(error);
        setError('Error removing background. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDownload = () => {
    if (bgremove) {
      const a = document.createElement('a');
      a.href = bgremove;
      a.download = 'background_removed_image.png';
      a.click();
    }
  };

  return (
    <>
   
     
      
 
<main className="space-y-40 ">
  <div className="relative" id="home">
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
      <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Background{" "}
            <span className="text-primary dark:text-white">Removal Tool.🛠️</span>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
          Remove backgrounds 100% automatically in 5 seconds with one click
          Thanks to remove.bg's clever AI, you can slash editing time - and have more fun!
          No matter if you want to make a background transparent (PNG), add a white background to a photo, 
          extract or isolate the subject, or get the cutout of a photo - you can do all this and more with remove.bg.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6 ">
            <a
              href="#tool"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white bg-[#9333ea] px-6 py-[9px] border-none rounded-full">
                Get started
              </span>
            </a>
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Learn more
              </span>
            </a>
          </div>
       
        </div>
      </div>
    </div>
  </div>

  </main>

  <section className="px-4 py-8 leading-6 text-gray-700 sm:px-6 lg:px-8 mt-[160px]">
  <div
    className="w-full mx-auto max-w-screen-lg"
    
  >
    <div className="relative">
     
        <div className="flex items-center pl-3 space-x-1 bg-gray-500 rounded-t-xl h-7">
          <span className="w-3 h-3 bg-[#f23030] rounded-full" />
          <span className="w-3 h-3 bg-[#37c037] rounded-full" />
          <span className="w-3 h-3 bg-[#e7e73c] rounded-full" />
        </div>
        <video
          className="rounded-b-xl w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  
  </div>
</section>


  <section className=' flex justify-center items-center flex-col mt-[164px] mb-[220px] 'id='tool'>
          <div className="border rounded-2xl w-[320px] h-[230px] flex justify-center  text-black bg-white" >
            <div className="flex flex-col justify-center p-14">
              <label htmlFor="imagefile" className="custom-file-upload">
                <div className="border-dashed w-full h-full cursor-pointer">
                  Click to upload
                  <input
                    type="file"
                    name="imagefile"
                    id="imagefile"
                    className="hidden"
                    onChange={(e) => setimage(e.target.files[0])}
                  />
                </div>
              </label>
            </div>
          </div>
          <button className="mt-12 border-none rounded-full px-[130px] py-3 bg-[#9333ea]  text-white" onClick={handlechange}>
          Submit
        </button>

        

        {loading && <p className='animate-bounce text-white text-3xl'>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div>
          {bgremove && (
            <div className=" w-full h-full flex justify-center mt-16 ">
            <div className="border border-dashed rounded-xl flex justify-center">
              <img src={bgremove} alt="bgremoved" className="w-full h-full" />
              <button
                className="mt-2 m-4 border rounded-full px-4 py-1 w-[140px] h-[40px] text-white hover:bg-[#cdcdcd]"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
          )}
        
      </div>


      </section>
 </>
  );
}

export default App;
