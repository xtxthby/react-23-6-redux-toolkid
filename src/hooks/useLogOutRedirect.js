import { useEffect } from 'react';
// для перенаправлення по навігації
import { useNavigate } from 'react-router-dom';
// як завжди ми отримуємо всі дані
import { useSelector } from 'react-redux';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  // те що є в стейті або пусто або логін
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    // якщо не залогінен то відправляємо '/login
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
    // ставимо залежність
  }, [isLoggedIn, navigate]);
};
