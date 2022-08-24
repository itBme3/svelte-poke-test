<script>
    import Cell from "./Cell.svelte";
    export let row = {};
    export /**
* @type {any[]}
*/
     let columns = [];
</script>
<tr>
    {#if $$slots.default}
        <slot {row} {columns} />
    {:else if row}
        {#each columns as column}
            <Cell {row} {column} />
        {/each}
    {/if}
</tr>