const router = require('express').Router();
const fs = require('fs');

const path = require('path');
let notes = require('../db/db.json');

// router.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });
router.get('/notes', (req, res) => {
	res.json(notes);
});

// router.post('/notes', (req, res) => {
// 	// notes = JSON.parse(notes);
// 	console.log(notes);
// 	console.log(req.body)
// 	let Note = {
// 		title: req.body.title,
// 		text: req.body.text,
// 	};
// 	notes.push(Note);
// 	fs.writeFileSync('../db/db.json', JSON.stringify(notes));
// 	res.json(notes);

// });
router.post('/notes', (req, res) => {
    let notes = fs.readFileSync('db/db.json');
    notes = JSON.parse(notes);
    let Note = {
        title: req.body.title,
        text: req.body.text,
    };
    notes.push(Note);
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(notes);

});

module.exports = router;