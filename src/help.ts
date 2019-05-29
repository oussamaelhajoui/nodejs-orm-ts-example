import yargs from "yargs";

const argv = yargs
    .option('user', {
        alias: 'u',
        description: 'the user to use for mysql',
        type: 'string',
        default: 'root'
    })
    .option('password', {
        alias: 'pass',
        description: 'the password to use for mysql',
        type: 'string',
        default: ''
    })
    .option('port', {
        alias: 'p',
        description: 'the port to use for the app',
        type: 'number',
        default: ''
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv.time) {
    console.log('The current time is: ', new Date().toLocaleTimeString());
}
if(argv.name){
    console.log(`name = ${argv.name}`)
}

export default argv;
