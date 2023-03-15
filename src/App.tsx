import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./scss/main.scss";
import About from "./pages/About";
import MyCV from "./pages/MyCV";
import CreateCV from "./pages/CreateCV";
import CV from "./pages/CV";

function App() {
	return (
		<div className="App">
			<header className="mainHader">
				<div className="mainHader__logo">
					<img src="#" alt="CV builder" />
				</div>
				<nav className="mainNav">
					<ul className="mainNav__ul">
						<li className="mainNav__li">
							<a className="mainNav__link" href="/create-cv">
								<button className="mainNav__button">New CV</button>
							</a>
						</li>
						<li className="mainNav__li">
							<a className="mainNav__link" href="/my-cv">
								<button className="mainNav__button">My CV</button>
							</a>
						</li>
						<li className="mainNav__li">
							<a className="mainNav__link" href="/about">
								<button className="mainNav__button">About</button>
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path="/create-cv" element={<CreateCV />} />
				<Route path="/about" element={<About />} />
				<Route path="/my-cv" element={<MyCV />} />
				<Route path="/my-cv/:cvId" element={<CV />} />
			</Routes>
		</div>
	);
}

export default App;
