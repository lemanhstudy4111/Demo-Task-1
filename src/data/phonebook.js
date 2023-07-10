const mockData = [
	{
		name: "Arto Hellas",
		number: "04012345628",
		address: "New York No. 1 Lake Park",
	},
	{
		name: "Ada Lovelace",
		number: "39445323523",
		address: "London No. 1 Lake Park",
	},
	{
		name: "Dan Abramov",
		number: "12432343453",
		address: "Sydney No. 1 Lake Park",
	},
	{
		name: "Mary Poppendieck",
		number: "39236423122", //Format number before rendering?
		address: "Abu Dhabi No. 1 Lake Park",
	},
];

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		sorter: (a, b) => a.name.localeCompare(b.name),
	},
	{
		title: "Number",
		dataIndex: "number",
		key: "number",
		sorter: (a, b) => a.number - b.number,
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
		sorter: (a, b) => a.address.localeCompare(b.address),
	},
];

export { mockData, columns };
