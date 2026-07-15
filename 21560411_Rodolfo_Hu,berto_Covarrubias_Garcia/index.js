const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get("/pagina", (req, res) => {
    const nombre = "Rodolfo covarrubias";
    res.send(`
        <style>
        .p1 {
            color:Blue;
            background: yellow;
        }
        </style>
        <h1>mi pagina web</h1>
        <p class="p1"> creada con express</p>
        <p>Hola ${nombre}</p>`)
});

app.get('/par/:num', (req, res) => {
    const num = Number(req.params.num);
    if (num % 2 === 0) {
        res.send(`El numero ${num} es par`);
    } else {
        res.send(`El numero ${num} es impar`);
    }
});

app.get('/edad/:edad', (req, res) => {
    const edad = Number(req.params.edad);
    if (edad >= 18) {
        res.send(`Tu edad es ${edad}, Eres mayor de edad`);
    } else {
        res.send(`Tu edad es ${edad}, Eres menor de edad`);
    }
});

app.get('/calculadora/:operacion/:num1/:num2', (req, res) => {
    const operacion = req.params.operacion;
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                res.send('Error: No se puede dividir entre cero');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            res.send('Operación no válida');
            return;
    }

    res.send(`El resultado de la ${operacion} es: ${resultado}`);
});
app.get('/tabla/:num', (req, res) => {
    const num = Number(req.params.num);
    let tabla = `<h1>Tabla de multiplicar del ${num}</h1>`;
    for (let i = 1; i <= 10; i++) {
        tabla += `<p>${num} x ${i} = ${num * i}</p>`;
    }
    res.send(tabla);
});
app.get('/calificacion/:calificacion', (req, res) => {
    const calificacion = Number(req.params.calificacion);
    let mensaje;

    if (calificacion >= 90) {
        mensaje = 'Excelente';
    } else if (calificacion >= 80) {
        mensaje = 'Muy bien';
    } else if (calificacion >= 70) {
        mensaje = 'Aprobado';
    } else if (calificacion < 70) {
        mensaje = 'Reprobado';
    }
    res.send('tu calificacion es: ' + calificacion + ' por lo tanto tienes una calificaccion' + mensaje);
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});