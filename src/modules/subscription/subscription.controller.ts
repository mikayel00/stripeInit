import { Body, Controller, Post, Req } from '@nestjs/common';

import { SubscriptionService } from './subscription.service';
import Stripe from 'stripe';
import { CreateSubscriptionSessionDto } from './dto/create-subscription-session.dto';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Post()
  createSubscriptionSession(
    @Req() request,
    @Body() createSubscriptionSessionDto: CreateSubscriptionSessionDto,
  ): Promise<Stripe.Response<Stripe.Checkout.Session> | undefined> {
    return this.subscriptionService.createSubscriptionSession(
      request.user,
      createSubscriptionSessionDto,
    );
  }

  @Post('portal-session')
  updatePlan(
    @Req() request,
  ): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
    return this.subscriptionService.getPortal(request.user.customerId);
  }
}
