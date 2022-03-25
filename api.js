const dboperations = require('./dboperations');
var Rate = require('./rate');

var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();


app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/apiv2', router);

router.use((request, response, next) => { 
    console.log('middleware'); 
    next(); 
});


router.route('/rates').get((request, response) => {
    dboperations.getRates().then(result => {
        response.json(result[0]);
    })
})

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Rates API is runnning at ' + port);


