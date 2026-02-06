import { Card } from "antd"
import CardMeta from "antd/es/card/CardMeta"

export interface SummaryContentProperty {
    image: string,
    title: string,
    description: string
}

const cardStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--dark)"
}

const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "120px",
    objectFit: "contain"
}

export default function SummaryContent(props: SummaryContentProperty) {
    return (
        <Card cover={<img src={props.image} style={imgStyle}/>} style={cardStyle}>
            <CardMeta title={props.title} description={props.description} />
        </Card>
    )
}