const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({"hello":"hi"}));


module.exports = router;