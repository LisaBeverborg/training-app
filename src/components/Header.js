import { Link } from 'react-router-dom'
import classes from './Header.module.css';
import headerImg from '../assets/dumbbell.png'

function Header(){
    return (
    <header className={classes.header}>
        <img  src={headerImg} alt="Dumbbell logo"/>
        <div className={classes.title}>Let's train</div>
        <nav>
            <ul>
                <li>
                    <Link to='/training-app/'>Home</Link>
                </li>
                <li>
                    <Link to='/training-app/training'>Training</Link>
                </li>
                <li>
                    <Link to='/training-app/nutrition'>Nutrition</Link>
                </li>
                <li>
                    <Link to='/training-app/userprofile'>User Profile</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;