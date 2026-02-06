import { Card, Col, Divider, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import { useTranslations } from "next-intl";

export interface ContactCardProperty {
    name: string,
    birthday: Date,
    location: string,
    education: string,
    email: string,
    telegramID: string
}

const cardStyle: React.CSSProperties = {
    background: "transparent"
}

const calcAge = (birthday: Date) => {
    const now = new Date()
    const nowYear = now.getFullYear()
    const birthYear = birthday.getFullYear()
    return nowYear - birthYear
}

export default function ContactCard(props: ContactCardProperty) {
    const t = useTranslations("dashboard")
    return (
        <Card title={t("my").toUpperCase()} style={cardStyle}>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("name").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {props.name}
                    </Typography>
                </Col>
            </Row>
            <Divider dashed size="small"/>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("age").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {calcAge(props.birthday)}
                    </Typography>
                </Col>
            </Row>
            <Divider dashed size="small"/>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("location").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {props.location}
                    </Typography>
                </Col>
            </Row>
            <Divider dashed size="small"/>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("education").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {props.education}
                    </Typography>
                </Col>
            </Row>
            <Divider dashed size="small"/>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("email").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {props.email}
                    </Typography>
                </Col>
            </Row>
            <Divider dashed size="small"/>
            <Row gutter={16}>
                <Col span={8}>
                    <Typography>{t("telegramid").toUpperCase()}</Typography>
                </Col>
                <Col span={12}>
                    <Typography>
                        {props.telegramID}
                    </Typography>
                </Col>
            </Row>
        </Card>
    )
}