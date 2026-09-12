// Base de datos en memoria
const characters = [];

const index = (req, res) => {
    res.render("marvel", { characters });
};

const saveCharacter = (req, res) => {
    // Captura de los 5 campos requeridos
    const { nombre, nombreReal, equipo, poder, universo } = req.body;
    
    // Guardar en la lista en memoria
    characters.push({ nombre, nombreReal, equipo, poder, universo });
    
    // Redirigir a la vista de Marvel
    res.redirect('/marvel');
};

const marvelController = {
    index,
    saveCharacter
};

module.exports = marvelController;