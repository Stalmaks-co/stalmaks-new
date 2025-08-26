<script>
	import Fa from 'svelte-fa';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';
</script>

<section class="max-w-8xl px-2 py-8 sm:px-4 sm:py-12 lg:px-8">
	<div
		class="mx-auto w-full max-w-md rounded-lg bg-white p-4 text-center shadow-lg sm:max-w-lg sm:p-8 md:max-w-2xl"
	>
		<h2 class="xs:text-4xl mb-4 text-3xl font-bold text-secondary sm:text-5xl md:text-6xl">
			Skontaktuj się z nami
		</h2>
		<p class="xs:text-lg mb-6 text-base text-gray-600 sm:text-xl md:text-2xl">
			Jesteśmy gotowi odpowiedzieć na Twoje pytania i pomóc w wyborze najlepszego rozwiązania.
		</p>
		<button
			class="xs:text-lg mx-auto flex flex-row items-center justify-center rounded-md bg-accent px-4 py-2 text-base text-white transition duration-300 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-xl md:text-2xl"
			on:click={() => goto('/kontakt')}
		>
			<p>Skontaktuj się</p>
			<Fa icon={faPhone} class="xs:text-lg ml-2 text-base sm:text-xl" />
		</button>
	</div>
</section>
