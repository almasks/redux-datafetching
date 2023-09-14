import './App.css';
import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './Products';
import Featured from './Featured';
import New from './New';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Profile from './Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './RequireAuth';
const LazyLoad=React.lazy(()=>import ('./components/About'))

function App() {
  return (
     <Provider store={store}>
        <div className="App">
        <AuthProvider>

          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<React.Suspense fallback="loading"><LazyLoad/></React.Suspense>}></Route>
            <Route path='order-summary' element={<OrderSummary/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
            <Route path='products' element={<Products/>}>
              <Route path='featured' element={<Featured/>}/>
              <Route path='new' element={<New/>}/>
            </Route>
            <Route path='users' element={<Users/>}>
              <Route path=':userId' element={<UserDetails/>}/>
              </Route>
              <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
              <Route path='login' element={<Login/>}></Route>
          </Routes>
          </AuthProvider>

        </div>
     </Provider>
  );
}

export default App;
