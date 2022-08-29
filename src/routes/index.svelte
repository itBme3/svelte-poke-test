<script lang="ts">
	import { Table } from '@madhive/wingsuit';
	const columns = [
		{ key: 'c1', title: 'First Column' },
		{ key: 'c2', title: 'Second Column' },
		{ key: 'c3', title: 'Third Column' }
	];
	const rows: any = [
		{ id: '1', c1: 'r1:c1', c2: 'r1:c2', c3: 'r1:c3' },
		{ id: '2', c1: 'r2:c1', c2: 'r2:c2', c3: 'r2:c3' },
		{ id: '3', c1: 'r3:c1', c2: 'r3:c2', c3: 'r3:c3' }
	];
</script>

<Table.Table {rows} {columns}>
	<Table.Cell clickable={true} slot="cell" {row} {col} let:row let:col let:rowIndex>
		<input bind:value={rows[rowIndex][col.key]} />
	</Table.Cell>
</Table.Table>
