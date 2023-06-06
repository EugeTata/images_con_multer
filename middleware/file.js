import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";
const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirPath = dirname(currentFilePath);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directionStorage = `${currentDirPath}/../storage`;
        cb(null, directionStorage);
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});

export const uploadMiddleware = multer({ storage });

