<script>	
	 import games from '$lib/images/games.jpg';
	 import Card from './Card.svelte';
</script>

<div class="offerings">
	<Card imageSrc={games} url="/games" altText="a lasercut wooden box with the word aquisition on the lid opened to reveal contents" displayText="GAMES" />	
	<!-- <a class="tile" href="/"displayText="GAMES">
		<img class="image" src={quilt} alt="a quilt drapped over a fence" />
		<div>
			WALL ART
		</div>
	</a> -->
</div>

<style>
	.offerings {
		font-size: 3rem;
		display: flex;
		justify-content: center;		
		height: 50%;
		flex-wrap: wrap;
	}
</style>