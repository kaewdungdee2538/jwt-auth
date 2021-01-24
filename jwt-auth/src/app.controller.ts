import { UseGuards } from '@nestjs/common';
import { Controller, Get ,Post,Request} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req) {
    const user = await this.authService.validateUser(req.body.username,req.body.password)
    return await this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
