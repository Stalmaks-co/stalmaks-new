<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<slot />
<Footer />
