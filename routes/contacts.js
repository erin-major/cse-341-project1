const router = require('express').Router();
const contactsController = require('../controllers/contactsController');

router.get(
  '/',
  (req, res, next) => {
    // #swagger.summary = 'Get all contacts'
    // #swagger.description = 'Endpoint to get all contacts from the database.'
    next();
  },
  contactsController.getAllContacts
);

router.get(
  '/:id',
  (req, res, next) => {
    // #swagger.summary = 'Get a contact by ID'
    // #swagger.description = 'Endpoint to get a single contact by its ID.'
    next();
  },
  contactsController.getContactById
);

router.post(
  '/',
  (req, res, next) => {
    // #swagger.summary = 'Create a new contact'
    // #swagger.description = 'Endpoint to create a new contact in the database.'
    next();
  },
  contactsController.createContact
);

router.put(
  '/:id',
  (req, res, next) => {
    // #swagger.summary = 'Update a contact by ID'
    // #swagger.description = 'Endpoint to update an existing contact by its ID.'
    next();
  },
  contactsController.updateContact
);

router.delete(
  '/:id',
  (req, res, next) => {
    // #swagger.summary = 'Delete a contact by ID'
    // #swagger.description = 'Endpoint to delete a contact from the database by its ID.'
    next();
  },
  contactsController.deleteContactById
);

module.exports = router;
