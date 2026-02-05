import { Avatar, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import { useTranslations } from "next-intl";

export default function LocalePage() {
  const t = useTranslations("dashboard");
  return (
    <>
			<Content style={{
				display:"flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh"
			}}>
				{t("welcome")}
				<Avatar src="images/me.png" size={250}/>
			</Content>
		</>
  );
}