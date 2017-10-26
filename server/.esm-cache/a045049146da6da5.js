let Router;_46d‍.w('express',[["default",function(v){Router=v}]]);let doc;_46d‍.w('./doc',[["default",function(v){doc=v}]]);


const router = new Router();

router.get('/doc', doc.get)
      .put('/edit', doc.edit)
      .post('/create', doc.create);

_46d‍.d(router);
