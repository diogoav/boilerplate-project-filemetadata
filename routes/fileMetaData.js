const express = require('express');
const router = express.Router();
const fileMetaDataController = require('../controllers/fileMetaDataController');
const multer = require('multer');

// Configura armazenamento em memória
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/fileanalyse', upload.single('upfile'), fileMetaDataController.uploadFile);

//router.get('/', fileMetaDataController.SMT);

module.exports = router;

