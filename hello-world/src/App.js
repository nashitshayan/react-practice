import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
function App() {
	return (
		<div className='App'>
			{/* <Greet name='john' />
			<Greet name='walker' />
			<Greet name='pams' /> */}
			{/* <Welcome /> */}
			<Counter />
		</div>
	);
}

export default App;
