<script lang="ts">    
	import type { PageData } from './$types';
	
	export let data: PageData;

	import ImageGallery from '$lib/ImageGallery.svelte';    
</script>

<main class="content">
    <ImageGallery gallery_items={data.images} />
    <div class="details">
        👥 {data.players} players | 🕰️ {data.playtime} playtime | 🎂 {data.age} age
    </div>
    <div class="text">
        {data.description}
    </div>
    <div class="prices">
        <!-- put a table here that iterates on the data.priceSheet-->
    </div>	
</main>

<style>
    .content {        
        font-size: 2rem;        
    }

    .details {
        text-align: center;
    }

</style>