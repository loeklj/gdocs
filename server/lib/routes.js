import Router from 'express';
import doc from './doc';

const router = new Router();

router.get('/doc', doc.get)
      .put('/edit', doc.edit);
      // .post('/create', doc.create);

export default router;
