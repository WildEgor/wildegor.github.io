const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
        
            resolve(data);
        })
    })
}

getText(__filename).then((r) => { console.log(r); }).catch(err => {console.log(err)});