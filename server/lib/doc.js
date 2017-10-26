'use strict';

import nodegit from 'nodegit';
import fs from 'fs';
import child_process from 'child_process';



function get(req, res){
  console.log('create method');
  let exists = fs.existsSync('./doc');
  if (!exists) {
    fs.mkdir('./doc', (err) => {
      if (err) return res.json(err);

      fs.writeFile('./doc/doc.txt', '', (err) => {
        res.end('');
      });
    });
  } else {
    fs.readFile('./doc/doc.txt', (err, data) => {
      if (err) return res.json(err);
      res.end(data);
    });
  }
  // res.end()
}

// function get(req, res){
//
//   console.log('get method');
//   res.end()
//
// }

function edit(req, res){
  console.log('edit method');
  res.end()

}

export default {
  get,
  edit
};
