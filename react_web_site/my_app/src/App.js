import './App.css';
import Header from './components/header/Header';
import Offers from './components/offers/Offers';
import Rent from './components/rent/Rent';
import Services from './components/services/Services';
import TextContent from './components/textContent/TextContent';



function App() {

  return (
    <div>
      <Header/>
      <Offers/>
      <TextContent/>
      <Services/>
      <Rent/>
    </div>
  );
}

export default App;
