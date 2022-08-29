
/** @type {import('./__types/[slug]').RequestHandler} */
export async function GET({ params }:{params:any}) {
    let ERROR:any;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`)
    .then(res => res?.json() || null)
    .catch(err => ERROR = err)
  if (pokemon) {
    return {
      status: 200,
      headers: {},
      body: { ...pokemon }
    };
  }
  if(ERROR) {
      return { status: 500, ...ERROR }
  }
  return {
    status: 404
  };
}