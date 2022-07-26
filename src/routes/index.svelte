<script>
    import Table from "../components/Table.svelte";
    import TableBody from "../components/TableBody.svelte";
    import TableRow from "../components/TableRow.svelte";
    import TableCell from "../components/TableCell.svelte";
    import {rows, columns} from '../utils/data'
    let noSlots = false
    $: console.log('UPDATED ROWS', rows)
</script>
<label><input type="checkbox" bind:checked={noSlots} /> no slots</label>
{#if noSlots}
    <Table {rows} {columns} />
{:else}
    <Table>
        <TableBody>
            {#each rows as row, index}
                {#if [0,2,4,6].includes(index)}
                    <TableRow>
                        {#each columns as column}
                            {#if ['col2', 'col4'].includes(column.key) || (column.key === 'col3' && index === 4)}
                                <TableCell {row} {column}>
                                    <input type="text" style={`width: auto; max-width: ${rows[index][column.key].length * 1.2}ch`} bind:value={rows[index][column.key]} />
                                </TableCell>
                            {:else}
                                <TableCell {row} {column} />
                            {/if}
                        {/each}
                    </TableRow>
                {:else}
                    <TableRow {row} {columns} />
                {/if}
            {/each}
        </TableBody>
    </Table>
{/if}
<pre><code>{JSON.stringify(rows, null, 4)}</code></pre>