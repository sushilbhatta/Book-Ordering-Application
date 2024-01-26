import Nav from "./Nav";
import "../public/css/main.css";
import Footer from "./Footer";
import Intro from "./Intro";
import RecommandBook from "./RecommandBook";
import StrongBook from "./StrongBook";
import "./booksShared.css";
function HomePage() {
  return (
    <>
      <Nav></Nav>
      <main>
        <Intro></Intro>
        <RecommandBook bookTitle='Recommanded Books'></RecommandBook>
        <StrongBook bookTitle='Strong Books'></StrongBook>
      </main>
      <Footer></Footer>
    </>
  );
}
export default HomePage;
