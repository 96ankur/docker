const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',          // here we are using docker, thats why, "redis-server" is written
    port: 6379                    // for normal node-app we write the url
});
client.set('visits', 0);


app.get("/",(req, res)=>{
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}`);
        client.set('visits', parseInt(visits) +1)
    })
});

app.listen(8081, () => {
    console.log('Server listening on 8081');
})