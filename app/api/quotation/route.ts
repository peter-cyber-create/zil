import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, service, details } = await request.json();

    // Simple validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Log quotation request
    console.log('Quotation request:', { name, email, phone, company, service, details });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your quotation request! We will contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Quotation form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quotation request' },
      { status: 500 }
    );
  }
}
