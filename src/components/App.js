import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./auth/dashboard/Dashboard";

import "../App.css";
import {
	Route,
	Routes,
	Navigate,
	BrowserRouter as Router,
} from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import TopBar from "./TopBar";
import Home from "./Home";
import DonateToys from "./DonateToys";
import DetailsProducts from "./DetailsProduct";
import Rental from "./Rental";
import FAQ from "./FAQ";
import React, { useState, useEffect } from "react";
import FooterInfo from "./FooterInfo";
import HowItWorks from "./HowItWorks";
import AboutAs from "./AboutAs";
import Contact from "./Contact";
const { Header, Footer, Content } = Layout;

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuthenticated = async () => {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/is-verify`, {
			// const res = await fetch("http://localhost:5000/auth/is-verify", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await res.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	return (
		<>
			<Layout className='layout'>
				<Router>
					<Header className='topbar__header'>
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
							<Route path='/product' element={<DetailsProducts />} />
							<Route
								exact
								path='/login'
								element={
									!isAuthenticated ? (
										<Login setAuth={setAuth} />
									) : (
										<Navigate to='/dashboard' />
									)
								}
							/>
							<Route
								exact
								path='/register'
								element={
									!isAuthenticated ? (
										<Register setAuth={setAuth} />
									) : (
										<Navigate to='/login' />
									)
								}
							/>
							<Route
								exact
								path='/dashboard'
								element={
									isAuthenticated ? (
										<Dashboard setAuth={setAuth} />
									) : (
										<Navigate to='/login' />
									)
								}
							/>
							
						</Routes>
					</Content>
				</Router>
				<Footer className='footer'>
					<FooterInfo />
				</Footer>
			</Layout>
		</>
	);
}

export default App;
