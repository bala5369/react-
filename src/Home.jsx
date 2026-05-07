import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate=useNavigate()
    return (
        <div>Home
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={()=>navigate("/contact")}>Enquiry/Customer Support</button>
        </div>
    )
}
export default Home