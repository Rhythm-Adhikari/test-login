import './App.css';
import Header from "./Header"

import {BrowserRouter,Route} from "react-router-dom";
import
import login from './login';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <h1>better dinner test login and signup</h1>
            <Routes>
                <Route path="login" element={<login />}

            </Routes>



        </BrowserRouter>

    </div>
  );
}

export default App;
