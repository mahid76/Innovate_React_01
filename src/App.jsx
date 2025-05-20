import About from "./componenets/About/About";
import Apps from "./componenets/Apps/Apps";
import Bannner from "./componenets/Banner/Bannner";
// import Contact from "./componenets/Contact/Contact";
import Customer from "./componenets/Customer/Customer";
import Features from "./componenets/Features/Features";
import Footer from "./componenets/Footer/Footer";
// import Hcontact from "./componenets/Hcontact/Hcontact";

import HeadCustomer from "./componenets/HeadCustomer/HeadCustomer";
import Header from "./componenets/Header/Header";
import Navbar from "./componenets/Navbar/Navbar";
import Platform from "./componenets/Platform/Platform";
import Pricing from "./componenets/Pricing/Pricing";
import Work from "./componenets/Work/Work";


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
