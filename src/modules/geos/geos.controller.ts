import { Body, Controller, HttpCode, Post } from '@nestjs/common';
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
  @HttpCode(200)
  async getDistanceBetweenTwoGeoPoints(
    @Body() body: RequestLatitudeLongitudeGeoDto,
  ) {
    return await this.geosService.getDistanceBetweenTwoGeoPoints(body);
  }
}
