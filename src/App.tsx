
import "./App.css";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const token:any = localStorage.getItem('full_stack_app_user') || ""
  const isUser:any = token !== "" ? jwt_decode(token) : false;

  const routing:any = useRoutes(routes(isUser))


  return (
    routing
  );
}

const AppWrapper = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <App/>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default AppWrapper;
