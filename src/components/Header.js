import React from 'react'
import Image from 'next/image'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <header>
            
            {/* Top Header */}
            <div className="flex items-center bg-amazon_blue px-1">
                <div className="mt-3 flex-grow sm:flex-grow-0">
                    <Image 
                        src="https://links.papareact.com/f90" 
                        width="150"
                        height="40"
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className="hidden sm:flex items-center flex-grow">
                    <input className="h-9 w-6 px-4 flex-grow rounded-l-md focus:outline-none" />
                    <div className="px-2.5 py-1.5 bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded-r-md" >
                        <SearchIcon style={{fontSize:"20px"}}/>
                    </div>
                </div>
                <div className="flex items-center space-x-6 mx-4 text-white">
                    <div className="custom_link">
                        <p>Hi, Vaibhav</p>
                        <p className="font-bold">Accounts & Lists</p>
                    </div>
                    <div className="custom_link">
                        <p>Returns</p>
                        <p className="font-bold">& Orders</p>
                    </div>
                    <div className="custom_link flex items-center relative">
                        <span className="absolute top-0 right-0 sm:right-10 bg-yellow-500 w-4 text-black text-xs text-center rounded-full font-bold">
                            0
                        </span>
                        <ShoppingCartOutlinedIcon style={{fontSize:"36px"}}/>
                        <p className="font-bold hidden sm:inline">Basket</p>
                    </div>
                </div>

            </div>

            {/* Bottom Header */}
            <div className="flex items-center bg-amazon_blue-light space-x-2 px-2 py-1 text-xs text-white">
                <MenuIcon style={{fontSize:"20px"}} />
                <p className="custom_link text-xs">All</p>
                <p className="custom_link text-xs">Prime Video</p>
                <p className="custom_link text-xs">Amazon Pay</p>
                <p className="custom_link text-xs">Today's Deals</p>
                <p className="custom_link text-xs hidden md:inline">Electronics</p>
                <p className="custom_link text-xs hidden md:inline">Food & Grocery</p>
                <p className="custom_link text-xs hidden md:inline">Health & Personal</p>
                <p className="custom_link text-xs hidden md:inline">Home Improvement</p>
                <p className="custom_link text-xs hidden md:inline">Fashion</p>
            </div>

        </header>
    )
}

export default Header
