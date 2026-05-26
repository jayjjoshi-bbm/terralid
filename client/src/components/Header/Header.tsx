
import { Link } from "react-router-dom"
import {
 NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { Maximize2, Minimize2 } from 'lucide-react';

function Header() {

  const [isFullscreen, setIsFullscreen] = useState(false);

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
      <div className="flex justify-between h-[8vh] sticky top-0 w-full">

        <div className="p-2 text-sm font-semibold">
          TerraLID
        </div>

        <div className="">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/">Map</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/about">Explore</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/contact">References</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/contact">Instructions</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="p-2">
          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20}/>}
          </button>
        </div>

      </div>
    </>
      
  )
}

export default Header