import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Bem-vindo ao backend em node!' })
});

router.get('/test', (req: Request, res: Response) => {
  res.json({ mensagem: 'Test router funcionando!' });
});

export default router;
