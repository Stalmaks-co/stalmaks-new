<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const handleButtonClick = () => {
		goto('/#services');
	};

	let visible = false;

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				visible = true;
			}, 0);
		});
	});
</script>

<section class="relative overflow-hidden bg-black backdrop-blur-md">
	<picture class="relative h-full">
		<source srcset="baner2.webp" media="(max-width: 640px)" />
		<img
			src="baner.webp"
			alt="Obrazek przedstawia dźwig"
			class="xs:h-[50vh] h-[45vh] w-full object-cover sm:h-[220px] md:h-[250px] lg:h-[350px] xl:h-[500px] 2xl:h-[700px]"
		/>
	</picture>
	<div class="absolute inset-0 flex items-center justify-center text-white">
		<div
			class="-mt-4 flex flex-col items-center rounded-lg px-2 py-4 text-center sm:-mt-8 sm:px-6 sm:py-8"
		>
			{#if visible}
				<h1
					class="text-3xl leading-tight font-bold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
					in:fly={{ y: -40, duration: 500, delay: 100, opacity: 0 }}
				>
					Usługi ślusarskie i dźwigowe
				</h1>
				<p
					class="mt-2 text-sm leading-snug sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
					in:fly={{ y: 40, duration: 500, delay: 300, opacity: 0 }}
				>
					Hale, konstrukcje stalowe, schody, utrzymanie ruchu, przejścia technologiczne
				</p>
				<button
					onclick={handleButtonClick}
					in:fly={{ y: 60, duration: 500, delay: 600, opacity: 0 }}
					class="mt-6 flex flex-row items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-sm md:text-base lg:text-lg"
				>
					<p class="mr-2 text-base sm:text-lg md:text-xl lg:text-2xl">Sprawdź usługi</p>
					<Fa icon={faMagnifyingGlass} class="inline-block text-base sm:text-lg md:text-xl" />
				</button>
			{/if}
		</div>
	</div>
</section>
