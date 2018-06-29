var dns = require('dns');

var url = 'www.mum.edu';
var ipaddress = dns.resolve4(url, function(err,address)
{
    if(err){
        console.log(err);
    }
    else{
        console.log('Resolved dns address: '+address);
    }

});

const {promisify} = require('util');
const myPromise = promisify(dns.resolve4);

myPromise (url)
        .then((address)=>{console.log('Inside promise function: '+address)})
        .catch((err)=>{console.log(err)});


async function myAsyncDnsFunction(){
    try{
        var add3 = await myPromise(url);
        console.log('Inside Async Function: '+add3);
    }catch(err){
        console.log(err);
    }
}
myAsyncDnsFunction();