import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';
import { Route } from 'react-router-dom';
import MealsDetailsPage from './MealsDetails';
import Header from './Header/header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route
        path="/"
        element={
          <div className="App">
              <Header/>
            <Home />
          </div>}/>

          <Route
        path="category/:strCategory"
        element={
          <div>
            <Header/>
            <Home2 />
          </div>
        }
      />
       {/* <Route
        path="/"
        element={
          <div className="App">
            <Header/>
            <Home />
          </div>}/> */}

          <Route
        path="meals/:idMeal"
        element={
          <div>
            <Header/>
            <MealsDetailsPage />
          </div>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
