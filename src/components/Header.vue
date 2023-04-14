<template>
	<!-- <a-layout id="components-layout-demo-responsive" >#b0cff5 -->
	<a-layout-header class="header">
		<div class="ZHeader">
			<div class="menu-btn trigger" style="cursor: pointer" @click="showDrawer">
				<svg
					t="1666693980148"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="2548"
					width="16"
					height="16"
				>
					<path
						d="M853.333333 938.666667h-213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333334v-213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h213.333333c46.933333 0 85.333333 38.4 85.333334 85.333333v213.333333c0 46.933333-38.4 85.333333-85.333334 85.333334z m0-469.333334h-213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V170.666667c0-46.933333 38.4-85.333333 85.333333-85.333334h213.333333c46.933333 0 85.333333 38.4 85.333334 85.333334v213.333333c0 46.933333-38.4 85.333333-85.333334 85.333333zM384 938.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334v-213.333333c0-46.933333 38.4-85.333333 85.333334-85.333333h213.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v213.333333c0 46.933333-38.4 85.333333-85.333333 85.333334z m0-469.333334H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V170.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h213.333333c46.933333 0 85.333333 38.4 85.333333 85.333334v213.333333c0 46.933333-38.4 85.333333-85.333333 85.333333z"
						p-id="2549"
					></path>
				</svg>
			</div>
			<div class="loginbtn-container">
				<router-link to="/login" class="loginbtn">
					<icon :style="{ color: 'hotpink' }">
						<template #component>
							<svg
								t="1668775813897"
								class="icon"
								width="2em"
								height="2em"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3764"
							>
								<path
									d="M512 161.684211c53.517474 0 102.103579 11.479579 143.737263 32.417684A135.194947 135.194947 0 0 1 781.473684 107.789474c74.293895 0 134.736842 60.442947 134.736842 134.736842a134.925474 134.925474 0 0 1-117.463579 133.632c4.338526 17.515789 7.087158 35.947789 8.488421 54.999579H700.631579v53.894737h-215.578947V163.139368c8.892632-0.673684 17.758316-1.455158 26.947368-1.455157zM107.789474 242.526316c0 68.742737 51.685053 124.820211 118.191158 133.066105 20.587789-80.195368 71.087158-145.246316 141.985684-181.409684A134.521263 134.521263 0 0 0 242.526316 107.789474a134.736842 134.736842 0 0 0-134.736842 134.736842z m188.631579 404.210526a80.572632 80.572632 0 0 0-75.991579 54.245053c8.946526 47.481263 29.103158 79.36 50.256842 102.858105 8.138105 2.775579 16.680421 4.581053 25.734737 4.581053a80.842105 80.842105 0 1 0 0-161.684211z m350.315789 80.842105a80.842105 80.842105 0 0 0 80.842105 80.842106c9.054316 0 17.596632-1.805474 25.734737-4.581053 21.153684-23.498105 41.337263-55.403789 50.256842-102.858105A80.572632 80.572632 0 0 0 727.578947 646.736842a80.842105 80.842105 0 0 0-80.842105 80.842105z"
									fill="#FF8787"
									p-id="3765"
								></path>
								<path
									d="M512 808.421053c-44.570947 0-80.842105-36.271158-80.842105-80.842106v-26.947368h53.894737v26.947368a26.974316 26.974316 0 0 0 53.894736 0v-26.947368h53.894737v26.947368c0 44.570947-36.271158 80.842105-80.842105 80.842106z m-107.789474-269.473685c-14.874947 0-28.860632 12.072421-28.860631 53.894737s13.985684 53.894737 28.860631 53.894737 28.860632-12.072421 28.860632-53.894737-13.985684-53.894737-28.860632-53.894737z m215.578948 0c-14.901895 0-28.860632 12.072421-28.860632 53.894737s13.985684 53.894737 28.860632 53.894737 28.860632-12.072421 28.860631-53.894737-13.958737-53.894737-28.860631-53.894737z m26.947368-107.789473H377.263158v-114.122106c-38.265263 36.783158-53.894737 89.896421-53.894737 141.069474v26.947369h377.263158v-26.947369c0-51.173053-15.629474-104.313263-53.894737-141.069474V431.157895z m269.473684 80.842105v94.315789a94.423579 94.423579 0 0 1-112.181894 92.645053c-11.075368 61.844211-41.229474 97.630316-68.20379 122.691369C685.109895 868.729263 596.264421 916.210526 512 916.210526c-84.264421 0-173.136842-47.481263-223.824842-94.558315-26.974316-25.061053-57.128421-60.847158-68.230737-122.718316A94.423579 94.423579 0 0 1 107.789474 606.315789V512a80.949895 80.949895 0 0 1 108.43621-75.991579c1.266526-20.830316 4.311579-40.825263 9.027369-59.850105A134.925474 134.925474 0 0 1 107.789474 242.526316c0-74.293895 60.442947-134.736842 134.736842-134.736842a135.194947 135.194947 0 0 1 125.736421 86.312421C409.896421 173.163789 458.482526 161.684211 512 161.684211c9.189053 0 18.054737 0.781474 26.947368 1.455157v53.679158A322.290526 322.290526 0 0 0 512 215.578947c-167.531789 0-242.526316 121.802105-242.526316 242.526316v188.631579c0 74.024421 27.998316 109.999158 55.40379 135.437474C366.430316 820.762947 442.718316 862.315789 512 862.315789c69.254737 0 145.542737-41.552842 187.122526-80.141473C726.528 756.736 754.526316 720.734316 754.526316 646.736842v-188.631579c0-99.166316-50.741895-198.925474-161.684211-231.424V171.358316c22.312421 5.443368 43.412211 12.934737 62.895158 22.743579A135.194947 135.194947 0 0 1 781.473684 107.789474c74.293895 0 134.736842 60.442947 134.736842 134.736842a134.925474 134.925474 0 0 1-117.463579 133.632c4.715789 19.051789 7.760842 39.019789 9.027369 59.850105A80.949895 80.949895 0 0 1 916.210526 512zM215.578947 512c0-14.848-12.099368-26.947368-26.947368-26.947368s-26.947368 12.099368-26.947368 26.947368v94.315789a40.474947 40.474947 0 0 0 53.894736 38.130527V512z m28.079158-188.631579a269.743158 269.743158 0 0 1 77.581474-99.328A81.057684 81.057684 0 0 0 242.526316 161.684211C197.955368 161.684211 161.684211 197.955368 161.684211 242.526316s36.271158 80.842105 80.842105 80.842105h1.131789zM781.473684 323.368421c44.570947 0 80.842105-36.271158 80.842105-80.842105s-36.271158-80.842105-80.842105-80.842105a81.057684 81.057684 0 0 0-78.713263 62.35621A269.231158 269.231158 0 0 1 780.341895 323.368421H781.473684z m80.842105 188.631579a26.974316 26.974316 0 0 0-53.894736 0v132.473263a40.474947 40.474947 0 0 0 53.894736-38.157474V512z"
									fill="#231F20"
									p-id="3766"
								></path>
							</svg>
						</template>
					</icon>
				</router-link>
			</div>
			<div class="navContainer">
				<router-link to="/main/home">
					<div class="header-item">
						<HomeTwoTone /><span style="margin-left: 4px">HOME</span>
					</div>
				</router-link>
				<router-link to="/main/project">
					<div class="header-item">
						<code-two-tone /><span style="margin-left: 4px">PROJECTS</span>
					</div>
				</router-link>
				<router-link to="/main/article">
					<div class="header-item">
						<smile-two-tone /><span style="margin-left: 4px">ARTICLE</span>
					</div>
				</router-link>
				<router-link to="/main/timeline">
					<div class="header-item">
						<info-circle-two-tone /><span style="margin-left: 4px"
							>TIMELINE</span
						>
					</div>
				</router-link>
				<router-link to="/main/about">
					<div class="header-item">
						<info-circle-two-tone /><span style="margin-left: 4px">ABOUT</span>
					</div>
				</router-link>
			</div>
		</div>
	</a-layout-header>

	<a-layout-sider
		class="menu-collapse"
		breakpoint="md"
		collapsed-width="0"
		@breakpoint="onBreakpoint"
		:trigger="null"
	>
		<a-drawer
			title=""
			placement="left"
			:closable="false"
			:visible="visible"
			@close="onClose"
			class="custom-class"
		>
			<div class="infoContainer">
				<div class="profileContainer">
					<img class="profile" src="../assets/img/profile.jpg" alt="" />
				</div>
				<div class="introContainer">一团一团亮晶晶</div>
			</div>
			<div class="menu-container">
				<router-link to="/main/home">
					<div class="menu-item">
						<HomeTwoTone /><span style="margin-left: 4px">HOME</span>
					</div>
				</router-link>
				<router-link to="/main/project">
					<div class="menu-item">
						<code-two-tone /><span style="margin-left: 4px">PROJECTS</span>
					</div>
				</router-link>
				<router-link to="/main/article">
					<div class="menu-item">
						<smile-two-tone /><span style="margin-left: 4px">ARTICLE</span>
					</div>
				</router-link>
				<router-link to="/main/about">
					<div class="menu-item">
						<info-circle-two-tone /><span style="margin-left: 4px">ABOUT</span>
					</div>
				</router-link>
				<router-link to="/main/timeline">
					<div class="menu-item">
						<info-circle-two-tone /><span style="margin-left: 4px"
							>TIMELINE</span
						>
					</div>
				</router-link>
			</div>
			<todos />
		</a-drawer>
	</a-layout-sider>
