import { useEffect, useState } from "react";
import { DarkButton } from "./components/Button";
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
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	//why doesn't it change both the header and the sidebar menu when toggle dark mode?

	const toggleCollapse = () => setCollapsed(!collapsed);

	return (
		<div className={theme}>
			<div className="header-container">
				<Header
					collapsed={collapsed}
					collapseEvent={toggleCollapse}
					darkEvent={toggleDark}
				/>
			</div>
			<div>
				<Sidebar collapsed={collapsed} />
			</div>
		</div>
	);
}

export default App;

{
	/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
  Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */
}
