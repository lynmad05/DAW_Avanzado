const router = require('express').Router();

router.get('/', (req, res) => res.render('index'));
router.get('/nosotros', (req, res) => res.render('nosotros'));
router.get('/contactenos', (req, res) => res.render('contactenos'));
router.get('/servicios', (req, res) => res.render('servicios'));

module.exports = router;