import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import TrainingPage from './pages/Training';
import NutritionPage from './pages/Nutrition';
import UserProfilePage from './pages/UserProfile';

function App() {
  return (
  <div>
    <Switch>
    <Route path='/training-app/' exact><HomePage /></Route>
    <Route path='/training-app/training'><TrainingPage /></Route>
    <Route path='/training-app/nutrition'><NutritionPage /></Route>
    <Route path='/training-app/userprofile'><UserProfilePage /></Route>
    </Switch>
  </div>
  );
}

export default App;

