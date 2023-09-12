import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertMenuDto } from './dto/InsertMenu.dto';
import * as fs from 'fs';

@Injectable()
export class MenuService {

constructor(private prisma:PrismaService){

}

    async GetAllMenu(){
        return await this.prisma.menu.findMany();
    }

    async GetMenu(shopId:string){
        return await this.prisma.menu.findFirst({
            where : {
                shopId: shopId
            }
        });
    }

    async InsertMenu(insertMenuDto: InsertMenuDto, file: any){



        //cek apakah semua kolom udah terisi
        if (!insertMenuDto.name || !insertMenuDto.description) {
            if(file)
            {
                fs.unlink(file.path, (err) => {
                    if (err) {
                      console.error('Gagal menghapus file:', err);
                      return;
                    }
                    console.log('File berhasil dihapus.');
                  });    
            }

            return {message: "Semua kolom harus diisi"}
        }

        //cek apakah sudah upload file display
        if(!file)
        {
            insertMenuDto.menu_display = "menudefault.png";
        }else
            insertMenuDto.menu_display = file.filename;


        try{
            return await this.prisma.menu.create({
                data : insertMenuDto
            })
        }catch(err)
        {
            return {
                message: err,
            }
        }

    }

    async UpdateMenu(id:string,insertMenuDto: InsertMenuDto, file: any){
        const existingMenu = await this.prisma.menu.findUnique({
            where : {id}
        });

        //mengecek apakah id yang ingin di update ada
        if(!existingMenu)
        { 
            //mengecek apakah dia memasukkan gambar walaupun row tidak ditemukan
            if(file)
            {
                //menghapus file yg barusaja dimasukkan
                fs.unlink(file.path, (err) => {
                    if (err) {
                      console.error('Gagal menghapus file:', err);
                      return;
                    }
                    console.log('File berhasil dihapus.');
                  });    
            }
           return {message: "Id menu tidak ditemukan"};
        }

        //mengecek apakah user memasukkan gambar
        if(file)
        {
            //mengecek gambar bukan default
            if(existingMenu.menu_display != 'menudefault.png')
            {
                //menghapus gambar sebelumnya agar tidak menumpuk
                fs.unlink(`imagedata\\menu\\${existingMenu.menu_display}`, (err) => {
                    if (err) {
                      console.error('Gagal menghapus file:', err);
                      return;
                    }
                    console.log('File berhasil diganti.');
                  });    
            }
            insertMenuDto.menu_display = file.filename;
        }

        //------------YANG HARUS DI FIX RANGGA, KAMU HARUS CEK JIKA NAMA BODYNYA GA SALAH-----------//
        return await this.prisma.menu.update({
            data : insertMenuDto,
            where : {id}
        })
    }

    async DeleteMenu(id:string){
        return await this.prisma.menu.delete({
            where : {id}
        })
    }
}
