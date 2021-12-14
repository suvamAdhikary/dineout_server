const app = require('./index');


const connect = require('./configs/db');


app.listen(process.env.PORT || 6060, async () => {
    await connect();

    console.log(`listening on port ${process.env.PORT || 6060}`);
});