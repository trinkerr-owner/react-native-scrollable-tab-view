import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.get('/metrics', (_req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('# metrics placeholder\n');
});

export default router;