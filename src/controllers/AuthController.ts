import { AuthService } from '@/services';

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(req, res) {
    const { email, password } = req.body;

    const result = await this.authService.login({ email, password });

    res.send(result);
  }
}
