import { User } from '../../modules/user/entities/user.entity';

export interface IRequestList {
  filter: User;
  metadata?: IRequestListMetadata;
}

export interface IRequestListMetadata {
  page?: number;
  limit?: number;
}
