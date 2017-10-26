let Router;_a70‍.w('express',[["default",function(v){Router=v}]]);let doc;_a70‍.w('./doc',[["default",function(v){doc=v}]]);


const router = new Router();

router.get('/doc', doc.get)
      .put('/edit', doc.edit);
      // .post('/create', doc.create);

_a70‍.d(router);
