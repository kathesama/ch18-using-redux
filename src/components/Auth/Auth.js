import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';

import { login } from '../../redux/userAuthentication/userAuthSlice';

const Auth = () => {
  const dispatch = useDispatch();

  const toggleLogin = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={toggleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
