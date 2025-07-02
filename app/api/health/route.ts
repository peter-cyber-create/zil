import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Zodongo International Limited - Site is live!',
    services: ['Contact Forms', 'Email Notifications', 'Corporate Website']
  });
}
