import { useDispatch } from 'react-redux';

import { logout } from '../../redux/userAuthentication/userAuthSlice';
import classes from './Header.module.css';

const Header = (props) => {
  const { isAuth: isUserAuthenticated } = props;
  const dispatch = useDispatch();

  const toggleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  const content = isUserAuthenticated && (
    <>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button type="button" onClick={toggleLogout}>
          Logout
        </button>
      </li>
    </>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{content}</ul>
      </nav>
    </header>
  );
};

export default Header;
