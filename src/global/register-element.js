import {
	Button,
	Layout,
	LayoutContent,
	LayoutHeader,
	LayoutSider,
	Checkbox,
	CheckboxGroup,
	Tag,
	Card,
	Row,
	Col,
	Typography,
	List,
	Upload,
	Textarea,
	Input,
	PageHeader,
	Select,
	message,
	Popconfirm,
	Drawer,
	Menu,
	SubMenu,
	MenuItem,
	Tooltip,
	Timeline,
	TimelineItem,
	Table,
	Divider
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const components = [
	Button,
	Layout,
	LayoutContent,
	LayoutHeader,
	LayoutSider,
	Checkbox,
	CheckboxGroup,
	List,
	Tag,
	Card,
	Row,
	Col,
	Typography,
	Upload,
	Textarea,
	Input,
	PageHeader,
	Select,
	message,
	Popconfirm,
	Drawer,
	Menu,
	SubMenu,
	MenuItem,
	Tooltip,
	Timeline,
	TimelineItem,
	Table,
	Divider
]

export default function registerElement(app) {
	for (const el of components) {
		app.use(el)
	}
}
