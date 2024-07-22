import './App.css';
import ButtomAppBar from "./components/Appbar/Appbar"
import Card from './components/Card/Card';
import data from './data.json';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
    <ButtomAppBar/>
    {data.map((city: City) => (
        <div key={city.id}>
          <Typography variant="h4" gutterBottom>
            {city.name}
          </Typography>
          {city.tours.map((tour,index) => (
            <Card  tour={tour} key={index} />
          ))}
        </div>
      ))}
     
    </div>
  );
}

export default App;
