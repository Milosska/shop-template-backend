import path from "path";
import multer from 'multer';
import HttpError from "./HttpError.js";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const newName = `${uniquePrefix}_${file.originalname}`;
        cb(null, newName)
    }
});

const limits = {
    fileSize: 3072 * 3072,
}

const fileFilter = (req, file, cb) => {
    const {mimetype} = file;
    if (mimetype === 'image/png' || mimetype === 'image/jpeg'){
        return cb(null, true);
    }

    cb(new HttpError(400, "File extension should be .jpg or .png"));
}

const fileUpload = multer({
    storage, 
    limits, 
    fileFilter
});

export default fileUpload;