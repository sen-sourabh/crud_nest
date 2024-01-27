import { IsDefined, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class RequestLatitudeLongitudeGeoDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Min(-90, { message: 'Latitude must be between -90 and 90 degrees' })
  @Max(90, { message: 'Latitude must be between -90 and 90 degrees' })
  readonly firstLocationLatitude: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Min(-180, { message: 'Longitude must be between -180 and 180 degrees' })
  @Max(180, { message: 'Longitude must be between -180 and 180 degrees' })
  readonly firstLocationLongitude: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Min(-90, { message: 'Latitude must be between -90 and 90 degrees' })
  @Max(90, { message: 'Latitude must be between -90 and 90 degrees' })
  readonly secondLocationLatitude: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Min(-180, { message: 'Longitude must be between -180 and 180 degrees' })
  @Max(180, { message: 'Longitude must be between -180 and 180 degrees' })
  readonly secondLocationLongitude: string;
}
