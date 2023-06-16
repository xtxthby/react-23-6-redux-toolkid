// import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar';

// export const Layout = () => {
//   return (
//     <div>
//       <AppBar />
//       <Outlet />
//     </div>
//   );
// };




// приклад з інкрементом і декриментом
// ===============================================

// useSelector для отримання
// useDispatch для передачі



// // так як усе у нас обгорнуте провайдером із редакса
// //  то { useSelector, useDispatch } можуть витягувати що завгодно
// import { useSelector, useDispatch } from "react-redux";
// // тепер воно лежить не store
// // import { increment, decrement } from "../redux/store";
// import { increment, decrement } from "../redux/myValue/slice";

// export const Layout = () => {
//   // тут функція для відправки
//   const dispatch = useDispatch();
//   // тут передаємо функцію для виборки де вона отримує
//   // увесь стейт редакса і повертаємо той кусок який
//   // необхідно  state.myValue
//   // тобіш useSelector потрібен щоб отримати кусочок стейта
//   const value = useSelector(state => state.myValue);
//   // дивимся в локалхості 3000 там буде видно 10 як стартова
//   return <div>{value}
//     {/* // дві кнопки де треба екшин з store.js для dispatch()
//     і при передачі можемо збільшити на 100*/}
//     <button onClick={() => dispatch(increment(100))}>Increment</button>
//     <button onClick={() => dispatch(decrement(50))}>Decrement</button>
//   </div>
// };

// ==========================================================

// import { Link, Outlet } from 'react-router-dom'


// export const Layout = () => {
//   return (
//     <div>
//       <nav>
//         <Link to='/login'>Log in</Link>
//       </nav>
//       <Outlet></Outlet>
//     </div>
//   )
// }



// =============================================

// додаємо Арр вар де навігація уходить туди


import { Outlet } from 'react-router-dom'
import { AppBar } from './AppBar'


export const Layout = () => {
  return (
    <div>
      <AppBar/>
      <Outlet/>
    </div>
  )
}


