const { renameSync } = require('fs');

const renameHtml = () => {
    renameSync('./build/index.html', './build/popup.html');
};

renameHtml();