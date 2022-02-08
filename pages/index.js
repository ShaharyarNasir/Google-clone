import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search =(e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col  items-center justify-between h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google clone by Shaharyar" />
        <link rel="icon" href="/https://yt3.ggpht.com/yti/APfAmoGnhtwlOWq2LdclK4-FtUFOa-roS5Bmvuj4uYRRdQ=s88-c-k-c0x00ffffff-no-rj-mo" />
      </Head> 

      {/* {Head} */} 
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* {left} */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* {Right} */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* [Icon] */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar url="https://yt3.ggpht.com/yti/APfAmoGnhtwlOWq2LdclK4-FtUFOa-roS5Bmvuj4uYRRdQ=s88-c-k-c0x00ffffff-no-rj-mo"/>

        </div>
      </header>

      {/* {Body} */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google logo" height={100} width={300}/>

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text"  className=" flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5 "/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I`m Feeling Lucky</button>
        </div>
      </form>

      {/* {Footer} */}
      <Footer />
    </div>
  );
}
