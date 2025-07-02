import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, rating } = await request.json();

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log feedback
    console.log('Feedback submission:', { name, email, message, rating });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your feedback! We appreciate your input.'
    });

  } catch (error) {
    console.error('Feedback form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}
