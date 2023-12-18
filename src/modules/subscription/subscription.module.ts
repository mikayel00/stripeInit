import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { StripeModule } from '@golevelup/nestjs-stripe';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionWebhookService } from './subscription-webhook.service';

@Module({
  imports: [
    StripeModule.forRootAsync(StripeModule, {
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('STRIPE_CONFIG'),
      inject: [ConfigService],
    }),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, SubscriptionWebhookService],
})
export class SubscriptionModule {}
