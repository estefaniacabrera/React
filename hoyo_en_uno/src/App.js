import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import AppEcommerce from './AppEcommerce';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={'HOYO EN UNO GOLF'} />
      <NavBar/>
      <AppEcommerce/>
    </div>
  );
}

export default App;
