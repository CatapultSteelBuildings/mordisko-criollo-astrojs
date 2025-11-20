import type { ContactMessage } from './ContactMessage.interface';

export interface OrderItem {
  code: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderMessage extends ContactMessage {
  address: string;
  details: OrderItem[];
}
