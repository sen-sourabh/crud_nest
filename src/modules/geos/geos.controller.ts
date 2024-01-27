import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestLatitudeLongitudeGeoDto } from './dto/request-geo.dto';
import { GeosService } from './geos.service';

@ApiTags('Geography')
@Controller('geos')
export class GeosController {
  constructor(private readonly geosService: GeosService) {}

  @Post('/getDistanceBetweenTwoGeoPoints')
  @ApiOperation({
    summary:
      'Calculate distance in miles of two points via latitude & longitude',
  })
  @ApiResponse({ status: 200, description: 'Distance in miles' })
  getDistanceBetweenTwoGeoPoints(@Body() body: RequestLatitudeLongitudeGeoDto) {
    return this.geosService.getDistanceBetweenTwoGeoPoints(body);
  }
}
