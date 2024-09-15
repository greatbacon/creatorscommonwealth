<script>
	import Header from './Header.svelte';
	import '../app.css';	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="/about">ABOUT</a> <a href="/contact">CONTACT</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		font-family: Forum;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
        font-size: 2em;
		font-family: Forum;
	}

	footer a {
		font-weight: bold;
        margin-left: 1%;
        margin-right: 1%;
        margin-bottom: 2%;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>