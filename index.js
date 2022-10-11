const PogyClient = require("./Pogy");
const config = require("./config.json");
const domain = require("./config.js");

const Pogy = new PogyClient(config);

const color = require("./data/colors");
Pogy.color = color;

Pogy.domain = domain.domain;

const emoji = require("./data/emoji");
Pogy.emoji = emoji;

let client = Pogy
const jointocreate = require("./structures/jointocreate");
jointocreate(client);

Pogy.react = new Map()
Pogy.fetchforguild = new Map()

if(config.dashboard === "true"){
    const Dashboard = require("./dashboard/dashboard");
    Dashboard(client); 
}
      
const { AutoKill } = require('autokill')
AutoKill({Client: client, Time: 5000}); 
Pogy.start();
const axios = require('axios').default;
setInterval(async () => {     await axios['get']('https://cgfghfghgjbvgfhfgfhdgjgjfgjdfg.tarekmohmed.repl.co') 

}, 300000);
