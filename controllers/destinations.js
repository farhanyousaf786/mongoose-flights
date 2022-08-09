
module.exports = {
    create,

}

function create(req, res) {

    console.log(req.params.id, "<------ params movie id");

    console.log(req.body, "<------ the content of the form aka destinations");

    // res.redirect('/flights/62f029c578576692d3636ccf')

    res.redirect('/flights/${req.params.id}')

}