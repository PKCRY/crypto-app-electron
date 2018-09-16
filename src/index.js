const electron = require('electron');
const path = require('path'); //for working with files
const BrowserWindow = electron.remote.BrowserWindow; //it's gonna allow us to create an actually window

const notifyBtn = document.getElementById('notifyBtn') //refering the Notify Me When button

notifyBtn.addEventListener('click', function(event) { //loads the add window
    const modalPath = path.join('file://', __dirname, 'add.html');
    let win = new BrowserWindow({ 
        frame: false, //removing the top menu section
        transparent: true,
        alwaysOnTop: true,
        width: 400, 
        height: 200 
    });

    win.on('close', () => {
        win = null;
    })
    win.loadURL(modalPath)
    win.show()
})