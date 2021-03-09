
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import "assets/scss/style.scss"
import LandingPage from 'pages/LandingPage'
import DetailPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'
import Example from 'pages/Example'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
