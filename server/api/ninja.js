export default defineEventHandler(async (event) => {
  

    //handle query params
    // const { name } = getQuery(event)

    //handle post data
    // const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('http://api.currencyapi.com/v3/latest?apikey=cur_live_IIzfhuhTjrpeSrE30iux9jBUBh3vHLJPK9Jk5qbH')
    
    return data
    
})