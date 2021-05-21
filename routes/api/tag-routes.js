const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// this one is broken for some reason not sure why But I will 
// I am getting a 500 error so it is an issue with the server
// not the code I GUESS
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.perams.id, {
      include: [{ model: ProductTag, through: Product, as: 'tag_data' }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No data found'})
      return
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
