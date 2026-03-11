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

module.exports = { getAllContacts, getContactById };
