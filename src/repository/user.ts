import client from '../db.ts';

export async function search(params = {}){
return await client.execute('SELECT * from user')
}