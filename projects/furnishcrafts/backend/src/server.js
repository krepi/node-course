import './config/config.js'
import app from './api/v1/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})