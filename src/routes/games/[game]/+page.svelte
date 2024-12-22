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
        <table class="table">
            <tr>
                <td>Purchase</td>
                <td>Product Tier</td>
                <td>Price</td>
                <td>Creator</td>
                <td>Description</td>
            </tr>
            {#each data.priceSheet as entry }
            <tr>
                <td>{entry.purchaseLink}</td>
                <td>{entry.productName}</td>
                <td>{entry.priceInCents}</td>
                <td>{entry.creatorVerb} by {entry.creatorName}</td>
                <td>{entry.productDescription}</td>
            </tr>
            {/each}
            
        </table>
    </div>	
</main>

<style>
    .content {        
        font-size: 2rem;        
    }

    .details {
        text-align: center;
    }

    

    table, td {        
        border: 1px solid;
    }

</style>