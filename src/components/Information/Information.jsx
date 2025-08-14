import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaShippingFast,
  FaPhoneAlt,
  FaShieldAlt,
  FaBoxOpen,
  FaEnvelope,
} from "react-icons/fa";

const infoData = [
  {
    icon: <FaShippingFast size={30} className="text-primary" />,
    title: "Pulsuz çatdırılma",
    text: "300azn-dan yuxarı sifarişlər üçün dünya üzrə pulsuz çatdırılmadan həzz alın.",
  },
  {
    icon: <FaBoxOpen size={30} className="text-warning" />,
    title: "Rahatlığınız önəmlidir",
    text: "Onlayn al, mağazadan götür.",
  },

  {
    icon: <FaShieldAlt size={30} className="text-danger" />,
    title: "Təhlükəsiz ödəniş",
    text: "Ödəniş məlumatlarınız təhlükəsiz şəkildə emal edilir.",
  },
  {
    icon: <FaPhoneAlt size={30} className="text-success" />,
    title: "Müştəri xidməti",
    text: "Suallarınızı cavablandırmaq üçün bazar ertəsindən cümə gününə kimi xidmətinizdəyik.",
  },
  {
    icon: <FaEnvelope size={30} className="text-info" />,
    title: "Endirimlərimiz",
    text: "E-poçtla qeydiyyatdan keçin və əlavə 25% endirim əldə edərək növbəti alışınıza qənaət edin.",
  },
];

const Information = () => {
  return (
  <div className="h-auto py-5">
    <Container className="pt-4" style={{ maxWidth: "1250px" }}>
      {/* Ümumi başlıq */}
      <h2 className="text-[35px] fw-bold mb-5">HƏR ADDIMDA RAHATLIQ</h2>

      <Row className="g-4">
        {infoData.slice(0, 3).map((item, index) => (
          <Col xs={12} md={4} key={index}>
            <Card className="h-100 shadow-sm text-center p-3">
              <div>{item.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text className="m-3">{item.text}</Card.Text>
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
                <Card.Text className="m-3">{item.text}</Card.Text>
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
