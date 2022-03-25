const config = {
    user :'sa',
    password :'wavetec',
    server:'127.0.0.1',
    database:'WavetecCMS',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 1433
}

module.exports = config;