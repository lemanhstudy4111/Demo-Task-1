import { useState } from "react";
import {
	DashboardOutlined,
	UserOutlined,
	UploadOutlined,
	LineChartOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
const { Sider } = Layout;

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
		console.log("current", current, "click", e.key);
		setCurrent(e.key);
	};
	console.log(collapsed);
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<Menu
				onClick={handleButtonClick}
				items={item}
				mode="inline"
				defaultSelectedKeys={["dash"]}
				style={{
					height: "calc(100vh - 40px)",
				}}
			/>
		</Sider>
	);
};
export default Sidebar;
