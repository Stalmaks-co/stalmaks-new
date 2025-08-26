<script>
	const images = [
		{ src: 'image1.jpg', alt: 'Image 1' },
		{ src: 'image2.jpg', alt: 'Image 2' },
		{ src: 'image3.jpg', alt: 'Image 3' }
		// Add more images as needed
	];
</script>

<section>
	<div class="gallery">
		{#each images as image}
			<div class="gallery-item">
				<img src={image.src} alt={image.alt} />
			</div>
		{/each}
	</div>
</section>
