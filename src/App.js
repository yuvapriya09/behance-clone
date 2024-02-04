import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="main overflow-hidden">

    <Header/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <BehanceList/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
