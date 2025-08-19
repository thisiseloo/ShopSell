import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaShippingFast,
  FaPhoneAlt,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Information = () => {
  const { t } = useTranslation();

  const infoData = [
    {
      icon: <FaShippingFast size={30} className="text-primary" />,
      title: t("shipping_title"),
      text: t("shipping_text"),
    },
    {
      icon: <FaBoxOpen size={30} className="text-warning" />,
      title: t("convenience_title"),
      text: t("convenience_text"),
    },
    {
      icon: <FaShieldAlt size={30} className="text-danger" />,
      title: t("secure_title"),
      text: t("secure_text"),
    },
    {
      icon: <FaPhoneAlt size={30} className="text-success" />,
      title: t("support_title"),
      text: t("support_text"),
    },
    {
      icon: <MdDiscount size={30} className="text-info" />,
      title: t("discount_title"),
      text: t("discount_text"),
    },
  ];

  return (
    <div className="h-auto py-5">
      <Container style={{ maxWidth: "1250px" }}>
        <h2 className="text-[35px] text-[#1a0029] fw-bold mb-5">
          {t("info_main_title")}
        </h2>

        <Row className="g-4">
          {infoData.slice(0, 3).map((item, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className="h-100 shadow-sm text-center p-3">
                <div>{item.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-bold text-[#1a0029]">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="m-3 text-[#1a0029]/80">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 g-4">
          {infoData.slice(3).map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <Card className="h-100 shadow-sm text-center p-4">
                <div>{item.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="m-3 text-[#1a0029]/80">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Information;
