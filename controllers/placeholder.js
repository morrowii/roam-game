
module.exports = app => {

    app.get('/test', (req, res) => {
        res.send('Received server response.');
    });

}
