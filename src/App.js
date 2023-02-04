
import './App.css';
import Cart from './Cart/Cart';
import Dishes from './Dishes/Dishes';
import Filter from './Filter/Filter';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <Filter/>
        <Cart/>
      </div>
      <div className='block'>
     <Dishes/>
     </div>
    </div>
  );
}

export default App;
