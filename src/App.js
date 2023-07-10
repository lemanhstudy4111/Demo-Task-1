import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { mockData, columns } from "./data/phonebook";
import { Table, Card } from "antd";
import gIcon from "./images/logo.svg";
import ggr from "./components/ggr-logo.jpeg";

function App() {
	const [theme, setTheme] = useState("light");
	const [collapsed, setCollapsed] = useState(true);
	const [logo, setLogo] = useState(gIcon);
	const toggleDark = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
		if (logo === gIcon) setLogo(ggr);
		else setLogo(gIcon);
	};

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
					dropdownEvent={() => dropdownClicked}
					logoSrc={logo}
				/>
			</div>
			<div style={{ display: "flex" }}>
				<Sidebar collapsed={collapsed} />
				<div className="main-content">
					<div className="table-container">
						<Card title="Phone Book" bordered={false} style={{ width: "100%" }}>
							<Table dataSource={mockData} columns={columns} />
						</Card>
					</div>
					{/* <div className="table-container">
						<Card title="Phone Book" bordered={false} style={{ width: "100%" }}>
							<Table dataSource={mockData} columns={columns} />
						</Card>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default App;
