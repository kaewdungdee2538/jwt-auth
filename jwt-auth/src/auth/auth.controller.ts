import { Post ,Request} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
}
