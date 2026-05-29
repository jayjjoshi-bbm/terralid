import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t bg-background">

      <div className="flex justify-end gap-4 mx-4 py-4 text-sm text-muted-foreground">

        <p>© 2026 TerraLID</p>
  
        <Link to="/resources" className="text-sm ">Resources</Link>  
    
        <Link to="/resources" className="text-sm ">About</Link>  
    
        <Link to="/resources" className="text-sm ">News</Link>  
    
        <Link to="/resources" className="text-sm ">Legel Notice & Privacy</Link>  
    
        <Link to="/resources" className="text-sm ">Disclaimer</Link>  
       
      </div>

    </footer>
  )
}

export default Footer