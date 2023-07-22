import { UserType } from '../enums/user.enum';

export class UpdateUserDto {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly password: string;
  readonly phone: number;
  readonly user_type: UserType;
  readonly is_active: boolean;
  readonly is_deleted: boolean;
  readonly ip_address: string;
  readonly location: string;
}
