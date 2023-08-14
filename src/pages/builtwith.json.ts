// Outputs: /builtwith.json
// @ts-nocheck
import User from './db.js';

export async function get({request}) {
  // process the URL into a more usable format
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)

  // set up a response object
  const data = {
    value: params.get('value'),
  };

  console.log("backend",data.value)

    // Guardar el valor en la base de datos  Lo comento para haer pruebas tranquilamente
   /* try {
      const user = await User.create({ value: data.value });
      console.log(user);
    } catch (err) {
      console.error(err);
    }
    */
 
  // return the response
  return new Response(JSON.stringify(data), {
    status: 200
  }); }