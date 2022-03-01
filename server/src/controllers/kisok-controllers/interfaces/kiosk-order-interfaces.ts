export interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // prevOrders.
}

export interface IPriceItem {
  itemId: string;
}

export interface IPaymentData {
  paymentType: string;
  paymentId: string;
}

export interface IFoodItemObject {
  id: string;
  ingredients: string[];
  quantity: number;
}

export interface IIngredients {
  _id: string;
  title: string;
  price: number;
  category: string;
}

export interface IOrder {
  foodItem: IFoodItemObject[];
  addressData: { address: string; state: string; zipCode: string };
  paymentType: string;
  deliveryMethod: string;
  customerInfo: { name: string; phoneNumber: string };
}

export interface ICompleteOrder extends IOrder {
  totalPrice: number;
  orderNumber: number;
}

export interface ICreateOrderData extends IOrder {
  paymentData: { paymentType: string; paymentId: string };
}
