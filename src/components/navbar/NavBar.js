import classes from './NavBar.module.css';
import headerImg from '../../assets/dumbbell.png'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function NavBar(){
    return (    
    <header className={classes.NavBar}>
    <img  className={classes.logo} src={headerImg} alt="Dumbbell logo"/>
        <h1 className={classes.title}>Let's train</h1>
        <MobileNavigation/>
        <Navigation/>
    </header>
    );
}

export default NavBar;