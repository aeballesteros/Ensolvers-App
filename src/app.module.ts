import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { UserManagerController } from './controllers/user-manager.controller';
import { UserManagerService } from './services/user-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';
import { Users } from 'src/entities/users.entity';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'newuser',
      password: 'password',
      database: 'mydb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 2000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([Tasks,Users])
  ],
  controllers: [AppController, UsersController, TasksController, UserManagerController],
  providers: [AppService, UsersService, TasksService,UserManagerService,Repository],
})
export class AppModule {}
