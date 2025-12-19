import React from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";

function AsideGenres({ setGenre, genreList }) {
     const [isOpen, setIsOpen] = useState(false);
     const handleClose = () => setIsOpen(false);
    return (
        <>
            <div className="text-center">
                <Button className="absolute top-40 md:top-20 md:left-5 md:right-auto right-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 0 focus:outline-none"  onClick={() => setIsOpen(true)}>
                    Show Categories
                </Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white">
                <DrawerHeader title="Categories"  className="text-base font-semibold text-gray-500 uppercase" />
                <DrawerItems className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <Link to={`/`}>
                            <button onClick={() => setGenre({})} className="flex items-center p-2 text-gray-900 rounded-lg ">🔥 Trending movies</button>
                        </Link>
                        {genreList.map((item, index) => (
                            <Link key={index} to={`/`}>
                                <button onClick={() => setGenre({ ...item })} className="flex items-center p-2 text-gray-900 rounded-lg ">{item.name}</button>
                            </Link>
                        ))}
                    </ul>
                </DrawerItems>
            </Drawer>
        </>
    )
}
export default AsideGenres;