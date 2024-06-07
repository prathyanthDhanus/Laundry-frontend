import React, { useRef } from 'react';
import axios from "../api/Axios";
import swal from 'sweetalert';


const Profile = () => {
  const inputRef = useRef();

  const handleSubmit = async () => {
    const userProfileData = {
      primaryAddress: inputRef.current.primaryAddress.value,
      primaryAddressLandMark: inputRef.current.primaryAddressLandMark.value,
      primaryPhoneNumber: inputRef.current.primaryPhoneNumber.value,
      secondaryAddress: inputRef.current.secondaryAddress.value,
      secondaryAddressLandMark: inputRef.current.secondaryAddressLandMark.value,
      secondaryPhoneNumber: inputRef.current.secondaryPhoneNumber.value,
    };

    try{
        const  response  = await axios.post('/api/user/profiles',userProfileData);
        console.log(response)

    }catch(error){

    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-200 to-cyan-200 h-screen'>

    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 ">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <form ref={inputRef}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="primaryAddress"
              >
              Primary Address
            </label>
            <input
              
              type="text"
              name="primaryAddress"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
              />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="primaryAddressLandMark"
              >
              Primary Address LandMark
            </label>
            <input
             
             type="text"
             name="primaryAddressLandMark"
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
             required
             />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="primaryPhoneNumber"
              >
              Primary Phone Number
            </label>
            <input
             
             type="number"
             name="primaryPhoneNumber"
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
             required
             />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="secondaryAddress"
              >
              Secondary Address
            </label>
            <input
              
              type="text"
              name="secondaryAddress"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="secondaryAddressLandMark"
              >
              Secondary Address LandMark
            </label>
            <input
             
             type="text"
             name="secondaryAddressLandMark"
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
             required
             />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="secondaryPhoneNumber"
              >
              Secondary Phone Number
            </label>
            <input
            
            type="number"
              name="secondaryPhoneNumber"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
              />
          </div>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
          >
          Save Changes
        </button>
      </form>
    </div>
            </div>
  );
};

export default Profile;