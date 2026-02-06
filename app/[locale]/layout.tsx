import { Layout } from "antd"

const contentStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    padding: "10px"
}

export default function HomePageLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>){
    return (
        <Layout style={contentStyle}>
            {children}
        </Layout>
    )
}