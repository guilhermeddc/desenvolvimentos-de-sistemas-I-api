import multer, {FileFilterCallback} from 'multer';
import {Request} from 'express';
import crypto from 'crypto';
import path from 'path';

export const tmpFolder = path.resolve(__dirname, '..', 'tmp');
export const uploadsFolder = path.resolve(tmpFolder, 'uploads');

const storage = multer.diskStorage({
  destination(request: Request, file: Express.Multer.File, cb) {
    cb(null, tmpFolder);
  },
  filename(request, file, cb) {
    const fileHash = crypto.randomBytes(10).toString('hex');
    const filename = `${fileHash}-${file.originalname}`;

    return cb(null, filename);
  },
});

const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploads = multer({storage, fileFilter});

export default uploads;
