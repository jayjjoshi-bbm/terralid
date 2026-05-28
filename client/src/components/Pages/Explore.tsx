import { ChevronDown } from 'lucide-react'
import Header from '../Header/Header'
import { AppSidebar } from '../Sidebar'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { SidebarProvider } from '../ui/sidebar'

function Explore() {
  return (
    <>
      <Header/>

      <SidebarProvider>
          
        <div className="flex min-h-screen w-full">
          
          <AppSidebar/>

          <main className="flex-1 p-6">
            <div className='flex justify-end mt-6 gap-2'>
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Upload Data <ChevronDown  /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Upload Directly
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Upload Via Form
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="">
                <Button>Download</Button>
              </div>
            </div>
          </main>

        </div>
        
      </SidebarProvider>
    </>
  )
}

export default Explore