const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set( 'view engine', 'ejs')
app.listen(port)

app.use('/assets', express.static('style') )


app.get( '/', (req, res)=>{
    res.render('index')
})

app.get( '/contact', urlencodedParser, (req, res) => {
    res.render('contact', {data: req.body})
})


app.get( '/profile/:name', ( req, res) => {
    const data = {
        person: req.params.name,
        job: 'The best software engineer in the World',
        likes: [ "coffee", "tea", "travelling", "programming" ]
    }
    console.log(req.url)
    res.render('profile', { data })
})

app.post( '/contact', urlencodedParser, ( req, res ) => {
    // console.log( req.body )
    res.render('contact-success', { data : req.body })
})