import { api } from '../../../services';

class PaymentService {
  constructor(api) {
    this.api = api;
  }

    getPaymentHistory = () => this.api.get('/my-transaction')
}

export const paymentService = new PaymentService(api);
