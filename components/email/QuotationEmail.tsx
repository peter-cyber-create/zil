import * as React from 'react';
import { Html, Container, Text, Button } from '@react-email/components';

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
      
      <Text style={{ marginTop: '24px', padding: '16px', background: '#f0f9ff', borderRadius: '6px', fontSize: '14px', color: '#374151', fontWeight: 'bold' }}>
        Company Contact Information:
      </Text>
      <Text style={{ padding: '0 16px', fontSize: '14px', color: '#374151' }}>
        Zodongo International Limited
      </Text>
      <Text style={{ padding: '0 16px', fontSize: '14px', color: '#374151' }}>
        Email: info@zodongo-int.com
      </Text>
      <Text style={{ padding: '0 16px', fontSize: '14px', color: '#374151' }}>
        Website: www.zodongo-int.com
      </Text>
      <Text style={{ padding: '0 16px 16px 16px', fontSize: '14px', color: '#374151' }}>
        Phone: +256 779 201 606, +256 779 933 268, +256 772 255 109
      </Text>
      
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
