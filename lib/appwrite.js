import { Client, TablesDB } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

export const tablesDB = new TablesDB(client);

export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;

export const ABOUT_TABLE_ID = "about";
