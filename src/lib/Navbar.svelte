<script>
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { fly } from 'svelte/transition';

	let mobileMenu = false;
	const toggleMenu = () => {
		mobileMenu = !mobileMenu;
	};

	const closeMenu = () => {
		mobileMenu = false;
	};
</script>

<nav class="sticky top-0 left-0 z-40 border-b-4 border-accent bg-black text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between md:h-20">
			<a href="/" class="flex items-center">
				<img src="/logo.png" alt="Logo" class="z-10 h-12 w-auto md:mt-20 md:h-22 lg:h-28 xl:h-32" />
			</a>

			<button onclick={toggleMenu} class="md:hidden">
				<Fa icon={faBars} class="text-2xl md:hidden" />
			</button>
			<div class="hidden space-x-4 text-lg md:flex">
				<a href="/" class="">Strona główna</a>
				<a href="/realizacje" class="">Realizacje</a>
				<a href="/referencje" class="">Referencje</a>
				<a href="/kontakt" class="">Kontakt</a>
			</div>
		</div>
	</div>
	{#if mobileMenu}
		<div
			class="absolute right-0 z-50 flex h-screen w-3/4 flex-col space-y-2 bg-black/95 p-4 text-right text-xl md:hidden"
			in:fly={{ x: 100, duration: 300 }}
			out:fly={{ x: 100, duration: 300 }}
		>
			<a href="/" class="" onclick={closeMenu}>Strona główna</a>
			<a href="/realizacje" onclick={closeMenu} class="">Realizacje</a>
			<a href="/referencje" onclick={closeMenu} class="">Referencje</a>
			<a href="/kontakt" class="" onclick={closeMenu}>Kontakt</a>
		</div>
	{/if}
</nav>
