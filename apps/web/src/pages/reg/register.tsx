import React,{useRef, useEffect,useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import Joi from "joi-browser";
import { useRouter } from 'next/router';

const Reg = () => {

  const router = useRouter();
  const[user,setUser]= useState({
    eId:'',
    name:'',
    image:''
  })
  const [errors, setErrors] = useState({});
  const schema = {
    name: Joi.string().required().label("UserName"),
    image: Joi.string().required().label("image"),
  };

  const validateForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const result = Joi.validate(user,
      schema, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        error[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  const handeleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    console.log(name, value);
    let errorData:any = { ...errors };
    const errorMessage = validateProperty(e);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData:any = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errorData);
    console.log(name, value);
  }

  // const loginInTo = async (e: { preventDefault: () => void; }) =>{
  //   e.preventDefault();
  //   const {name,image,eId} = user
  //   if( name && image &&eId ){
  //   axios.post("http://127.0.0.1:3030/api/v1/Registr ", user)
  //   .then(res => 
  //        router.push('index')
   
  //   )
  //   }
  //   else {
  //     console.log("login Fail");
  //     alert("Hello\nlogin Fail?");
  //   }
    
  // }

  const validateProperty = (e: { target: any; }) => {
    const { name, value } = e.target;
    const obj = { [name]: value };
    const subSchema:any= { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };
  const clearState = () => {
    setUser({
      eId:"",
      name: "",
      image: "",
    });
  

}

//camera part
  const videpRef = useRef(null);
  const photoRef = useRef(null);

const [hasPhoto, setHasPhoto] = useState(false);
  
const getVideo = () =>{
  navigator.mediaDevices

        .getUserMedia({
          video: {width: 620, height: 300}
        })
        .then(stream =>{
          let video:any = videpRef.current;
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

  let video:any = videpRef.current;
  let photo:any =photoRef.current;

  photo.width = width;
  photo.height = height;

  let ctx = photo.getContext('2d');
  ctx.drawImage(video,0,0,width,height);
  
  setHasPhoto(true);
}

const closePhoto=() =>{
  let photo:any = photoRef.current;
  let ctx = photo.getContext('2d');
  ctx.clearReact( 0, 0,photo.width, photo.height);

  setHasPhoto(false);
  
 

}
useEffect(() => {
  getVideo();

},[videpRef])

  return (

    <>
     <div className=" grid place-items-center shadow-lg h-full mt-10" >
  <div className="p-10  bg-white shadow-lg w-9/10 sm:w-3/5 md:w-1/2 lg:w-5/12  shadow-blue-500/50">
    <h1 className="text-xl font-semibold">Welcome To Era InfoTech, 
    <span className="font-normal">Resister Please</span></h1>
    <form className="mt-4">
    <label  className="block text-xs font-semibold text-gray-600 uppercase">Employee Id</label>
      <input id="eId" type="eId" name="eId"  className="block w-full p-3 mt-2 text-gray-700
       bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
       value={user.name} onChange={handeleChange}
       required />
      {errors.eId  && (
              <div className=" text-red-600 italic text-sm alert alert-danger alert-dismissible d-flex align-items-center fade show">
                {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                {errors.eId}
                </div>
      )}
         
      <label  className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
      <input id="name" type="name" name="name"  className="block w-full p-3 mt-2 text-gray-700
       bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
       value={user.name} onChange={handeleChange}
       required />
      {errors.name  && (
              <div className=" text-red-600 italic text-sm alert alert-danger alert-dismissible d-flex align-items-center fade show">
                {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                {errors.name}
                </div>
      )}
         
       
     <label  className="block text-xs font-semibold text-gray-600 uppercase">Upload Picture</label>
  
     <div className='App'>
      <div id='camera'>
        <video ref={videpRef}></video>
        <button id='button' value={user.image}  onClick={takePhoto}>Snap</button>
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