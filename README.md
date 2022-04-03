# mobula-js

Mobula JS client. 2 lines of code to get seamless meta-data about any crypto-token.

## Get started

First thing first, let's download Mobula JS.

`npm i mobula`

To get data from Mobula, use the `getData` function :

`const Mobula = require('mobula');
const mobula = new Mobula();
mobula.getData('0x557233e794d1a5fbcc6d26dca49147379ea5073c').then(console.log);`