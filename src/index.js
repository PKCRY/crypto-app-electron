const electron = require('electron');
const path = require('path'); //for working with files
const BrowserWindow = electron.remote.BrowserWindow; //it's gonna allow us to create an actually window
const axios = require('axios')
const ipc = electron.ipcRenderer

const notifyBtn = document.getElementById('notifyBtn') //refering the Notify Me When button
const price = document.querySelector('h1')
const targetPrice = document.getElementById('targetPrice')


function getBTC() {
    // https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
        .then( res => {
            const cryptos = res.data.BTC.USD
            price.innerHTML = `$ ${cryptos.toLocaleString('en')}` //replacing the h1 with the current BTC price
        })
}
getBTC(); //calling the function to run it
setInterval(getBTC, 30000); //then calling again every 30s


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

ipc.on('targetPriceVal', (event, arg) => {
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = `$ ${targetPriceVal.toLocaleString('en')}`
})