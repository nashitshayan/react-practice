import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Clock from './components/Clock';
function App() {
	return (
		<div className='App'>
			<Clock />
			{/* <LifecycleA /> */}

			{/* <Stylesheet />
			<Form /> */}
			{/* <NameList /> */}
			{/* <ParentComponent /> */}
			{/* <EventBind /> */}
			{/* <ClassClick /> */}
			{/* <FunctionClick /> */}
			{/* <Greet name='john' heroName='batman' />
			<Greet name='walker' heroName='supes' />
			<Greet name='pams' heroName='flash' />
			<Welcome />
			<Counter /> */}
		</div>
	);
}

export default App;
