'use strict';;let nodegit;_fff‍.w('nodegit',[["default",function(v){nodegit=v}]]);let fs;_fff‍.w('fs',[["default",function(v){fs=v}]]);let child_process;_fff‍.w('child_process',[["default",function(v){child_process=v}]]);







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
  let text = req.body.text;
  fs.readFile('./doc/doc.txt', (err, data) => {
    if (err) return res.json(err);
    if (text === data) return res.end(null);

    fs.writeFile('./doc.doc.txt', text, (err, data) => {
      if (err) return res.json(err);
      res.json({ok: true});
    });
  });
}

_fff‍.d({
  get,
  edit
});
