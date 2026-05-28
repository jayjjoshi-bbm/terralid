import Header from './Header/Header'
import { AppSidebar } from './Sidebar'
import { SidebarProvider } from "@/components/ui/sidebar";
import Map from './Pages/Map';
import { Button } from './ui/button';

function Home() {
  return (
    <>
      <Header/>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar/>

          <main className="flex-1 p-6">
            <div className="flex justify-end mt-8">
              <Button>Switch to Charts</Button>
            </div>
            
            <Map/>

          </main>
        </div>
      </SidebarProvider>
      
    </>
  )
}

export default Home