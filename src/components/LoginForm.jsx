// для того щоб задіспатчити
import { useDispatch } from 'react-redux';
// useNavigate  перенаправляє на другу сторінку
// наприклад після того як залогінилися
import { useNavigate } from 'react-router-dom';
// тут беремо екшин logIn із ../redux/userSlice
import { logIn } from '../redux/userSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // дивимося відправку 
    console.log(e.currentTarget.elements.login.value);
    const form = e.currentTarget;
    // з юзедіспатча ми можемо отримати все що нам потрібно
    // з любого файла і папки
    dispatch(logIn(form.elements.login.value));
    // сбрасуэмо форму
    form.reset();
    // далі кажемо куди перенаправляємо через Арр
    // на яку сторінку
    navigate('/dashboard', { replace: true });
  };
  // тут розмітка форми
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
