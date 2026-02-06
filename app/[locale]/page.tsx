import ContactCard, { ContactCardProperty } from "@/components/widgets/contact-card";
import SummaryCard, { SummaryCardProperty } from "@/components/widgets/summary-card";
import { Avatar, Col, Flex, Row } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

import { useTranslations } from "next-intl";

const contentStyle: React.CSSProperties = {
	width: "100%",
	background: "transparent",
	padding: "10px"
}

const footerStyle: React.CSSProperties = {
	width: "100%",
	background: "transparent",
	padding: "10px"
}

const contentRowStyle: React.CSSProperties = {
	width: "100%",
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
	const contactInfo: ContactCardProperty = {
		name: "Zheng Tian",
		birthday: new Date("1999-06-14"),
		location: "Dandong, Liaodong, China",
		education: "B.S. In Computer Science. Specialized in Software Engineering, Liaodong University 01/2017 - 01/2021",
		email: "tianzheng614@gmail.com",
		telegramID: "@zhengtian0614"
	}
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
			content: [
				{
					image: "images/chickenderby.png",
					title: "Chickenderby 10/2020 - 02/2022",
					description: t("chickenderby_description")
				},{
					image: "images/gogograndparent.jfif",
					title: "GoGoGrandparent 10/2022 - 11/2023",
					description: t("gogograndparent_description")
				},{
					image: "images/coachcare.png",
					title: "Coachcare 11/2023 - 11/2024",
					description: t("coachcare_description")
				},{
					image: "images/looter.webp",
					title: "Looter 11/2024 - 01/2026",
					description: t("looter_description")
				}
			],
			bgColor: "var(--background-100)"
		},
		{
			title: t("experience"),
			content: [
				{
					image: "images/website.jfif",
					title: t("web_development"),
					description: t("web_development_description")
				},{
					image: "images/blockchain.jfif",
					title: t("blockchain_development"),
					description: t("blockchain_development_description")
				},{
					image: "images/database.jfif",
					title: t("database_development"),
					description: t("database_development_description")
				},{
					image: "images/game.jfif",
					title: t("game_development"),
					description: t("game_development_description")
				},{
					image: "images/mobile.jfif",
					title: t("mobile_development"),
					description: t("mobile_development_description")
				}
			],
			bgColor: "var(--background)"
		}
	]
	return (
		<>
			<Content style={contentStyle}>
				<Row gutter={[16,16]} style={contentRowStyle}>
					<Col sm={24} md={8}>
						<Flex style={flexStyle}>
							<Avatar src="images/me.png" size={200} />
						</Flex>
					</Col>
					<Col sm={24} md={16}>
						<ContactCard {...contactInfo}/>
					</Col>
				</Row>
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