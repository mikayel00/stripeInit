import {
  InjectStripeClient,
  StripeWebhookHandler,
} from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class SubscriptionWebhookService {
  constructor(@InjectStripeClient() private stripe: Stripe) {}

  @StripeWebhookHandler('customer.subscription.updated')
  async handleSubscriptionUpdate(event: Stripe.Event): Promise<void> {
    const dataObject = event.data.object as Stripe.Subscription;
    // implement here subscription create in our Database
    // ...
  }

  @StripeWebhookHandler('customer.subscription.deleted')
  async handleSubscriptionDelete(event: Stripe.Event): Promise<void> {
    const dataObject = event.data.object as Stripe.Subscription;
    // implement here subscription delete in our Database
    // ...
  }
}
