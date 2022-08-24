<script>
import Row from "./Row.svelte";
export /**
* @type {any[]}
*/
 let rows = [];
export /**
* @type {any[] | undefined}
*/
 let columns = [];

</script>
<tbody>
    {#if $$slots.default}
        <slot {rows} {columns} />
    {:else}
        {#each rows as row}
            <Row {row} {columns} />
        {/each}
    {/if}
</tbody>