</template>

<script>
import Icon, {
	HomeTwoTone,
	SmileTwoTone,
	InfoCircleTwoTone,
	CodeTwoTone
} from '@ant-design/icons-vue'
import { ref } from '@vue/reactivity'
import Todos from './Todos.vue'

export default {
	name: 'headerName',
	components: {
		HomeTwoTone,
		SmileTwoTone,
		InfoCircleTwoTone,
		Icon,
		CodeTwoTone,
		Todos
	},
	props: ['isCollapse'],
	emits: ['FoldChange'],
	setup(props, { emit }) {
		let collapsed = ref(true)
		const onBreakpoint = (broken) => {
			if (!broken) {
				console.log(document.getElementsByClassName('menu-btn'))
				document.querySelector('.menu-btn').style = 'display: none'
				document.querySelector('.navContainer').style = 'display: flex'
				emit('FoldChange', broken)
			} else {
				document.querySelector('.menu-btn').style = 'display: block'
				document.querySelector('.navContainer').style = 'display: none'
				emit('FoldChange', broken)
			}
		}
		const visible = ref(false)
		const showDrawer = () => {
			// collapsed.value = !collapsed.value
			visible.value = !visible.value
		}
		const onClose = () => {
			visible.value = false
		}
		return {
			selectedKeys: ref(['4']),
			onBreakpoint,
			collapsed,
			visible,
			showDrawer,
			onClose
		}
	}
}
</script>

