import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpRequest, SignInRequest } from "./auth.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('/signup')
    signup(@Body() data: SignUpRequest){
        return this.authService.signup(data)
    }

    @Post('/signin')
    signin(@Body() data: SignInRequest){
        return this.authService.signin(data)
    }

}