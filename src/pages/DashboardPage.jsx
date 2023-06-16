import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
// сторінка поки яка є 
// де ми викликаємо функцію на хуках
// яка якщо людина розлогінелась (ьоже підписка скінчилась)
//  перенаправить теж кудить
export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard Page</div>;
};
