import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserManagerService } from 'src/services/user-manager.service';

@Controller('user-manager')
export class UserManagerController {

    constructor(private user : UserManagerService){}
    
    @Post()
    createUser(@Body() body : any){
        this.user.createUser(body);
    }

    @Get()
    searchUser(){
        this.user.listUser();
    }
    
    @Put('id')
    modifyUser(@Param('id') idUser: number, @Body() body: any){
        this.modifyUser(idUser,body);
    }

    @Delete('id')
    deleteUser(@Param('id') idUser: number){
        this.user.deleteUser(idUser);
    }
}
