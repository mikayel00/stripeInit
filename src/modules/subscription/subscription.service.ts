import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreateSubscriptionSessionDto } from './dto/create-subscription-session.dto';

@Injectable()
export class SubscriptionService {
  constructor(@InjectStripeClient() private stripe: Stripe) {}

  async createSubscriptionSession(
    user: any,
    createSubscriptionSessionDto: CreateSubscriptionSessionDto,
  ): Promise<Stripe.Response<Stripe.Checkout.Session> | undefined> {
    try {
      return this.stripe.checkout.sessions.create({
        success_url: 'https://example.com/',
        customer: user.customerId,
        line_items: [
          {
            price: createSubscriptionSessionDto.priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
      });
    } catch (error) {
      console.error('Error from stripe:', error);
    }
  }

  async getPortal(
    customerId: string,
  ): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
    return this.stripe.billingPortal.sessions.create({
      customer: customerId,
    });
  }
}
