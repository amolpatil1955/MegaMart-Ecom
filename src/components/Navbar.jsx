import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import CategoryBtn from './CategoryBtn';
import Prodcut from '../pages/Prodcut';
import Login from '../pages/Login'
import Sliders from './Slider';
import Footer from '../pages/Footer'
import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
import AdSection from './AdSection';


const Navbar = () => {
  const { cartItems } = useCart(); // ✅ get addToCart function


  return (
    <>
    <div className=' p-2 flex justify-between w-full items-center sticky top-0 bg-white z-50  '>

           <div className='h-13  w-56 flex bg-white justify-between items-center px-5 py-3  '>
                <div className='flex items-center w-25 h-full  justify-between  py-4'>
                <p className='text-2xl p-2 text-[#4E97D1] m-2 bg-[#f3f9fb]'><RiMenu2Fill/></p>
                <h2 className='md:text-2xl text-[#4E97D1] font-bold font-Poppins '>MegaMart</h2>
                </div>
           </div> 

        <div className='flex  justify-center items-center  '>

            <div className='  h-10 w-auto bg-[#f3f9fb] rounded-[7px]  items-center hidden md:flex '>
                <p className='text-2xl p-2  text-[#4E97D1]'><IoSearch/></p>
                <input type="text" placeholder='Search for products, brands and more' className=' w-76 p-2 outline-none '/>
                <p className='text-2xl p-2  text-[#4E97D1]'><RiMenuUnfoldLine/></p>
            </div>
            
             <div className='h-10 w-auto bg-white mx-1 relative cursor-pointer flex items-center '>
                <p className='text-2xl p-1  text-[#4E97D1]'><IoCartOutline/></p>
                <Link to={"/cart"} className='text-md p-1  text-[#4E97D1]'>Cart</Link>
                 <p className='absolute -top-1.5 right-10 bg-[#4E97D1] rounded-3xl h-4 justify-center flex items-center w-4  text-white  font-bold text-[10px]' >{cartItems.length}</p>
             </div>

            <div className='h-9 mx-1 w-auto p-2 cursor-pointer  rounded-[5px]  flex items-center '>
                <h2 className='text-md p-1  text-white'><Login/></h2>
            </div>    
       </div>
     </div>  
     <Sliders/>
     <CategoryBtn/>
     <Prodcut/> 
     <AdSection/> 
     <Footer/>       
   </>
  )
}

export default Navbar