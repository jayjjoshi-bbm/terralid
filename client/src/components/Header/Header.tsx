
import { Link } from "react-router-dom"
import {
 NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { CircleUserRound, Maximize2, Minimize2, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  
  return (
    <>
      <div className="flex justify-between fixed w-full bg-[var(--background)] p-2">

        <div className="text-sm lg:text-lg 2xl:text-xl ">
          TerraLID
        </div>

        <div className="">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/" className="text-sm lg:text-sm 2xl:text-xl">Map</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/explore" className="text-sm lg:text-sm 2xl:text-xl">Explore</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/references" className="text-sm lg:text-sm 2xl:text-xl">References</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/instructions" className="text-sm lg:text-sm 2xl:text-xl">Instructions</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="p-1">
          <button onClick={toggleTheme} className="pr-2">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} 
          </button>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18}/>}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" ><CircleUserRound /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56">
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup
                >
                  <DropdownMenuRadioItem value="paypal">
                    Login with ORCID
                  </DropdownMenuRadioItem>
                  
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>



      </div>
    </>
      
  )
}

export default Header