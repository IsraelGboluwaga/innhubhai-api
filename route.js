const express = require('express');
const router = express.Router();
const commands = require('./commands');

const ERROR = 'error';
const SUCCESS = 'success';

/* GET home page. */
router.get('/', (req, res) => {
    res.json({status: 'success', message: 'HAI'});
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

    return res.json({
        status: SUCCESS,
        data: commands[receivedText]
    });

});

module.exports = router;
