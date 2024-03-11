// import {search} from '../repository/user.ts'

// export async function getAllUsers (ctx: any){
//     try {
//         const result = await search()
//         ctx.response.body = result.rows
//     } catch (error) {
//         console.log(error)
//     }
// }


export function getAllUsers (ctx: any){
    ctx.response.body='allusers'
    }