<style scoped>
.header {
	/* background-color: #eceaec; */
	background-image: linear-gradient(
		to top,
		#dad4ec 0%,
		#dad4ec 1%,
		#f3e7e9 100%
	);
	font-size: medium;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
		rgba(0, 0, 0, 0.05) 0px 5px 10px;

	border-radius: 35px;
	margin: 10px 10px;
}

.header a {
	color: beige;
}

.header a:hover {
	cursor: pointer;
}

.header-item {
	border: 0;
	background: none;
	text-transform: uppercase;
	color: #04002c;
	/* font-weight: bold; */
	position: relative;
	outline: none;
	padding: 0 20px;
	box-sizing: border-box;
	font-size: 14px;
}

.header-item::before,
.header-item::after {
	box-sizing: inherit;
	position: absolute;
	content: '';
	border: 2px solid transparent;
	width: 0;
	height: 0;
}

.header-item::after {
	bottom: 0;
	right: 0;
}

.header-item::before {
	top: 0;
	left: 0;
}

.header-item:hover::before,
.header-item:hover::after {
	width: 100%;
	height: 100%;
}

.header-item:hover::before {
	border-top-color: #56abe0;
	border-right-color: #1191ae;
	transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

.header-item:hover {
	border: none;
}

.header-item:hover::after {
	border-bottom-color: #4266e9;
	border-left-color: #4361ee;
	transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
		height 0.3s ease-out 1s;
}

/* #components-layout-demo-responsive .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    } */
.navContainer {
	display: flex;
	flex-direction: row;
}

.ZHeader {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}

.profile {
	height: 128px;
	width: 128px;
	border-radius: 40px;
	margin-top: 20px;
}

.siderContainer {
	height: 1000px;
	background-color: white;
	margin: 10px;
	border-radius: 20px;
}

.menu-container {
	display: flex;
	flex-direction: column;
	font-size: 18px;
	align-items: left;
	padding: 10% 30%;
}

.menu-item {
	margin: 8px 0;
}

.loginbtn-container {
	align-items: center;
	display: flex;
}

.menu-item:hover {
	background-color: #d8dee677;
}

/* .introContainer {
  margin: 20px;
} */
.menu-collapse {
	display: none;
}

.infoContainer {
	text-align: center;
}
.loginbtn {
	align-items: center;
	display: flex;
}
</style>
