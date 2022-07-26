<script>
export /**
* @type {{ [x: string]: any; }}
*/
 let row;
export /**
* @type {{ key: string | number; }}
*/
 let column;
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
    td input {
        background-color: white;
        color: black;

    }
</style>