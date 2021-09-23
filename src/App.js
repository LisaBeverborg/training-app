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
        </Switch>
      <Footer />
    </AuthProvider>
  </div>
  );
}

export default App;

