import './App.css';
import Header from "./Header"
import {BrowserRouter, Router, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <h1>better dinner test login and signup</h1>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/add">
                <AddProduct />
            </Route>
            <Route path="/update">
                <UpdateProduct />
            </Route>




        </BrowserRouter>

    </div>
  );
}

export default App;
