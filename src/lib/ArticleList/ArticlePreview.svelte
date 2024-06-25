<script>
	import { enhance } from '$app/forms';

	export let article;
	export let user;
</script>

<div class="box">
<div class="block">
	<article class="media">
		<div class="media-left">
			<figure class="image is-64x64">
				<!-- <img src={article.creator.image} alt="Image" /> -->
			</figure>
		</div>
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{article.creator.username}</strong> <small>@username</small>
					<small>{new Date(article.createdAt).toDateString()}</small>
					<br />
				</p>
				<h1>{article.nombre}</h1>
				<p>{article.description}</p>
			</div>
			<nav class="level is-mobile">
				<div class="level-left">
					<a class="level-item" aria-label="reply">
						<span class="icon is-small">
							<i class="fas fa-reply" aria-hidden="true"></i>
						</span>
					</a>
					<a class="level-item" aria-label="retweet">
						<span class="icon is-small">
							<i class="fas fa-retweet" aria-hidden="true"></i>
						</span>
					</a>
					<a class="level-item" aria-label="like">
						<span class="icon is-small">
							<i class="fas fa-heart" aria-hidden="true"></i>
						</span>
					</a>
					<div class="block">

						<a href="/article/{article._id}" class="preview-link">
						<span>Read more...</span>
					</a>
				
				<div class="tags are-normal">
					{#each article.tags as tag}
				<!-- <li class="tag is-info tag-pill tag-outline"><a href="/?tag={tag}">{tag}</a></li> -->
			
			<a class="tag is-info" href="/?tag={tag}">{tag}</a>
		{/each}
	</div>
</div>
				</div>
			</nav>
		</div>
	</article>
</div>
</div>
<!-- <div class="article-preview">
	<div class="article-meta">
		<a href="/profile/@{article.creator.username}">
			<img src={article.creator.image} alt={article.creator.username} />
		</a>

		<div class="info">
			<a class="creator" href="/profile/@{article.creator.username}">{article.creator.username}</a>
			<span class="date">{new Date(article.createdAt).toDateString()}</span>
		</div>

		<!-- {#if user}
			<form
				method="POST"
				action="/article/{article.slug}?/toggleFavorite"
				use:enhance={({ form }) => {
					// optimistic UI
					if (article.favorited) {
						article.favorited = false;
						article.favoritesCount -= 1;
					} else {
						article.favorited = true;
						article.favoritesCount += 1;
					}

					const button = form.querySelector('button');
					button.disabled = true;

					return ({ result, update }) => {
						button.disabled = false;
						if (result.type === 'error') update();
					};
				}}
				class="pull-xs-right"
			>
				<input hidden type="checkbox" name="favorited" checked={article.favorited} />
				<button class="btn btn-sm {article.favorited ? 'btn-primary' : 'btn-outline-primary'}">
					<i class="ion-heart" />
					{article.favoritesCount}
				</button>
			</form>
		{/if} -->
<!-- </div>

	<a href="/article/{article.slug}" class="preview-link">
		<h1>{article.title}</h1>
		<p>{article.description}</p>
		<span>Read more...</span>
		<ul class="tag-list">
			{#each article.tagList as tag}
				<li class="tag-default tag-pill tag-outline"><a href="/?tag={tag}">{tag}</a></li>
			{/each}
		</ul>
	</a>
</div> -->
