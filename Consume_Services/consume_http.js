var Http = require('http');

var req = Http.request({
    host: '192.168.5.8',
    // proxy IP
    port: 3128,
    // proxy port
    method: 'GET',
    path: 'http://vanamco.com/ghostlab/' // full URL as path
}, function (err,res) {
  if(err){
    console.log('erro accessando site');
  }else{
    res.on('data', function (data) {
        console.log(data.toString());
    });
  }
});

req.end();
