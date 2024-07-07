import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
  .setProject('YOUR_PROJECT_ID'); // Your project ID

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
