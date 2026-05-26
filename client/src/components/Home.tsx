import Header from './Header/Header'
import { AppSidebar } from './Sidebar'
import { SidebarProvider } from "@/components/ui/sidebar";

function Home() {
  return (
    <>
      <Header />
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar/>

          <main className="flex-1 p-6">
            Main content
          </main>
        </div>
      </SidebarProvider>
      
    </>
  )
}

export default Home