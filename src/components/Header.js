import ggr from "./ggr-logo.jpeg";
import "./Button";
import "./Header.css";
import { MenuButton, DarkButton } from "./Button";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const Header = ({ collapseEvent, collapsed, darkEvent }) => {
	return (
		<header className="App-header">
			<div className="App-logo-container">
				<img src={ggr} className="App-logo" alt="ggr logo" />
			</div>
			<div className={`button-menu-container ${collapsed ? "close" : "open"}`}>
				<MenuButton
					className="button-menu"
					eventChange={collapseEvent}
					collapsed={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
			</div>
			<div className="button-dark-container">
				<DarkButton className="button-dark" eventChange={darkEvent} />
			</div>
		</header>
	);
};

export default Header;
