import React,{useRef, useEffect,useState} from 'react'

function index() {

      const videpRef = useRef(null);
      const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);
      
    const getVideo = () =>{
      navigator.mediaDevices

            .getUserMedia({
              video: {width: 2000, height: 500}
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
      const height =width /(16/9);

      let video = videpRef.current;
      let photo =photoRef.current;

      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext('2d');
      ctx.drawImage(video,0,0,width,height);
      setHasPhoto(true);
    }

    useEffect(() => {
      getVideo();

    },[videpRef])

  return (
    <>
    <div id='App'>
      <div id='camera'>
        <video ref={videpRef}></video>
        <button id='button' onClick={takePhoto}>Snap</button>
      </div>
      <div id={ 'result' + (hasPhoto ? 'hasPhoto' :
      '')}>

        <canvas id='canvas' ref={photoRef}></canvas>
      </div>
    </div>
    
    
    
    </>


  );
}

export default index