<script>		 
	 import Card from './Card.svelte';
</script>

<div class="offerings">
	<Card icon="♟️" url="/games" displayText="GAMES" />		
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