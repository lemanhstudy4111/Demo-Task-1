import { Switch, Button, Dropdown, Space } from "antd";
import { getItem } from "./Sidebar";
import { UserOutlined } from "@ant-design/icons";
import "./Button.css";

export function DarkButton({ style, eventChange }) {
	return (
		<>
			<Switch style={style} onChange={eventChange} />
		</>
	);
}
export function MenuButton({ eventChange, collapsed }) {
	return (
		<div className="sidebar-menu-collapse">
			<Button type="primary" onClick={eventChange}>
				{collapsed}
			</Button>
		</div>
	);
}
export function UserInfoButton({ dropdownClicked, itemClicked }) {
	const items = [getItem("Sign out", "out")];

	return (
		<Dropdown menu={{ items }}>
			<a href="_blank" onClick={dropdownClicked}>
				<Space>
					User Info
					<UserOutlined />
				</Space>
			</a>
		</Dropdown>
	);
}
