import Logo from "./Logo";
import Location from "./Location"
import SearchBar from "./SearchBar";
import AdButton from "./AdButton";
import Buttons from "./Buttons";

const Navbar = () => {
    return (
      
      <header className = "w-full">
      <nav className="max-w-[1540px] mx-auto flex justify-between items-center
      sm:px-10 px-2 py-3">
    <Logo />
    <div className="ml-4 flex space-x-2">
    <div className="searchbar">
    <Location />
    </div>
    </div>
    <div className="ml-4 flex space-x-4"></div>
    <div className="searchbar">
    <SearchBar />
    </div>
    <div className="ml-4 flex space-x-2">
    <AdButton />
    </div>
    <div className="ml-8 flex space-x-4">
    <div className="searchbar">
    <Buttons 
    svgPath="icon.svg" />
    </div>
    <div className="searchbar">
    <Buttons 
    svgPath="icon1.svg" />
    </div>
    <div className="searchbar">
    <Buttons 
    svgPath="icon2.svg" />
    </div>
    </div>
    <div className="ml-2 flex space-x-4">
    <div className="phone_display">
      <Buttons
      svgPath="seach-icon.svg" />
    </div>
    <div className="phone_display">
      <Buttons
      svgPath="hamburger-icon.svg" />
    </div>
    </div>
    </nav>
    <hr />
  </header>
  
  
    )
}

export default Navbar;