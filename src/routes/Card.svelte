<script lang="ts">	
    export let imageSrc: string = "";
    export let url: string = "";
    export let altText: string = "";
    export let displayText: string = "";
</script>

<a class="tile" href={url}>
    <img class="image" src={imageSrc} alt={altText} />
    <div>
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
	}

	.image {
		width: 10rem;
	}
</style>