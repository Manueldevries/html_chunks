const https = require('https')
const fs = require('fs')

https.get('https://www.mariannemelodie.fr/nouveautes-u67', res => {

  let data = [];
  res.on('data', chunk => {
    // data.push(chunk);
    data = [...data, chunk]
  });

  res.on('end', () => {
    console.log('Response ended!');
    const page = Buffer.concat(data).toString();
    fs.writeFileSync('data.html', page)
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});