<script lang="ts">
	import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	const images = [
		{ src: 'img1.webp', alt: 'Image 1' },
		{ src: 'img2.webp', alt: 'Image 2' },
		{ src: 'img3.webp', alt: 'Image 3' },
		{ src: 'img4.webp', alt: 'Image 4' },
		{ src: 'img5.webp', alt: 'Image 5' },
		{ src: 'img6.webp', alt: 'Image 6' },
		{ src: 'img7.webp', alt: 'Image 7' },
		{ src: 'img8.webp', alt: 'Image 8' },
		{ src: 'img9.webp', alt: 'Image 9' },
		{ src: 'img10.webp', alt: 'Image 10' },
		{ src: 'img11.webp', alt: 'Image 11' },
		{ src: 'img12.webp', alt: 'Image 12' },
		{ src: 'img13.webp', alt: 'Image 13' },
		{ src: 'img14.webp', alt: 'Image 14' },
		{ src: 'img15.webp', alt: 'Image 15' },
		{ src: 'img16.webp', alt: 'Image 16' },
		{ src: 'img17.webp', alt: 'Image 17' },
		{ src: 'img18.webp', alt: 'Image 18' },
		{ src: 'img19.webp', alt: 'Image 19' },
		{ src: 'img20.webp', alt: 'Image 20' }
	];

	let modal = {
		src: '',
		shown: false
	};

	const showPicture = (src: string) => {
		modal.src = src;
		modal.shown = true;
	};
</script>

<svelte:head>
	<title>Stalmaks | Galeria realizacji</title>
</svelte:head>

<section
	class="mx-auto mt-8 max-w-[90rem] space-y-10 px-2 py-6 sm:px-4 sm:py-8 lg:px-8 2xl:max-w-[95rem]"
>
	<div class="flex flex-col items-center justify-center">
		<h2
			class="xs:text-5xl mb-2 scroll-m-22 border-b-4 border-accent pb-4 text-center text-3xl font-bold sm:text-5xl md:text-6xl"
			id="services"
		>
			Nasze realizacje
		</h2>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
		{#each images as image}
			<button
				type="button"
				on:click={() => showPicture(image.src)}
				class="h-48 w-full rounded-md border-0 bg-transparent p-0 shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
				style="aspect-ratio: 4/3;"
				aria-label={image.alt}
			>
				<img
					src={`/gallery/${image.src}`}
					alt={image.alt}
					class="pointer-events-none h-48 w-full rounded-md object-cover"
					draggable="false"
				/>
			</button>
		{/each}
	</div>

	{#if modal.shown}
		<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
			<div class="relative">
				<button
					class="absolute top-5 right-5 rounded-md bg-black/60 p-2 hover:bg-gray-800 focus:outline-none"
					on:click={() => (modal.shown = false)}
					on:keypress={() => (modal.shown = false)}
				>
					<Fa class="text-2xl text-white" icon={faXmarkCircle} />
				</button>

				<img
					src={`/gallery/${modal.src}`}
					alt="Podgląd zdjęcia"
					class="h-[70vh] max-h-full max-w-full rounded-md shadow-lg"
				/>
			</div>
		</div>
	{/if}
</section>
