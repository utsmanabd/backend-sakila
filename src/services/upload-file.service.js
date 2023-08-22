const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // const originalnameWithoutExt = file.originalname.split('.').slice(0, -1).join('.');
        const newFileName = uniqueSuffix + '.' + file.mimetype.split('/')[1]
        cb(null, newFileName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Izinkan file diunggah
    } else {
      cb(new Error('This file type is not allowed.'), false); // Tolak file
    }
  };

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    // limits: {
    //     fileSize: 2 * 1024 * 1024
    // }
});

module.exports = upload