const TOKEN = process.env.DATO_TOKEN

export async function cmsService({
  query
}) {
  try {
    const pageContentResponse = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query,

      })
    })
      .then(async (respsotaDoServer) => {
        const body = await respsotaDoServer.json()
        if (!body.errors) return body
        throw new Error(JSON.stringify(body))
      })

    // console.log('pageContentResponse', pageContentResponse) 
    return {
      data: pageContentResponse.data
    }
  } catch (err) {
    console.log(err)
  }

}