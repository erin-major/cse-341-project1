const router = require('express').Router();
const contactsController = require('../controllers/contactsController');
const contactValidation = require('../middleware/contact-validation');

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);
router.post('/', contactValidation.saveContact, contactsController.createContact);
router.put('/:id', contactValidation.saveContact, contactsController.updateContact);
router.delete('/:id', contactsController.deleteContactById);

module.exports = router;
