var config = require('./dbconfig');
const sql = require('mssql');

async function getRates(){
    try {
        let pool = await sql.connect(config);
        let fx = await pool.request().query("SELECT * FROM FX");
        return fx.recordsets;
    }
    
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getRates : getRates
}





