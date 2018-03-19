server.get('/user', function(req, res, next) {
    return res.status(200).json({
        code: 1,
        message: 'OK',
        data: users
    })
});