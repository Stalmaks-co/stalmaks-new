<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		faMagnifyingGlass,
		faShoppingBasket,
		faArrowUpRightFromSquare,
		faXmark
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	// import Modal from './Modal.svelte';

	const handleClickSteel = () => {
		window.location.href = 'https://stalmaks.pl';
	};

	let modal = {
		title: '',
		shown: false,
		prop: ''
	};

	const handleMoreInfo = (name: string, prop: string) => {
		modal.title = name;
		modal.shown = true;
		modal.prop = prop;
	};

	const handleCloseModal = () => {
		modal.shown = false;
	};
</script>

<section
	class="mx-auto max-w-[90rem] space-y-10 px-2 py-6 sm:px-4 sm:py-8 lg:px-8 2xl:max-w-[95rem]"
>
	<div class="flex flex-col items-center justify-center">
		<h2
			class="xs:text-5xl mb-2 scroll-m-22 border-b-4 border-accent pb-4 text-center text-3xl font-bold sm:text-5xl md:text-6xl"
			id="services"
		>
			Nasze specjalizacje
		</h2>
	</div>
	<article class="grid h-fit grid-cols-1 gap-6 md:grid-cols-3">
		<div class="flex h-fit w-full flex-col overflow-hidden rounded-b-lg shadow-lg sm:h-[580px]">
			<img
				src="./services/stal.webp"
				alt="Konstrukcja stalowa"
				class="h-1/2 w-full rounded-t-lg object-cover"
			/>
			<div class="xs:p-4 flex h-fit flex-col justify-between bg-white p-3 text-secondary xl:h-1/3">
				<div>
					<h3 class="xs:text-2xl text-xl font-semibold sm:text-3xl">KONSTRUKCJE STALOWE</h3>
					<p class="xs:text-base mt-2 text-sm sm:text-lg">Produkujemy i montujemy:</p>
					<ul class="xs:text-base mb-2 ml-2 list-disc pl-5 text-sm sm:text-lg">
						<li>słupy, estakady, podesty, przejścia BHP</li>
						<li>stojaki, stoły, urządzenia przemysłowe</li>
						<li>ogrodzenia</li>
						<li>przesuwne bramy wjazdowe</li>
					</ul>
				</div>
				<div class="flex flex-row items-center gap-2">
					<button
						class="xs:px-4 mt-2 flex w-fit cursor-pointer flex-row items-center justify-center rounded-lg border-2 border-accent bg-accent px-3 py-2 text-white transition duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:py-2"
						onclick={() => {
							goto('/kontakt');
						}}
					>
						<p class="xs:text-lg mr-2 text-base sm:text-xl">Zamów</p>
						<Fa icon={faShoppingBasket} class="xs:text-base inline-block text-sm sm:text-lg" />
					</button>
				</div>
			</div>
		</div>
		<div class="flex h-fit w-full flex-col overflow-hidden rounded-b-lg shadow-lg sm:h-[580px]">
			<img
				src="./services/spawanie.webp"
				alt="Konstrukcja stalowa"
				class="h-1/2 w-full rounded-t-lg object-cover"
			/>
			<div class="xs:p-4 flex h-fit flex-col justify-between bg-white p-3 text-secondary xl:h-1/3">
				<div>
					<h3 class="xs:text-2xl text-xl font-semibold sm:text-3xl">SPAWANIE</h3>
					<p class="xs:text-base mt-2 text-sm sm:text-lg">
						Oferujemy usługi spawalnicze w zakresie spawania:
					</p>
					<ul class="xs:text-base mb-2 ml-2 list-disc pl-5 text-sm sm:text-lg">
						<li>stali nierdzewnej</li>
						<li>stali czarnej</li>
						<li>konstrukcji</li>
					</ul>
				</div>
				<div class="flex flex-row items-center gap-2 md:mt-6">
					<button
						class="xs:px-4 mt-2 flex w-fit cursor-pointer flex-row items-center justify-center rounded-lg border-2 border-accent bg-accent px-3 py-2 text-white transition duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:py-2"
						onclick={() => {
							goto('/kontakt');
						}}
					>
						<p class="xs:text-lg mr-2 text-base sm:text-xl">Zamów</p>
						<Fa icon={faShoppingBasket} class="xs:text-base inline-block text-sm sm:text-lg" />
					</button>
				</div>
			</div>
		</div>
		<div class="flex h-fit w-full flex-col overflow-hidden rounded-b-lg shadow-lg sm:h-[580px]">
			<img
				src="./services/dev.webp"
				alt="Konstrukcja stalowa"
				class="h-1/2 w-full rounded-t-lg object-cover"
			/>
			<div class="xs:p-4 flex h-fit flex-col justify-between bg-white p-3 text-secondary xl:h-1/3">
				<div>
					<h3 class="xs:text-2xl text-xl font-semibold sm:text-3xl">MONTAŻ I REMONTY URZĄDZEŃ</h3>
					<ul class="xs:text-base my-2 ml-2 list-disc pl-5 text-sm sm:text-lg">
						<li>montaż i konserwacja linii w zakładach produkcyjnych</li>
						<li>prace służące utrzymanie ruchu w zakładach produkcyjnych</li>
						<li>fundamenty / wylewki pod maszyny</li>
					</ul>
				</div>
				<div class="flex flex-row items-center gap-2">
					<button
						class="xs:px-4 mt-2 flex w-fit cursor-pointer flex-row items-center justify-center rounded-lg border-2 border-accent bg-accent px-3 py-2 text-white transition duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:py-2"
						onclick={() => {
							goto('/kontakt');
						}}
					>
						<p class="xs:text-lg mr-2 text-base sm:text-xl">Zamów</p>
						<Fa icon={faShoppingBasket} class="xs:text-base inline-block text-sm sm:text-lg" />
					</button>
				</div>
			</div>
		</div>
		<div
			class="flex h-fit w-full flex-col place-self-center overflow-hidden rounded-b-lg shadow-lg sm:h-[620px] md:col-start-2"
		>
			<img
				src="./services/dzwig.webp"
				alt="Konstrukcja stalowa"
				class="h-1/2 w-full rounded-t-lg object-cover"
			/>
			<div class="xs:p-4 flex h-fit flex-col justify-between bg-white p-3 text-secondary xl:h-1/3">
				<div>
					<h3 class="xs:text-2xl text-xl font-semibold sm:text-3xl">USŁUGI DZWIGOWE</h3>
					<p class="xs:text-base my-2 text-sm sm:text-lg">
						Oferujemy wynajem dźwigów wraz z operatorem na terenie Barlinka i okolic. Dysponujemy
						takimi maszynami jak:
					</p>
					<ul class="xs:text-base my-2 ml-2 list-disc pl-5 text-sm sm:text-lg">
						<li>Dźwig Liebherr LTM 1030</li>
						<li>Ładowarka Teleskopowa Komatsu WH714H</li>
						<li>Podnośnik przegubowy E450AJ</li>
					</ul>
				</div>
				<div class="flex flex-row items-center gap-2">
					<button
						class="xs:px-4 mt-2 flex w-fit cursor-pointer flex-row items-center justify-center rounded-lg border-2 border-accent bg-accent px-3 py-2 text-white transition duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:py-2"
						onclick={handleClickSteel}
					>
						<p class="xs:text-lg mr-2 text-base sm:text-xl">Przejdź</p>
						<Fa
							icon={faArrowUpRightFromSquare}
							class="xs:text-base inline-block text-sm sm:text-lg"
						/>
					</button>
				</div>
			</div>
		</div>
	</article>
</section>
