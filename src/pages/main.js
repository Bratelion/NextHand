import Header from "../components/header"
import Footer from "../components/footer"
import Body from "../components/body"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Body />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
