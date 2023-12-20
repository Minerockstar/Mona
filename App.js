import './App.css';
import {FaReact, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import img1 from "./pngtree-business-portfolio-3d-character-illustration-png-image_10204176.png"

function Navbar() {
  return (
    <div>
     <div className='navbar_container'>
     <nav className='navbar'> 
     <h1><FaReact size={30} /></h1>
     <ul>
      <li>HOME</li>
      <li>ABOUT ME</li>
      <li>SKILLS</li>
      <li>RESUME</li>
      <li>PORTFOLIO</li>
      <li>CONTACT</li>
     </ul>
    <br/>
     </nav>
     </div>
     <div className='hello'>
      <h3>Welcom to my portfolio</h3>
      <h2>Hello, I'm John, Full Stack Developer</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium accusamus porro nulla iure natus atque aut cum.
         Provident quod natus dignissimos esse facilis dolorem molestiae commodi dolore! Animi, non.</p>
     </div>
     <div className='icons'>
      <ul><li>
     <FaInstagram />
     <FaYoutube  />
     <FaFacebook  /></li></ul>
     </div>
     <div className='img1'>
     <img src={img1} />
     </div>
    </div>
    
  );
}

export default Navbar;
