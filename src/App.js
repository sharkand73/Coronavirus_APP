import './App.css';
import MainContainer from './containers/MainContainer';

function App() {

  const [data, setData] = useState();

  const getData = function(){
    fetch("https://api.coronavirus.data.gov.uk/v1/data")
     .then(results => results.json() )
     .then(data => {setData(data.data)})
 };

  useEffect(() => {getData()}, []);

  return (
    <MainContainer data={data} />
  );
}

export default App;
