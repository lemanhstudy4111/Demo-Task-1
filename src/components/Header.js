import "./Button";
import "./Header.css";
import { MenuButton, DarkButton, UserInfoButton } from "./Button";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const styleButtonDark = {
	margin: "auto 5px",
};
const Header = ({
	collapseEvent,
	collapsed,
	darkEvent,
	dropdownEvent,
	dropItemEvent,
	logoSrc,
}) => {
	return (
		<header className="App-header">
			<div className="App-logo-container">
				<img id="logo" src={logoSrc} className="App-logo" alt="ggr logo" />
			</div>
			<div className={`button-menu-container ${collapsed ? "close" : "open"}`}>
				<MenuButton
					className="button-menu"
					eventChange={collapseEvent}
					collapsed={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				/>
			</div>
			<div className="right-menu-container">
				<DarkButton style={styleButtonDark} eventChange={darkEvent} />
				<div className="user-info-container">
					<UserInfoButton
						dropdownClicked={dropItemEvent}
						itemClicked={dropItemEvent}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
