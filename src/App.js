
import "./assets/css/header.css";
import "./assets/css/middle.css";
import "./assets/css/footer.css";
import "./assets/css/globalArticle.css";

import TestCode from "./components/test";
import NewsList from "./backend/NewsList"
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Middle />
      <Footer />
      {/* <TestCode/> */}
      {/* <NewsList/> */}

    </div>
  );
}

export default App;
