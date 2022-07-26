<script>
    import TableCell from "./TableCell.svelte";
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
            <TableCell {row} {column} />
        {/each}
    {/if}
</tr>