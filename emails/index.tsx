import { Button, Html, Heading } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Heading as="h2">Lorem ipsum</Heading>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
