import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService){}
    
    @Post('create')
    createTask(@Body() body : any){
        return this.userService.createTask(body);
    }

    @Get('list')
    listTasks(){
        return this.userService.listTask();
    }
    
    @Put(':id')
    modifyTask(@Param('id') idTask: number, @Body() body: any){
        return this.userService.modifyTask(idTask,body);
    }

    @Delete(':id')
    deleteTask(@Param('id') idTask: number){
        return this.userService.deleteTask(idTask);
    }

}
