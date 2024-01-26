import { Injectable } from '@nestjs/common';
import { RequestLatitudeLongitudeGeoDto } from './dto/request-geo.dto';
import { calculateDistance } from './helpers/distance.helpers';

@Injectable()
export class GeosService {
  getDistanceBetweenTwoGeoPoints(body: RequestLatitudeLongitudeGeoDto): string {
    const distance = calculateDistance(body);
    return `${distance.toFixed(2)} miles`;
  }
}
