import React from 'react'
import NishyanDP from "../assets/Nishyan-dp.png"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
// import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
// import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { BsCursorFill } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { VscHome } from "react-icons/vsc";
import { MdOutlineCampaign, MdOutlineContentPaste, MdOutlinePayment } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { IoCellularSharp, IoColorPaletteOutline, IoGridOutline } from "react-icons/io5";
import WalletIcon from "../assets/Wallet-icon.png"


const Sidebar = () => {
    return (
        <>
            <div className='w-64 h-[100vh] flex flex-col justify-between text-white bg-slate-900'>
                <div className="flex flex-col justify-center align-middle">
                <div className="flex flex-row align-middle justify-between p-2">
                    <div className="flex flex-row">
                        <img src={NishyanDP} alt="" srcset="" className='m-2' />
                        <div className="flex flex-col m-2">
                            <strong>Nishyan</strong>
                            <a href='' className='text-gray-300 underline underline-offset-4'>Visit Store</a>
                        </div>
                    </div>
                    <div className="flex flex-col m-2 justify-center align-middle">
                        <ExpandMoreOutlinedIcon />
                    </div>
                </div>

                {/* Navbar options */}
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <VscHome size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Home</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <MdOutlineContentPaste size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Orders</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <IoGridOutline size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Products</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <FiTruck size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Delivery</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <MdOutlineCampaign size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Marketing</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <IoCellularSharp size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Analytics</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <MdOutlinePayment size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Payments</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <BsCursorFill size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Tools</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <CiDiscount1 size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Discounts</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <GoPeople className='ms-3' size={"20"}/>
                    <p className="text-gray-300 ms-2">Tools</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <IoColorPaletteOutline size={"20"} className='ms-3'/>
                    <p className="text-gray-300 ms-2">Appearance</p>
                </div>
                <div className="flex flex-row m-3 w-[100%] align-middle">
                    <HiOutlineLightningBolt size={"20"} className='ms-3 text-gray-300'/>
                    <p className="text-gray-300 ms-2">Plugins</p>
                </div>
                </div>

                {/* Available credits section */}
                <div className="bg-slate-700 flex flex-row m-4 rounded-lg">
                    <div className="flex flex-col m-2 justify-center align-middle">
                        <img src={WalletIcon} alt="" srcset="" />
                    </div>
                    <div className="flex flex-col m-2 justify-center align-middle">
                        <p className='text-gray-400'>Available credits</p>
                        <strong className='text-gray-200'>222.10</strong>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar