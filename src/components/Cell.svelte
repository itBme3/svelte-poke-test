<script>
export /**
* @type { any }
*/
 let row = undefined;
export /**
* @type { any }
*/
 let column = undefined;
</script>
<td>
    {#if $$slots.default}
    <slot {row} {column} />
    {:else}
    {row[column.key]}
    {/if}
</td>

<style>
    td {
        border: 1px solid;
        padding: .25rem;
        background-color: black;
        color:white;
    }
</style>