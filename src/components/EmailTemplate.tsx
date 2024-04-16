import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
    Section, Column, Row
  } from "@react-email/components";
  import * as React from "react";
  
  interface NotionMagicLinkEmailProps {
    loginCode?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const NotionMagicLinkEmail = ({
    loginCode,
  }: NotionMagicLinkEmailProps) => (
    <Html>
      <Head />
      <Preview>Smart RF Alarms. Close obstruction to the antenna. </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Smart RF Obstruction Alarm</Heading>
          <Text>
            An obstruction alarm triggered this email.
          </Text>
          <Link
            href="https://smartrf.cloud"
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "16px",
            }}
          >
            Click here to see smart RF dashboard
          </Link>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Or, copy and paste this URL to yor browser
          </Text>
          <code style={code}>{loginCode}</code>

          <Section 
          style={{
            marginTop: "14px",
            marginBottom: "16px",
          }}>
      <Row>
        <Column>Obstruction Alarm</Column>
        <Column>3 alarms</Column>
      </Row>
      <Row>
        <Column>Antenna Recovery</Column>
        <Column>3 alarms</Column>
      </Row>
      <Row>
        <Column>Azimuth Alarm</Column>
        <Column>3 alarms</Column>
      </Row>
    </Section>

          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            If you didn&apos;t subscribe to this email, you can safely ignore this email.
          </Text>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            Hint: You can unsubscribe from Smart RF alarms in → Alarms → Unsubscribe.
          </Text>
          <Img
            src="https://i.postimg.cc/DZddyYmz/SAF-MAIN-LOGO.png"
            width="128"
            height="96"
            alt="Safaricom"
          />
          <Text style={footer}>
            <Link
              href="https://smartrf.cloud"

              target="_blank"
              style={{ ...link, color: "#898989" }}
            >
              Smart RF Audit. The Climb is Over.
            </Link>
            by Safaricom PLC
            <br />
           Automating RF audits.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  NotionMagicLinkEmail.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
  } as NotionMagicLinkEmailProps;
  
  export default NotionMagicLinkEmail;
  
  const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const footer = {
    color: "#898989",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
  };
  
  const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333",
  };
  