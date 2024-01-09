import React from 'react'
import DropdownMenu from "../assets/Dropdown-navbar.png"
import MarketingIcon from "../assets/Marketing-navbar.png"
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Text, TextField, } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between h-[5vh] w-full align-middle p-2 border-b-2 border-gray-200">
                <div className="flex flex-row justify-center align-middle">
                    <Text my={"auto"} mx={"3"} size={"4"}>Payments</Text>
                    <div className='my-auto mx-2 text-sm flex flex-row align-middle'>
                        <AiOutlineQuestionCircle className='m-auto' />
                        <p className='ms-1'>
                            How it works
                        </p>
                    </div>
                </div>

                {/* Search bar */}
                <TextField.Root className='rounded-sm' variant='soft' size="2" style={{width: "350px"}}>
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input placeholder="Search features, tutorials, etc" />
                </TextField.Root>

                <div className="flex flex-row justify-center align-middle">
                    <img src={MarketingIcon} alt="" srcset="" className='mx-1' />
                    <img src={DropdownMenu} alt="" srcset="" className='ms-1 me-3' />
                </div>
            </div>
        </>
    )
}

export default Navbar