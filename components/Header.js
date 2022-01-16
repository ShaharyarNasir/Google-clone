import { XIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const  search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                alt="Google logo"
                height={40} 
                width={120} 
                onClick={() => router.push("/")}
                className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none"/>
                    <XIcon className="h-7 sm:mr-3
                    text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")}/>
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url="https://yt3.ggpht.com/yti/APfAmoGnhtwlOWq2LdclK4-FtUFOa-roS5Bmvuj4uYRRdQ=s88-c-k-c0x00ffffff-no-rj-mo" className="ml-auto"/>
            </div>


            {/* HeaderOptions */}
            <HeaderOptions />

        </header>
    )
}

export default Header;
