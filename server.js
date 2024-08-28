const express = require('express');
const path = require('path');
const app = express();

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la carpeta 'locales' para servir archivos estáticos
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
