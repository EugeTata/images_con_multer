import FileScheme from "../models/file.js";

const PUBLIC_URL = process.env.PUBLIC_URL;

export const createfileItem = (req, res) => {
    const file = req.file;
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = FileScheme.create(fileData);
    res.send(data);
};