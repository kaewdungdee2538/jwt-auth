import { Body, Controller, Post, HttpStatus, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { response } from 'express';
import { diskStorage } from 'multer';
import { editFileName,imageFileFilter } from './upload';

@Controller('upfile')
export class UpfileController {

    @Post('uploadMultipleFiles')
    @UseInterceptors(
        FilesInterceptor('image', 10, {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadMultipleFiles(@UploadedFiles() files,@Body() req) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        console.log('Upload file');
        console.log(req);
        return {
            status: HttpStatus.OK,
            message: 'Images uploaded successfully!',
            data: response,
        };
    }
}
