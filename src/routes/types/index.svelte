<script lang="ts">
	import { page } from '$app/stores';
	import * as customTypes from '../../components/types/md';
	const typesMd: any = customTypes;
</script>

{#each Object.keys(typesMd) as customType}
	<svelte:component this={typesMd[customType]} />
{/each}
