// @ts-nocheck
export async function get({request}) {
  // process the URL into a more usable format
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)

  // set up a response object
  const data = {
    value: params.get('value'),
  };

  console.log("backend",data.value)
  
  // return the response
  return new Response(JSON.stringify(data), {
    status: 200
  }); }