// globals it means NO WINDOWS in Node.js env

// __dirname - current directory
// __filename - current filename
// require - using commonjs modules 
// module - info about current module (file)
// process - info about env where application is being executed

console.log(__dirname);

setInterval(() => {
    console.log('Hello world!');
}, 1000);