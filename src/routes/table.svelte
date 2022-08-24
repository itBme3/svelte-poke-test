<script>
    import Table from "../components/Table.svelte";
    import TableBody from "../components/TableBody.svelte";
    import Row from "../components/Row.svelte";
    import Cell from "../components/Cell.svelte";
    import {rows, columns} from '../utils/data'
    let hasSlots = true
    let loaded = false
    $: !loaded ? loaded = true : console.log('UPDATED ROWS', rows)
</script>
<label><input type="checkbox" bind:checked={hasSlots} /> slots</label>
{#if !hasSlots}
    <Table {rows} {columns} />
{:else}
    <Table>
        <TableBody>
            {#each rows as row, index}
                {#if [0,2,4].includes(index)}
                    <Row>
                        {#each columns as column}
                            {#if ['col1', 'col2'].includes(column.key) || (column.key === 'col0' && index === 4)}
                                <Cell>
                                    <input type="text" style={`width: auto; max-width: ${rows[index][column.key].length * 1.2}ch`} bind:value={rows[index][column.key]} />
                                </Cell>
                            {:else}
                                <Cell {row} {column} />
                            {/if}
                        {/each}
                    </Row>
                {:else}
                    <Row {row} {columns} />
                {/if}
            {/each}
        </TableBody>
    </Table>
{/if}
<pre><code>{JSON.stringify(rows, null, 4)}</code></pre>