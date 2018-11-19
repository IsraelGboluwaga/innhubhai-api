const express = require('express');
const router = express.Router();
const commands = require('./commands');

const ERROR = 'error';
const SUCCESS = 'success';

let genericResponseObject = {
    status: SUCCESS,
    data: 0
};

/* GET home page. */
router.get('/', (req, res) => {
    genericResponseObject.message = 'HAI';
    return res.json(genericResponseObject);
});

router.post('/:text', (req, res) => {
    const receivedText = req.params.text;
    const commandsArray = Object.keys(commands);

    if (commandsArray.indexOf(receivedText) == -1) {
        return res.json({
            status: ERROR,
            data: -1
        });
    }

    genericResponseObject.data = commands[receivedText];
    return res.json(genericResponseObject);
});

module.exports = router;
