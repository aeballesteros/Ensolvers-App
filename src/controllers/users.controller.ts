import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService){}
    
    @Post()
    createTask(@Body() body : any){
        this.userService.createTask(body);
    }

    @Get()
    listTasks(){
        this.userService.listTask();
    }
    
    @Put('id')
    modifyTask(@Param('id') idTask: number, @Body() body: any){
        this.userService.modifyTask(idTask,body);
    }

    @Delete('id')
    deleteTask(@Param('id') idTask: number){
        this.userService.deleteTask(idTask);
    }

}
