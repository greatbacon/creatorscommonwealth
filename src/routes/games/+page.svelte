<script>	
    import games from '$lib/images/games.jpg';
    import Card from '../Card.svelte';
</script>

<div class="offerings">
   <Card imageSrc={games} url="/games/aquisition" altText="a lasercut wooden box with the word aquisition on the lid opened to reveal contents" displayText="AQUISITION" />	
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