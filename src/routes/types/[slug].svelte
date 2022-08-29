<script lang="ts">
	import { page } from '$app/stores';
	import * as customTypes from '../../components/types/md';
</script>

<svelte:component this={customTypes[$page.params.slug]} />
