const { port } = require('./secret/secert');
const app = require('./app');

app.listen(port, () => (
    console.log('Server is running on', port)
));