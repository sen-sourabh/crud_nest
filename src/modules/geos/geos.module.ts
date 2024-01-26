import { Module } from '@nestjs/common';
import { GeosService } from './geos.service';
import { GeosController } from './geos.controller';

@Module({
  controllers: [GeosController],
  providers: [GeosService],
})
export class GeosModule {}
