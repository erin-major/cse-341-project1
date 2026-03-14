const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

/* ****************************************
 *  Deliver all contacts data
 * *************************************** */
async function getAllContacts(req, res) {
  const results = await mongodb.getDb().db().collection('contacts').find();
  results.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
}

/* ****************************************
 *  Deliver contact data by id
 * *************************************** */
async function getContactById(req, res) {
  const contactId = new ObjectId(req.params.id);
  const results = await mongodb.getDb().db().collection('contacts').find({ _id: contactId });
  results.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
}

/* ****************************************
 *  Add a contact
 * *************************************** */
async function createContact(req, res) {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (result.acknowledged) {
    res.status(201).json(result.insertedId);
  } else {
    res.status(500).json(result.error || 'An error occurred while creating the contact.');
  }
}

/* ****************************************
 *  Update a contact
 * *************************************** */
async function updateContact(req, res) {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .updateOne(
      { _id: contactId },
      {
        $set: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          favoriteColor: contact.favoriteColor,
          birthday: contact.birthday
        }
      }
    );
  if (result.modifiedCount === 1) {
    res.status(200).send();
  } else {
    res.status(500).json(result.error || 'An error occurred while updating the contact.');
  }
}

/* ****************************************
 *  Delete contact data by id
 * *************************************** */
async function deleteContactById(req, res) {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: contactId });
  if (result.deletedCount === 1) {
    res.status(200).send();
  } else {
    res.status(500).json(result.error || 'An error occurred while deleting the contact.');
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContactById
};
