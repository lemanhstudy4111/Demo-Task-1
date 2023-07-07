import { useState } from "react";
import {
	DashboardOutlined,
	UserOutlined,
	UploadOutlined,
	LineChartOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const item = [
	getItem("dashboard", "dash", <DashboardOutlined />),
	getItem("users", "users", <UserOutlined />),
	getItem("posts", "posts", <UploadOutlined />),
	getItem("charts", "charts", <LineChartOutlined />),
];

const Sidebar = ({ collapsed }) => {
	const [current, setCurrent] = useState(item[0].key);
	const handleButtonClick = (e) => {
		console.log("click", e.key);
		setCurrent(e.key);
	};
	console.log(collapsed);
	return (
		<div className={`Sidebar ${collapsed ? "collapsed" : "not-collapsed"}`}>
			<div className="sidebar-top"></div>
			<div className="sidebar-items">
				<Menu
					onClick={handleButtonClick}
					className="menu-items"
					items={item}
					mode="inline"
					inlineCollapsed={collapsed}
				/>
			</div>
		</div>
	);
};
export default Sidebar;
