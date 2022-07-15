import "./assets/css/header.css";
import "./assets/css/middle.css";
import "./assets/css/footer.css";
import "./assets/css/globalArticle.css";
import "./assets/css/Page2.css";

import TestCode from "./components/page1/test";
import NewsList from "./backend/NewsList";
import Header from "./components/page1/Header";
import Middle from "./components/page1/Middle";
import Footer from "./components/page1/Footer";

import Page2 from "./components/page2/Page2";

function App() {
  return (
    <div className="">
      <Header />
      <Middle />
      <Footer />
      {/* <TestCode/> */}
      {/* <NewsList/> */}
      <Page2 />
    </div>
  );
}

export default App;
