import React,{useRef, useEffect,useState} from 'react'

const Reg = () => {

  const videpRef = useRef(null);
  const photoRef = useRef(null);

const [hasPhoto, setHasPhoto] = useState(false);
  
const getVideo = () =>{
  navigator.mediaDevices

        .getUserMedia({
          video: {width: 620, height: 540}
        })
        .then(stream =>{
          let video = videpRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error(err);
        })
}

const takePhoto =() =>{
  const width = 314;
  const height =width /(16 /9);

  let video = videpRef.current;
  let photo =photoRef.current;

  photo.width = width;
  photo.height = height;

  let ctx = photo.getContext('2d');
  ctx.drawImage(video,0,0,width,height);
  setHasPhoto(true);
}

const closePhoto=() =>{
  let ctx = photo.getContext('2d');
  ctx.clearReact( 0, 0,photo.width, photo.height);
  setHasPhoto(false);
}
useEffect(() => {
  getVideo();

},[videpRef])



  return (

    <>
     <div className="flex grid place-items-center shadow-lg h-screen  " >
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg shadow-blue-500/50">
    <h1 className="text-xl font-semibold">Welcome To Era InfoTech, 
    <span className="font-normal">Resister Please</span></h1>
    <form className="mt-6">
      <label  className="block text-xs font-semibold text-gray-600 uppercase">UserName</label>
      <input id="username" type="name" name="name"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <br/>
     <label  className="block text-xs font-semibold text-gray-600 uppercase">Upload Picture</label>
  
     <div id='App'>
      <div id='camera'>
        <video ref={videpRef}></video>
        <button id='button' onClick={takePhoto}>Snap</button>
      </div>
      <div id={ 'result' + (hasPhoto ? 'hasPhoto' :
      '')}>

        <canvas ref={photoRef}></canvas>
        <button id='button' onClick={closePhoto}>Close</button>
      </div>
    </div>

      <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest
       text-white uppercase bg-blue shadow-lg focus:outline-none hover:bg-gray-400 
       hover:shadow-none 
       ">
        Register
      </button>
      {/* <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Forgot password?</p> */}
    </form>
  </div>
</div>
    </>
  )
}
export default Reg