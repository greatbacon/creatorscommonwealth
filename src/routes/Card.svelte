<script lang="ts">	
    export let imageSrc: string = "";
	export let icon: string = "";
    export let url: string = "";
    export let altText: string = "";
    export let displayText: string = "";
</script>

<a class="tile" href={url}>
    {#if imageSrc.length > 0}
		<img class="image" src={imageSrc} alt={altText} />
	{:else}
		<div class="icon">{icon}</div>
	{/if}
    <div class="text">
        {displayText}
    </div>
</a>

<style>
    .tile {
		padding-top: 1rem;
		margin: 0.25em;
		text-align: center;
		height: 18rem;
		width: 15rem;
		border : 2px solid black;
		border-radius: 25px;
		text-decoration: none;
	}

	.image {
		width: 10rem;
	}

	.icon {
		font-size: 8rem;
		text-decoration: none;
		text-decoration-style: none;
		margin-top: 2rem;
	}

	.text {
		text-decoration: underline;
	}
</style>