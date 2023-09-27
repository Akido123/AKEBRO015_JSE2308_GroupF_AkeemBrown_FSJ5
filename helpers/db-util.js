import { MongoClient } from "mongodb";

export async function connectDatabase(){
  const client = await MongoClient.connect('mongodb+srv://new-user-1:2P8RVyJwncj0hN1R@cluster0.uufo9ya.mongodb.net/events?retryWrites=true&w=majority');

  return client
}

export async function insertDocument(client, collection, document){
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result
}

export async function getAllDocuments(client, collection, sort){
  const db = client.db();

  const documents = await db
  .collection(collection)
  .find()
  .sort(sort)
  .toArray();

  return documents
}