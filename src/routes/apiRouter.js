import express from 'express';
import { Company, Sequelize, User } from '../../db/models';

const router = express.Router();

router.post('/add', async (req, res) => {
  const { name, phone } = req.body;
  try {
    const comp = await Company.create({ name, phone, user_id: req.session.user.id });
    res.send(comp);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const comp = await Company.findByPk(req.params.id);
    if (comp.user_id !== req.session.user.id) {
      res.sendStatus(401).json({ message: 'company not yours' });
      return;
    }
    if (!comp) {
      res.status(404).json({ message: 'company not found' });
    }
    await comp.destroy();
    res.json({ message: 'company deleted' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const data = req.body;
    const comp = await Company.findByPk(req.params.id);
    if (comp.user_id !== req.session.user.id) {
      res.sendStatus(401).json({ message: 'company not yours' });
      return;
    }

    if (!comp) {
      res.status(404).json({ message: 'company not found' });
      return;
    }

    await Company.update(data, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/use/search', async (req, res) => {
  const { input } = req.body;
  try {
    const routes = await Company.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${input}%`,
        },
      },
      include: {
        model: User,
        attributes: ['id', 'name'],
      },
    });
    res.send(routes);
  } catch (err) {
    console.log(err);
  }
});

router.get('/use', async (req, res) => {
  const routes = await Company.findAll({
    include: {
      model: User,
      attributes: ['id', 'name'],
    },
  });
  res.send(routes);
});

export default router;
