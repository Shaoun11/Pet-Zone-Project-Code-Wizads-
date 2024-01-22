
export default async function detailsdatapet(_id){

    const result =await fetch(`https://pet-zone-project-next-js.vercel.app/petdata/${_id}`)

    return result.json()
}