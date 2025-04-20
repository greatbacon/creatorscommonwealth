<script>	
    import games from '$lib/images/acquisition/acquisition1.png';
    import Card from '../Card.svelte';
</script>

<div class="offerings">
   <Card imageSrc={games} url="/games/acquisition" altText="a lasercut wooden box with the word acquisition on the lid opened to reveal contents" displayText="ACQUISITION" />	
</div>

<style>
   .offerings {
       font-size: 2.5rem;
       display: flex;
       justify-content: center;		
       height: 50%;
       flex-wrap: wrap;
   }
</style>