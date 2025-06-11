import About from "./components/About/About";
import Apps from "./components/Apps/Apps";
import Bannner from "./components/Banner/Bannner";
// import Contact from "./components/Contact/Contact";
import Customer from "./components/Customer/Customer";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
// import Hcontact from "./components/Hcontact/Hcontact";

import HeadCustomer from "./components/HeadCustomer/HeadCustomer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Platform from "./components/Platform/Platform";
import Pricing from "./components/Pricing/Pricing";
import Work from "./components/Work/Work";

function App() {
	return (
		<>
			<Header>
				<Navbar></Navbar>
				<Bannner></Bannner>
			</Header>
			<Platform></Platform>
			<Features></Features>
			<Apps></Apps>
			<Work></Work>
			<HeadCustomer>
				<Customer></Customer>
			</HeadCustomer>
			<Pricing></Pricing>
			<About></About>
			<Footer></Footer>
		</>
	);
}

export default App;
