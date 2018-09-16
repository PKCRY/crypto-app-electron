const electron = require('electron');
const path = require('path'); //for working with files
const remote = electron.remote;

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', (event) => {
    const window = remote.getCurrentWindow()
    window.close()
})