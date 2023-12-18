import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { ConfigModule } from '@nestjs/config';
import configs from './modules/config';

@Module({
  imports: [
    SubscriptionModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
