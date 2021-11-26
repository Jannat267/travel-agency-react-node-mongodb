import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import AllOrder from './Pages/AllOrder/AllOrder';
import AddFlight from './Pages/AddFlight/AddFlight';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    
  <AuthProvider>
      
     <Router>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <PrivateRoute exact path="/manageOrders">
      <Header></Header>
        <AllOrder></AllOrder>
      </PrivateRoute>
     
      <Route exact path="/login">
      <Header></Header>
        <Login></Login>
      </Route>
      <PrivateRoute exact path="/addFlight">
      <Header></Header>
        <AddFlight></AddFlight>
      </PrivateRoute>
      <PrivateRoute exact path="/register/:myeventId">
      <Header></Header>
        <Register></Register>
      </PrivateRoute>
      <PrivateRoute exact path="/myOrders/:email">
      <Header></Header>
        <MyOrders></MyOrders>
      </PrivateRoute>
      <Route exact path="*">
      <Header></Header>
       <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  </AuthProvider>
  );
}

export default App;
