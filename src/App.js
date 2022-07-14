
import "./assets/css/header.css";
import "./assets/css/middle.css";
import "./assets/css/footer.css";
import "./assets/css/globalArticle.css";

import TestCode from "./components/page1/test";
import NewsList from "./backend/NewsList"
import Header from "./components/page1/Header";
import Middle from "./components/page1/Middle";
import Footer from "./components/page1/Footer";

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
