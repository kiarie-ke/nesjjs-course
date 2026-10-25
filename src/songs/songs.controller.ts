import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('songs')
export class SongsController {


    @Get()
    findAll() {
        return 'This action returns all songs';
    }

    @Get(':id')
    findOne() {
        return 'This action returns one song';
    }
    @Post()
    create() {
        return 'This action creates a song';
    }
    @Put(':id')
    update() {
        return 'This action updates a song';
    }
    @Delete(':id')
    remove() {
        return 'This action removes a song';
    }
    
}
