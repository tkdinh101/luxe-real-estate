import React from "react";
import styled from "styled-components";

const HeroSection = styled.header`
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  background-image: url('/mnt/data/image.png');
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Section = styled.section`
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 300px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export default function HomePage() {
  return (
    <div>
      <HeroSection>
        <Overlay>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Luxe Real Estate</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Book your next luxury stay with ease</p>
          <Button>Explore Listings</Button>
        </Overlay>
      </HeroSection>

      <Section>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Featured Properties</h2>
        <CardContainer>
          <Card>
            <Image src="/mnt/data/image.png" alt="Urban Comfort in HTX" />
            <CardContent>
              <h3>Urban Comfort in HTX</h3>
              <p>Click below to view details and book.</p>
              <Button>View Listing</Button>
            </CardContent>
          </Card>
          {[
            "Spacious Home King Bed",
            "Cozy Apt Near Hobby"
          ].map((title, index) => (
            <Card key={index}>
              <Image src={`/property-${index + 2}.jpg`} alt={title} />
              <CardContent>
                <h3>{title}</h3>
                <p>Click below to view details and book.</p>
                <Button>View Listing</Button>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Section>

      <Section style={{ background: "#f8f9fa" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Local Recommendations</h2>
        <CardContainer>
          {["Space Center Houston", "Buffalo Bayou Park", "Moody Gardens"].map((place, index) => (
            <Card key={index}>
              <CardContent>
                <h3>{place}</h3>
                <p>A must-visit attraction near our properties.</p>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Section>
    </div>
  );
}
