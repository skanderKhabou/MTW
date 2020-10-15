const router = require('express').Router();
let Movie = require('../database-mongo/movieList');


router.get('/', (req, res) => {
    Movie.find()
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post(('/add'), (res, req) => {
    const moviename = req.body.moviename;
    const description = req.body.description;
    const releasedate = req.body.releasedate;
    const newMovie = new Movie({
        moviename,
        description,
        releasedate
    });

    newMovie.save()
    .then(() => res.json('new movie added'))
    .catch(err => res.status(400).json('Err ' + err))
})




router.post(('/wish'), (req, res) => {
    const moviename = req.body.moviename;
    const movie = Movie.findOne({ 'moviename': moviename });
    movie.save()
        .then(() => res.json('movie saved'))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router














