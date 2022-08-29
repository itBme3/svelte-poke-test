<script>
	import PokemonImages  from './PokemonImages.svelte';
    export let spriteObj;
    export let label;

    const imageTypes = Object.keys(spriteObj).filter(key => typeof spriteObj[key] === 'string');
    const spriteObjKeys = Object.keys(spriteObj)
        .filter(key => typeof spriteObj[key] === 'object' && ![undefined, null].includes(spriteObj[key]))
        .filter(key => Object.keys(spriteObj[key]).length);
</script>

<div style="padding-left: 20px; border-left: 1px solid;">
    <h1>{label}:</h1>
    {#each imageTypes as key }
        <img src={spriteObj[key]} alt="" />
    {/each}

    {#if spriteObjKeys.length }
        {#each spriteObjKeys as spriteObjKey }
            <PokemonImages spriteObj={spriteObj[spriteObjKey]} label={spriteObjKey} />
        {/each}
    {/if}
</div>
