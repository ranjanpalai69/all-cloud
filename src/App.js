import logo from './logo.svg';
import './App.css';
import {Container, Navbar} from "react-bootstrap"
import NavigationBar from './Components/NavigationBar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Container fluid className="cont ">
      <NavigationBar/>
      <AllRoutes/>
  </Container>
  );
}

export default App;
