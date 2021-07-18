const os = require('os');

// info about current system's user 
const user = os.userInfo();

// system uptime in seconds
const uptime = os.uptime();

const currentOS = {
    name: os.type(),
    realise: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);