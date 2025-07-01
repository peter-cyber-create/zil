export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  responded: boolean;
  response: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quotation {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  details: string | null;
  responded: boolean;
  response: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number | null;
  responded: boolean;
  response: string | null;
  createdAt: Date;
  updatedAt: Date;
}
