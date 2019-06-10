const knex= require('knex');
const router = require('express').Router();


const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename:'./data/uandp.db3',
    },
    useNullAsDefault: true,
};

const db = knex(knexConfig);


router.get('/', (req, res) => {
  db('updata')
    .then(updata => {
      res.status(200).json(updata);
  })
  .catch(error => {
      res.status(500).json(error);
  });
});



router.get('/:id', (req, res) => {
    
    res.send('Write code to retrieve a role by id');
  });
  
  router.post('/', (req, res) => {
    db('updata').insert(req.body, 'username')
      .then(usernames => {
        res.status(201).json(username);
      }).catch(error => {
        res.status(500).json(error);
      })
    
  });
  
  router.put('/:id', (req, res) => {
   
    res.send('Write code to modify a role');
  });
  
  router.delete('/:id', (req, res) => {
   
    res.send('Write code to remove a role');
  });
  
  module.exports = router;
  
