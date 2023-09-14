import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  async create(@Body() createShopDto: CreateShopDto) {
    return await this.shopService.create(createShopDto);
  }

  @Put('/:id')
  async edit(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return await this.shopService.update(id, updateShopDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopService.update(id, updateShopDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.shopService.remove(id);
  }
}
