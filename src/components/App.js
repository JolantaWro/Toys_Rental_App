import "../App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import TopBar from "./TopBar";
import Home from "./Home";
import DonateToys from "./DonateToys";
import Rental from "./Rental";
import FAQ from "./FAQ";
import React from "react";
import FooterInfo from "./FooterInfo";
import HowItWorks from "./HowItWorks";
import AboutAs from "./AboutAs";
import Contact from "./Contact";
const { Header, Footer, Content } = Layout;

function App() {
	return (
		<>
			<Layout className='layout'>
				<Router>
					<Header className='topbar--background--color--main'>
						<TopBar />
					</Header>
					<Content>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/works' element={<HowItWorks />} />
							<Route path='/about' element={<AboutAs />} />
							<Route path='/donate' element={<DonateToys />} />
							<Route path='/rental' element={<Rental />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/faq' element={<FAQ />} />
						</Routes>
					</Content>
				</Router>
				<Footer>
					<FooterInfo />
				</Footer>
			</Layout>
		</>
	);
}

export default App;
