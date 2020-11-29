import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';
import { Client, ClientGrpc } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit(){
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('/add')
  async accmulate(@Body('data') data: number[]){
    this.logger.log(' adding ' + data.toString()); 
    return this.grpcService.accmulate({ data});
  }
}
