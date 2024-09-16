<script lang="ts">
//TODO this is a copypasta component from another project
//please add a "toolbox" or "commons" to the loom project & upstream them 

    import {fade} from 'svelte/transition';
    import type {Image} from '$lib/imageGallery';
    
    export let gallery_items: Image[] = []; 

    let currentSlideItem = 0;
    $: item = gallery_items[currentSlideItem];

    const nextImage = () => {
        currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
    }
    const prevImage = () => {
        if (currentSlideItem != 0) {
        currentSlideItem = (currentSlideItem - 1) % gallery_items.length;
        } else {
            currentSlideItem = gallery_items.length - 1;
        }
    }
</script>

<div class="gallery">
    {#if item} 
        <button class="btn" on:click={() => prevImage()}>&lt;</button>
        {#key item}
            <img class="image" in:fade|local={{duration: 400}} src={item.url} alt={item.description}/>
        {/key}                    
        <button class="btn" on:click={() => nextImage()}>&gt;</button>        
    {/if}
</div>

<style>
    .gallery {
        text-align: center;
    }

    .image {
        width: 350px;                
        margin: 1%;
    } 
</style>