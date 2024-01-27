import { RequestLatitudeLongitudeGeoDto } from '../dto/request-geo.dto';
import { toRadians } from './degree.helpers';

export const calculateDistance = ({
  firstLocationLatitude,
  firstLocationLongitude,
  secondLocationLatitude,
  secondLocationLongitude,
}: RequestLatitudeLongitudeGeoDto) => {
  const R = 3958.8; // Earth radius in miles (you can use 6371 for kilometers)

  const dLat = toRadians(+secondLocationLatitude - +firstLocationLatitude);
  const dLon = toRadians(+secondLocationLongitude - +firstLocationLongitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(+firstLocationLatitude)) *
      Math.cos(toRadians(+secondLocationLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
};
