import React from 'react';
import { ImWhatsapp } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { CgFacebook } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";



export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright:
        <a className="text-white" >Laundry App</a>
      </div>
      <div className="text-center p-4">
  <ul className="list-none flex justify-center space-x-2">
    <li className="mr-3">
      <a className="text-neutral-700 dark:text-neutral-200 " href="#!"><ImWhatsapp className=' w-8 h-8 '/></a>
    </li>
    <li className="mr-3">
      <a className="text-neutral-700 dark:text-neutral-200 w-8 h-8" href="#!"><GrInstagram className=' w-8 h-8'/></a>
    </li>
    <li className="mr-3">
      <a className="text-neutral-700 dark:text-neutral-200 w-8 h-8" href="#!"><CgFacebook className=' w-10 h-9'/></a>
    </li>
    <li>
      <a className="text-neutral-700 dark:text-neutral-200 w-8 h-8" href="#!"><MdOutlineMailOutline className=' w-10 h-9' /></a>
    </li>
  </ul>
</div>
      <div className="p-4 text-center bg-black bg-opacity-20">
        <p className="text-white">Ph:+91 9998887770</p>
        <p className="text-white">E-mail : laundry@gmail.com</p><br/>
        <p className="text-white">Unit No. 114 & 115 Charm wood Plaza,<br/> Charm wood Village, Eros Garden, <br/>Calicut city, Kerala - 670009, India</p>
      </div>
    </footer>
  );
}