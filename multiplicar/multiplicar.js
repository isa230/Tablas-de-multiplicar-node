//requiers

const fs = require('fs');

const colors = require('colors');



let listarTabla = (base, limite) => {


    console.log('======================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)

            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
            //console.log(`la tabla-${ base }.txt ha sido creada`);ç

        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}