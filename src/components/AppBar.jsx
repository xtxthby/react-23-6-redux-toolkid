import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  // якщо юзер не залогінен то в розмітці нижче
  // ми кажемо що показати
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      // тут стилі
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {/* якщо залогінен то відправляємо на сторінку "/dashboard"*/}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {/* або не показуємо або показуємо розмітку */}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
