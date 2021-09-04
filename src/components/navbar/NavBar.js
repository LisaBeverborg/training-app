import classes from './NavBar.module.css';
import headerImg from '../../assets/dumbbell.png'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function NavBar(){
    return (
    <header className={classes.NavBar}>
        <img  src={headerImg} alt="Dumbbell logo"/>
        <div className={classes.title}>Let's train</div>
        <MobileNavigation/>
        <Navigation/>
    </header>
    );
}

export default NavBar;