<script lang="ts">    
	import type { PageData } from './$types';
	
	export let data: PageData;

	import ImageGallery from '$lib/ImageGallery.svelte';
    
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD',});
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
                {#if entry.outOfStock}
                <td>Out of Stock</td>
                {:else}
                <td>{entry.purchaseLink}</td>
                {/if}                
                <td>{entry.productName}</td>
                {#if entry.payWhatYouWant}
                    <td>Pay what you want (sug {formatter.format(entry.priceDollar)})</td>
                {:else}
                    <td>{formatter.format(entry.priceDollar)}</td>
                {/if}                
                <td>{entry.creatorVerb} by {entry.creatorName}</td>
                <td>{entry.productDescription}</td>
            </tr>
            {/each}
            
        </table>
    </div>	
</main>

<style>
    .content {        
        font-size: 1.2rem;        
    }

    .details {
        text-align: center;
    }

    table, td {        
        border: 1px solid;
    }

</style>