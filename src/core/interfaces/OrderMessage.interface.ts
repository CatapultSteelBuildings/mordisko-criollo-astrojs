import type { ContactMessage } from './ContactMessage.interface';

interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderMessage extends ContactMessage {
  details: OrderItem[];
}
