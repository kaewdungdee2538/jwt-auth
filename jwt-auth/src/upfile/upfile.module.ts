import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UpfileController } from './upfile.controller';
import { UpfileService } from './upfile.service';

@Module({
  imports:[MulterModule.register({
    dest:'./uploads',
    
  })],
  controllers: [UpfileController],
  providers: [UpfileService]
})
export class UpfileModule {}
