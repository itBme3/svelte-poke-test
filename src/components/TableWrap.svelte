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
<table>
    {#if $$slots.default}
        <slot {rows} {columns} />
    {:else if rows && columns}
        <TableBody {rows} {columns} />
    {/if}
</table>