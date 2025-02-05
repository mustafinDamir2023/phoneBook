import express from 'express';
import { signInUserMiddleware } from '../middlewares/authMiddlewares';
import { Company } from '../../db/models';


const router = express.Router();

router.get('/signup', signInUserMiddleware, async (req, res) => {
  res.render('Layout');
});

router.get('/login', signInUserMiddleware, async (req, res) => {
  res.render('Layout');
});

router.get('/add/comp', async (req, res) => {
  res.render('Layout');
})

router.get('/my/comp', async (req, res) => {
  const allUserCompany = await Company.findAll({where: {user_id: req.session.user.id}})
  res.render('Layout', { allUserCompany });
})

export default router;
