import { Button, Container, Html, Text } from '@react-email/components';
import * as React from 'react';

interface QuotationEmailProps {
  name: string;
  email: string;
  service: string;
  details: string;
}

export const QuotationEmail = ({ name, email, service, details }: QuotationEmailProps) => (
  <Html>
    <Container style={{ background: '#f9fafb', padding: '32px', borderRadius: '8px', maxWidth: 600, margin: 'auto' }}>
      <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginBottom: '16px' }}>
        New Quotation Request - Zodongo International Limited
      </Text>
      <Text style={{ fontWeight: 'bold' }}>Name: {name}</Text>
      <Text style={{ fontWeight: 'bold' }}>Email: {email}</Text>
      <Text style={{ fontWeight: 'bold' }}>Service Requested: {service}</Text>
      <Text style={{ fontWeight: 'bold' }}>Details:</Text>
      <Text style={{ background: '#fff', padding: '16px', borderRadius: '6px', color: '#222', fontSize: '16px' }}>{details}</Text>
      <Button
        href={`mailto:${email}`}
        style={{ background: '#16a34a', color: '#fff', padding: '12px 24px', borderRadius: '6px', marginTop: '24px', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Reply to {name}
      </Button>
    </Container>
  </Html>
);

export default QuotationEmail;
