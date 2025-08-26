<script context="module">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const handleClick = () => {
		goto('/');
	};
</script>

<main class="mx-auto flex h-screen max-w-7xl p-2 sm:p-4 items-center justify-center">
	<div class="rounded-lg bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl p-4 sm:p-8 text-center shadow-lg">
		<h1 class="mb-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold break-words">{page.status} {page.error?.message}</h1>
		<p class="mb-2 text-base xs:text-lg sm:text-xl">Wygląda na to że wystąpił błąd.</p>
		<p class="mb-4 text-base xs:text-lg sm:text-xl font-light">
			Jeżeli uważasz że, błąd znajduję się po naszej stronie, skontaktuj się z nami.
		</p>
		<button
			onclick={handleClick}
			class="bg-accent mx-auto flex flex-row items-center justify-center rounded-md px-4 py-2 sm:px-6 sm:py-3 text-white text-base xs:text-lg sm:text-xl transition duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
		>
			<p>Wróć do strony głównej</p>
		</button>
	</div>
</main>
