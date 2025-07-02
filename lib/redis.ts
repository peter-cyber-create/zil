import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedis() {
  if (!redis && process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL, {
      enableReadyCheck: false,
      maxRetriesPerRequest: 3,
    });
  }
  return redis;
}

export async function storeContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const redis = getRedis();
  if (!redis) return null;
  
  const id = `contact:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
  const contactData = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
    responded: false,
  };
  
  await redis.hset(id, contactData);
  await redis.lpush('contacts', id);
  
  return contactData;
}

export async function storeQuotation(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  details?: string;
}) {
  const redis = getRedis();
  if (!redis) return null;
  
  const id = `quotation:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
  const quotationData = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
    responded: false,
  };
  
  await redis.hset(id, quotationData);
  await redis.lpush('quotations', id);
  
  return quotationData;
}

export async function storeFeedback(data: {
  name: string;
  email: string;
  message: string;
  rating?: number;
}) {
  const redis = getRedis();
  if (!redis) return null;
  
  const id = `feedback:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
  const feedbackData = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
    responded: false,
  };
  
  await redis.hset(id, feedbackData);
  await redis.lpush('feedbacks', id);
  
  return feedbackData;
}

export async function getContacts(limit = 50) {
  const redis = getRedis();
  if (!redis) return [];
  
  const contactIds = await redis.lrange('contacts', 0, limit - 1);
  const contacts = [];
  
  for (const id of contactIds) {
    const contact = await redis.hgetall(id);
    if (contact.id) contacts.push(contact);
  }
  
  return contacts;
}

export async function getQuotations(limit = 50) {
  const redis = getRedis();
  if (!redis) return [];
  
  const quotationIds = await redis.lrange('quotations', 0, limit - 1);
  const quotations = [];
  
  for (const id of quotationIds) {
    const quotation = await redis.hgetall(id);
    if (quotation.id) quotations.push(quotation);
  }
  
  return quotations;
}

export async function getFeedbacks(limit = 50) {
  const redis = getRedis();
  if (!redis) return [];
  
  const feedbackIds = await redis.lrange('feedbacks', 0, limit - 1);
  const feedbacks = [];
  
  for (const id of feedbackIds) {
    const feedback = await redis.hgetall(id);
    if (feedback.id) feedbacks.push(feedback);
  }
  
  return feedbacks;
}
