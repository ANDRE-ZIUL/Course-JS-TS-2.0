const fs = require('fs');

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados);
}

