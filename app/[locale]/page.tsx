import SummaryCard, { SummaryCardProperty } from "@/components/widgets/summary-card";
import { Avatar, Col, Flex, Layout, Row } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { useTranslations } from "next-intl";

const contentStyle: React.CSSProperties = {
	width: "100%",
	height: "50%",
	background: "transparent"
}

const footerStyle: React.CSSProperties = {
	width: "100%",
	height: "50%",
	background: "transparent"
}

const contentLayoutStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",
	background: "transparent"
}

const contentSiderStyle: React.CSSProperties = {
	height: "100%",
	background: "transparent"
}

const contentContentStyle: React.CSSProperties = {
	width: "60%",
	height: "100%",
	background: "transparent"
}

const flexStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",
	justifyContent: "center",
	alignItems: "center"
}

const rowStyle: React.CSSProperties = {
	width: "100%",
	height: "100%"
}

const colStyle: React.CSSProperties = {
	height: "100%"
}

export default function LocalePage() {
	const t = useTranslations("dashboard");
	const summaries: SummaryCardProperty[] = [
		{
			title: t("skills"),
			content: [
				{
					image: "images/react.png",
					title: "React",
					description: t("strong_experience", { years: 7 })
				},
				{
					image: "images/vue.png",
					title: "Vue",
					description: t("strong_experience", { years: 5 })
				},
				{
					image: "images/angular.png",
					title: "Angular",
					description: t("strong_experience", { years: 3 })
				},
				{
					image: "images/nextjs.png",
					title: "NextJS",
					description: t("strong_experience", { years: 2 })
				},
				{
					image: "images/nodejs.png",
					title: "NodeJS",
					description: t("strong_experience", { years: 8 })
				},
				{
					image: "images/rust_actix.png",
					title: "Rust Actix",
					description: t("strong_experience", { years: 4 })
				},
				{
					image: "images/django.png",
					title: "Python Django",
					description: t("strong_experience", { years: 2 })
				},
				{
					image: "images/fastapi.png",
					title: "Python FastAPI",
					description: t("strong_experience", { years: 2 })
				},
				{
					image: "images/ruby_on_rails.png",
					title: "Ruby on Rails",
					description: t("strong_experience", { years: 5 })
				}
			],
			bgColor: "var(--background-200)"
		},
		{
			title: t("career"),
			content: [],
			bgColor: "var(--background-100)"
		},
		{
			title: t("previous_projects"),
			content: [],
			bgColor: "var(--background)"
		}
	]
	return (
		<>
			<Content style={contentStyle}>
				<Layout style={contentLayoutStyle}>
					<Sider style={contentSiderStyle} width="40%">
						<Flex style={flexStyle}>
							<Avatar src="images/me.png" size={200} />
						</Flex>
					</Sider>
					<Content style={contentContentStyle}>

					</Content>
				</Layout>
			</Content>
			<Footer style={footerStyle}>
				<Row gutter={[16,16]} style={rowStyle}>
					{
						summaries.map((summary, index) => {
							return (
								<Col key={index} sm={24} md={8} style={colStyle}>
									<SummaryCard {...summary}/>
								</Col>
							)
						})
					}
				</Row>
			</Footer>
		</>
	);
}