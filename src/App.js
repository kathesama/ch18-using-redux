import { useSelector } from 'react-redux';

import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const isUserAuthenticated = useSelector((state) => state.userAuthentication.isUserAuthenticated);

  return (
    <>
      <Header isAuth={isUserAuthenticated} />
      {isUserAuthenticated && <UserProfile />}
      {isUserAuthenticated && <Counter />}
      {!isUserAuthenticated && <Auth />}
    </>
  );
}

export default App;
