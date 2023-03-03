const { Router } = require('express');
const { createUserController, addContactListUserController, getContactListUserController, deleteContactListUserController } = require('../controllers/user.controllers');

const router = Router();

router.post('/', createUserController);
router.post('/addContactList', addContactListUserController);
router.get('/getContactList', getContactListUserController);
router.delete('/deleteContactList', deleteContactListUserController)

module.exports = router;