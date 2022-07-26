/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150').then(res => res.json()).catch(err => err)
    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        pokemons: [...pokemons.results]
      }
    };
  }