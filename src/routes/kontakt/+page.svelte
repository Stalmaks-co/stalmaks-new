<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faMobileScreenButton,
		faLocationDot,
		faEnvelope
	} from '@fortawesome/free-solid-svg-icons';
	import Toast from '$lib/Toast.svelte';

	let name = '';
	let email = '';
	let message = '';

	let toast = false;
	let tostType = 'error';

	const showToast = (type: string) => {
		tostType = type;

		toast = true;
		setTimeout(() => {
			toast = false;
		}, 3000);
	};

	const clearForm = () => {
		name = '';
		email = '';
		message = '';
	};

	const sendForm = async () => {
		const formData = {
			name: name.trim(),
			email: email.trim(),
			message: message.trim()
		};

		if (!formData.name || !formData.email || !formData.message) {
			showToast('error');
			return;
		}

		if (formData.name === '' || formData.email === '' || formData.message === '') {
			showToast('error');
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			showToast('error');
			return;
		}

		const response = await fetch('/kontakt/api', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			clearForm();
			showToast('success');
		} else {
			showToast('error');
		}
	};
</script>

<svelte:head>
	<title>Dźwig Barlinek | Kontakt</title>
</svelte:head>

<main class="relative z-10 mx-auto mb-8 min-h-[70vh] max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="mx-auto mt-10 flex flex-col overflow-hidden shadow-lg md:mt-20 md:max-w-5xl md:flex-row"
	>
		<div class="rounded-t-lg p-8 md:w-2/3 md:rounded-l-lg">
			<h3 class="text-neutral mb-4 text-center text-3xl font-semibold">Formularz kontaktowy</h3>
			<form method="POST" on:submit|preventDefault class="space-y-4">
				<label for="name" class="text-lg">Imię</label>
				<input
					type="text"
					bind:value={name}
					placeholder="Jan Kowalski"
					class="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-secondary focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
					required
				/>
				<label for="email" class="text-lg">Email</label>
				<input
					type="email"
					bind:value={email}
					placeholder="example@example.com"
					class="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-secondary focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
					required
				/>
				<label for="message" class="text-lg">Wiadomość</label>
				<textarea
					bind:value={message}
					placeholder="Twoja wiadomość"
					class="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-secondary focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
					rows="8"
					required
				></textarea>
				<button
					class="xs:text-lg mx-auto flex w-full flex-row items-center justify-center rounded-md bg-accent px-4 py-2 text-base text-white transition duration-300 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-xl"
					on:click={sendForm}
				>
					<p>Wyślij</p>
				</button>
			</form>
		</div>
		<div
			class="flex flex-col justify-around overflow-hidden rounded-b-lg bg-secondary/10 p-6 shadow-lg md:w-1/2 md:rounded-r-lg md:p-10"
		>
			<div class="mb-4 px-4 md:mb-8 md:px-8">
				<div class="mb-2 flex flex-row items-center gap-6 md:mb-4">
					<Fa icon={faMobileScreenButton} class="text-3xl sm:text-4xl md:text-5xl" />
					<h3 class="text-3xl sm:text-4xl md:text-5xl">Telefon</h3>
				</div>
				<p class="text-lg font-light sm:text-xl md:text-2xl">+48 509 841 663</p>
				<p class="text-lg font-light sm:text-xl md:text-2xl">+48 665 562 572</p>
			</div>
			<div class="mb-4 px-4 md:mb-8 md:px-8">
				<div class="mb-2 flex flex-row items-center gap-6 md:mb-4">
					<Fa icon={faLocationDot} class="text-3xl sm:text-4xl md:text-5xl" />
					<h3 class="text-3xl sm:text-4xl md:text-5xl">Adres</h3>
				</div>
				<p class="text-lg font-light sm:text-xl md:text-2xl">św. Bonifacego 21, 74-320 Barlinek</p>
			</div>
			<div class="px-4 md:px-8">
				<div class="mb-2 flex flex-row items-center gap-6 md:mb-4">
					<Fa icon={faEnvelope} class="text-3xl sm:text-4xl md:text-5xl" />
					<h3 class="text-3xl sm:text-4xl md:text-5xl">Email</h3>
				</div>
				<p class="text-lg font-light sm:text-xl md:text-2xl">stalmaks@op.pl</p>
			</div>
		</div>
	</div>

	{#if toast && tostType === 'success'}
		<Toast type="success">Formularz został wysłany pomyślnie!</Toast>
	{:else if toast && tostType === 'error'}
		<Toast type="error">Wystąpił błąd podczas wysyłania formularza.</Toast>
	{/if}
</main>
