import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// Allow only images
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const dateNow = new Date();
  const dayName = dateNow.getDate();
  const monthName = dateNow.getMonth();
  const yearName = dateNow.getFullYear();
  const hourName = dateNow.getHours();
  const minuteName = dateNow.getMinutes();
  const secondName = dateNow.getSeconds();
  const millisecondName = dateNow.getMilliseconds();

  const dateName = `${yearName}${monthName}${dayName}${hourName}${minuteName}${secondName}${millisecondName}`
  callback(null, `${name}_${dateName}${fileExtName}`);
};