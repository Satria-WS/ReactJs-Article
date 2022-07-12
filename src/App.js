import "./App.css";
import "./assets/css/header.css";
import "./assets/css/middle.css";
import "./assets/css/footer.css";
import "./assets/css/globalArticle.css";

import TestCode from "./components/test";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App globalWord">
      <Header />
      <Middle />
      <Footer />
      {/* <TestCode/> */}
    </div>
  );
}

export default App;
