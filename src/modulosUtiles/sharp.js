const sharp = require('sharp')

sharp('./src/modulosUtiles/imagen-chida.jpg')
    .resize(80)
    .toFile('./src/modulosUtiles/resized.jpg')