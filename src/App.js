// import Counter from './components/Counter';
// import CounterClassBased from './components/CounterClassBased';
import { Fragment } from 'react';
import CounterReduxToolkit from './components/CounterReduxToolkit';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterReduxToolkit />
    </Fragment>
  );
}

export default App;
