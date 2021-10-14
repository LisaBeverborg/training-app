import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import TrainingPage from './pages/Training';
import NutritionPage from './pages/Nutrition';
import UserProfilePage from './pages/UserProfile';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import './index.css';
import Signup from './components/signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/login';
import Logout from './components/logout';
import ForgotPassword from './components/forgotPassword';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
  <div>
    <AuthProvider>
      <NavBar />
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route path='/training'><TrainingPage /></Route>
          <Route path='/nutrition'><NutritionPage /></Route>
          <Route path='/userprofile'><UserProfilePage /></Route>
          <Route path='/signup' ><Signup /></Route>
          <Route path='/login' ><Login /></Route>
          <Route path='/logout' ><Logout /></Route>
          <Route path='/forgot-password' ><ForgotPassword /></Route>
        </Switch>
      <Footer />
    </AuthProvider>
  </div>
  );
}

export default App;

