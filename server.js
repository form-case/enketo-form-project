const express = require('express');
const path = require('path');
const app = express();

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la carpeta 'locales' para servir archivos estáticos
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// Ruta adicional para manejar la solicitud del xform desde el frontend
app.get('/transform/xform', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'transform', 'xform', 'fC6DX8UU')); 
    // Asegúrate de que el archivo fC6DX8UU.xml esté en la ruta correcta dentro de 'public/transform/xform/'
});

// Ruta para manejar la solicitud POST del xform desde el frontend
app.post('/transform/xform', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'transform', 'xform', 'fC6DX8UU'));
});


// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
