import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UpfileModule } from './upfile/upfile.module';

@Module({
  imports: [UserModule, AuthModule, UpfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
