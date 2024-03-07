const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,registerUser } = require('../controllers/authcontroller');

//middelware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)


router.post('/SignUp',registerUser)

module.exports = router;