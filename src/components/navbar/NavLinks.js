import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NavLinks = (props) =>{
    const animateFrom = {opacity:0, y: -40}
    const animateTo = {opacity:1, y: 0}

    return (
        <ul>
            <motion.li
                initial = { animateFrom }
                animate = { animateTo }
                transition = {{ delay: 0.05 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/'>Home</Link>
            </motion.li>
            <motion.li  
                initial = { animateFrom }
                animate = { animateTo }
                transition = {{ delay: 0.10 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/training'>Training</Link>
            </motion.li>
            <motion.li  
                initial = { animateFrom }
                animate = { animateTo }
                transition = {{ delay: 0.20 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/nutrition'>Nutrition</Link>
            </motion.li>
            <motion.li  
                initial = { animateFrom }
                animate = { animateTo }
                transition = {{ delay: 0.30 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/userprofile'>User Profile</Link>
            </motion.li>
        </ul>
    )
}

export default NavLinks;