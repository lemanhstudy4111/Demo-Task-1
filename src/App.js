import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
	const [theme, setTheme] = useState("light");
	const [collapsed, setCollapsed] = useState(true);
	const toggleDark = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	const toggleCollapse = () => setCollapsed(!collapsed);

	const dropdownClicked = (e) => {
		e.preventDefault();
		console.log("click dropdown", e);
	};
	const dropdownItemClicked = (e) => {
		console.log("clicked on menu item", e);
	};

	return (
		<div className={theme}>
			<div className="header-container">
				<Header
					collapsed={collapsed}
					collapseEvent={toggleCollapse}
					darkEvent={toggleDark}
					dropItemEvent={dropdownItemClicked}
					dropdownEvent={dropdownClicked}
				/>
			</div>
			<div style={{ display: "flex" }}>
				<Sidebar collapsed={collapsed} />
				<div className="main-content" style={{ flex: "1" }}></div>
			</div>
		</div>
	);
}

export default App;
