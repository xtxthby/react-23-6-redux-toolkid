import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';
// тут якщо юзер залогінився то покаже з право
// імя і кнопку
export const UserMenu = () => {
  const dispatch = useDispatch();
  // отримуємо із стейта значеня логіна або ні
  const login = useSelector(state => state.user.login);
  return (
    <div>
      {/* тут назва юзера */}
      {login}
      {/* тут кнопка для того щоб розлогінити за допомогою dispatch*/}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
