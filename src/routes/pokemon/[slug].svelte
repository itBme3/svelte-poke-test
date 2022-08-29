<script>
import PokemonImages from "../../components/PokemonImages.svelte";



    export let pokemon;
</script>
<PokemonImages spriteObj={pokemon.sprites} label="Default" />