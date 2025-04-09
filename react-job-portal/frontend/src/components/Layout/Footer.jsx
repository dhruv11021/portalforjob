import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; .</div>
<div>
  <Link to={'https://github.com/dhruv11021'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.com/in/dhruv-kumar-a32346251/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
 
</div>
      
    </footer>
  )
}

export default Footer