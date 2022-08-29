<script>
    export let pokemons = [];
</script>


<div>
    {#each pokemons as pokemon }
        
        <a href={`/pokemon/${pokemon.name}`}>
            { pokemon.name }
        </a>
    {/each}
</div>

<style>
    a {
        display: block;
        width: 200px;
        height: auto;
        padding: 1rem;
        text-align: center;
        float: left;
    }
</style>