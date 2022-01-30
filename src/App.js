import "./css/style.css";
import { Route } from 'react-router-dom';

// components/common/
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// components/main
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main} />
      <Footer />
    </div>
  );
}

export default App;