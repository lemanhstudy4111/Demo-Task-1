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

	return (
		<div className={theme}>
			<Header
				collapsed={collapsed}
				collapseEvent={toggleCollapse}
				darkEvent={toggleDark}
			/>
			<div style={{ display: "flex" }}>
				<Sidebar collapsed={collapsed} />
				<div className="main-content" style={{ flex: "1" }}></div>
			</div>
		</div>
	);
}

export default App;
