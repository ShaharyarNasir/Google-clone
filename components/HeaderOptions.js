import HeaderOption from "./HeaderOption";
import { 
    DotsVerticalIcon,
    MapIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import { NewspaperIcon } from "@heroicons/react/solid";

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            {/* left */}
            <div className="flex space-x-6 ">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="Images"/>
                <HeaderOption Icon={PlayIcon} title="Videos"/>
                <HeaderOption Icon={NewspaperIcon} title="News"/>
                <HeaderOption Icon={MapIcon} title="Maps"/>
                <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>

            {/* Rights */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    );
}

export default HeaderOptions;
