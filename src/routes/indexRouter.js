import express from 'express';
import { Company } from '../../db/models';
 

const router = express.Router();

router.get('/', async (req, res) => {
  const allCompany = await Company.findAll()
  res.render('Layout', {allCompany});
});

export default router;
