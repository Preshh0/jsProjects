const fs = require('fs');
const http = require('http');
const url = require('url'); //used for routing; to be sure what path the user is going to in the website. 
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`, 
    'utf-8'
);
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`, 
    'utf-8'
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`, 
    'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);


const server = http.createServer((req, res) => {
    const { query, pathName } = url.parse(req.url, true);

    //Overview Page
    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    //Product page
    }else if (pathName === '/product'){
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    //API
    }else if(pathName === '/api') {
        res.writeHead(200, { 
            'Content-type': 'application/json'
        });
        res.end(data);
    
    //NOT FOUND
    } else {  
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1> Page not found! </h1>');
    }
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening to requests on port 8000');
});