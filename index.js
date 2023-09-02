const { port } = require('./secret/secert');
const app = require('./app');
const connectDB = require('./config/connectDB');

app.listen(port, async () => {
    console.log('Server is running on', port);
    await connectDB()
});

