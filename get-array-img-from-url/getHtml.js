import https from 'https'
import fs from 'fs'
import { JSDOM } from 'jsdom'

function getHtml(url, output, selector) {
  return new Promise(function (resolve, reject) {
    return https.get(url, res => {
      let data = [];
      res.on('data', chunk => { data = [...data, chunk] });

      return res.on('end', () => {
        console.log('Response ended!');
        const page = Buffer.concat(data).toString();
        fs.writeFileSync('data.html', page)

        return writeJsonData(output, selector)
          .then((r) => {
            console.log(`${output}.json is ready`)
            return resolve()
          })
      });
    }).on('error', err => {
      reject(
        console.log('Error: ', err.message)
      )
    });
  })
}

export default getHtml

function writeJsonData(name, selector) {
  return new Promise(function (resolve, reject) {
    JSDOM.fromFile('data.html', {})
      .then(dom => {
        // console.log(dom.window.document.querySelectorAll('img[src*="/blocs/"]')[0].src);
        // console.log('hello', dom.window.document.querySelectorAll(selector)[0]);
        return dom.window.document.querySelectorAll(selector)
      })
      .then(res => {
        console.log(res.length);
        const array = [...res].map(i => `${i.src}`);
        fs.writeFileSync(`${name}.json`, JSON.stringify(array, null, 2), null)
      })
      .then(() => resolve())
      .catch(e => reject(console.log(e)))

  })
}
