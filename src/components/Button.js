import { Switch, Button } from "antd";
import "./Button.css";

export function DarkButton({ eventChange }) {
	return (
		<>
			<Switch onChange={eventChange} />
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
