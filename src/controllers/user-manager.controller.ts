import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserManagerService } from 'src/services/user-manager.service';

@Controller('user-manager')
export class UserManagerController {

    constructor(private user : UserManagerService){}
    
    @Post('create')
    createUser(@Body() body : any){
        return this.user.createUser(body);
    }

    @Get('list')
    listUser(){
        return this.user.listUser();
    }
    
    @Put(':id')
    modifyUser(@Param('id') idUser: number, @Body() body: any){
        return this.modifyUser(idUser,body);
    }

    @Delete(':id')
    deleteUser(@Param('id') idUser: number){
        return this.user.deleteUser(idUser);
    }
}
