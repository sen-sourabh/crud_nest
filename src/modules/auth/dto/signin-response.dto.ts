import { User } from '../../user/entities/user.entity';

export class SignInResponseWithEmailPasswordDto extends User {
  access_token: string;
}
