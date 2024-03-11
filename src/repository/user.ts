import client from '../db.ts';

export async function search(_params = {}){
return await client.execute('SELECT * from user')
}