import { Layout } from "antd"

const contentStyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    background: "transparent"
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