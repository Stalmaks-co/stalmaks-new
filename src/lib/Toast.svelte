<script>
	import Fa from 'svelte-fa';
	import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
	import { fly } from 'svelte/transition';

	export let type = 'error'; // 'success' or 'error'
</script>

<div
	in:fly={{ x: -100, duration: 300 }}
	out:fly={{ x: -100, duration: 300 }}
	class="fixed bottom-4 left-4 z-50 flex flex-row items-center gap-2 rounded-lg bg-white p-4 shadow-lg"
>
	{#if type === 'success'}
		<div class="flex items-center gap-2 rounded-lg bg-green-500 p-3 text-2xl text-white">
			<Fa icon={faCircleCheck} />
		</div>
	{:else if type === 'error'}
		<div class="bg-accent flex items-center gap-2 rounded-lg p-3 text-2xl text-white">
			<Fa icon={faCircleXmark} />
		</div>
	{/if}
	<p class="text-neutral text-xl font-medium">
		<slot />
	</p>
</div>
