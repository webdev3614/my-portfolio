import { Card, Carousel } from "antd"
import SummaryContent, { SummaryContentProperty } from "./summary-content"

export interface SummaryCardProperty {
    title: string,
    content: SummaryContentProperty[],
    bgColor: string
}

const cardStyle: React.CSSProperties = {
    width: "100%"
}

const carouselStyle: React.CSSProperties = {
    width: "100%",
}

const carouselDivStyle: React.CSSProperties = {
    width: "100%"
}

export default function SummaryCard(props: SummaryCardProperty) {
    return (
        <Card title={props.title.toUpperCase()} style={{
            ...cardStyle,
            background: props.bgColor
        }}>
            <Carousel autoplay arrows style={carouselStyle}>
                {
                    props.content.map((content, index)=>{
                        return (
                            <div key={index} style={carouselDivStyle}>
                                <SummaryContent {...content}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </Card>
    )
}