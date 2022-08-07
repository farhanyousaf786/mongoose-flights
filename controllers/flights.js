module.exports = {
    new: newMovie
}

function newMovie(req, res) {

res.render('flights/new.ejs');

}