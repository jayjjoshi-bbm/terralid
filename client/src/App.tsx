import './App.css'
import 'leaflet/dist/leaflet.css';

import Home from './components/Home'
import { SidebarProvider } from './components/ui/sidebar';
import Footer from './components/Footer/Footer';
import { AppSidebar } from './components/Sidebar';
import Header from './components/Header/Header';


interface MainLayoutProps {
  children: React.ReactNode
}

function App({ children }: MainLayoutProps) {
  


  return (
    <>
      {/* Header */}
      <Header />

      <SidebarProvider className='-mb-14'>
        <div className="min-h-screen flex flex-col">
          
          {/* Content Area */}
          <div className="flex flex-1 w-full">
            <AppSidebar />

          </div>
        
        </div>

        <main className="flex-1 w-full mt-12 p-4">
            {children}
         </main>
      </SidebarProvider>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
