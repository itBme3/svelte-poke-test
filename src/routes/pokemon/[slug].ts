
/** @type {import('./__types/[slug]').RequestHandler} */
export async function GET({ params }:{params:any}) {
    let ERROR:any;
  const pokemon = await fetch(`http://127.0.0.1:5173/pokemon/${params.slug}.json`)
    .then(res => res?.json() || null)
    .catch(err => ERROR = err);
    console.log(pokemon)
  if (pokemon) {
    return {
      status: 200,
      headers: {},
      body: { pokemon }
    };
  }
  if(ERROR) {
      return { status: 500, ...ERROR }
  }
  return {
    status: 404
  };
}