import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyModuleModule } from '@rescuento/MODULE_NAME'

@Module({
  imports: [MyModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
