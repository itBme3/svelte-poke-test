<script>

    import TableBody from "./TableBody.svelte";
    export /**
* @type {any[] | undefined}
*/
     let rows = [];
    export /**
* @type {any[] | undefined}
*/
     let columns = [];
</script>
    
    {#if $$slots.default}
        <slot />
    {:else}
        <TableBody {rows} {columns} />
    {/if}


<style>
    td input {
        background-color: white;
        color: black;
        max-width: 3ch;
        display: inline-block;
    }
</style>