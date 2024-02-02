import React from 'react'



const Navbar = () => {
  return (
    <div class = 'navbar'>
        <div>
            <img src="./images/logo.png" alt="" />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button>Appointment</button>
        </div>
    </div>
  )
}

export default Navbar