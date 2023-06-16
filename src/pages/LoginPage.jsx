import { LoginForm } from 'components/LoginForm';

export const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};
// ================================================

// початок утворення форми для логіну але краще перенести її
//  в компонент в логінформ ну а тут сама сторінка
// export const LoginPage = () => {
//   return <div>
//     <form>
//       <input type='text' name='login' />
//       <button type='submit' >Login</button>
//     </form>
//   </div>
  
// };