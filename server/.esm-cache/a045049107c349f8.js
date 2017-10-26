let Router;_07c‍.w('express',[["default",function(v){Router=v}]]);let doc;_07c‍.w('./doc',[["default",function(v){doc=v}]]);


const router = new Router();

router.get('/doc', doc.get)
      .put('/edit', doc.edit);
      // .post('/create', doc.create);

_07c‍.d(router);
