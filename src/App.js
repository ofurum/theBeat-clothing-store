
// import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/homepage/hompage.pages'
import ShowProduct from '../src/components/ShowProduct/showProduct.component'
import MenPage from '../src/pages/Menpage/men.page.component'
import WomenPage from '../src/pages/womenPage/women.page.component'
import ClothesPage from '../src/pages/ClothesPage/clothes.page'
import AccessoriesPage from '../src/pages/Accessories/accessories.page'
import SignupPage from './pages/Signup/signup.page'
import LoginPage from './pages/login/login.page'
import CartPage from '../src/pages/Cartpage/Cart.page'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/men" component={MenPage} />
        <Route path="/women" component={WomenPage} />
        <Route path="/clothes" component={ClothesPage} />
        <Route path="/accessories" component={AccessoriesPage} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route path="/logIn" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        <Route path = '/cart' component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
