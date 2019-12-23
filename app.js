// al principio poner todos los requieres

const argv = require('./config/yargs').argv;

const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // es donde se va a guardar todo lo de listar crear borrar etc , es ademas ._ que sale en la consola en primero en el argv

//y creo un switch que eva permitir la condicion de lo que 
// pongamos dentro de el

switch (comando) { // aqui vamos s declarar a comando , en  lo q queremos

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));

        break;

    default:
        console.log('comando no reconocido, escribe bien, pendejo ');
}

















//let argv2 = process.argv; tambien lo quite 

//este lo quitamos   console.log(argv.base); //este es el de yargs o el q muestra

// ya no lo necesitoo ; nconsole.log('limite', argv.limite); //este muestra el limite

//console.log(argv2); // y este es el de proceso, tarde en quitar 

//let parametro = argv[2];
//let base = parametro.split('=')[1]


/*crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${ archivo }`))
    .catch(e => console.log(e));*/


























/*let data = ''; codigo el principio


for (let i = 1; i <= 10; i++) {
data += `${base} * ${i} = ${base * i} \n`;
}


//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

if (err) throw err;

console.log(`la tabla-${ base }.txt ha sido creada`);
});*/