import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import App from '@/App'

function Explore() {
  return (
    <App>
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
    </App>
  )
}

export default Explore