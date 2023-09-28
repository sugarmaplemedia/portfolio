<div class="box-w13 flex flex-dc flex-jc flex-ac flex-gmd">
	<div class="portfolio-service">
		<div class="portfolio-service-icon">
			<slot name="title-icon" />
		</div>
		<h2>
			<slot name="title" />
		</h2>
	</div>
	<div class="flex flex-gmd">
		<slot />
	</div>
</div>

<style>
.portfolio-service-box {
	display: flex;
	align-items: center;
}

div.portfolio-service {
	position: relative;
}
.portfolio-service h2 {
	margin-bottom: 0;

	font-size: 1.75rem;
	line-height: 1.75rem;
	text-transform: uppercase;
}
.portfolio-service br {
	margin: 0;
}

.portfolio-service-icon {
	position: absolute;
	left: -18px;
	bottom: 20px;
	z-index: -1;

	transform: scale(3.5);
	color: var(--clr-tan-secondary);
}

.portfolio-proficiency-box {
	display: flex;
	justify-content: center;
	gap: 1rem;
}

.portfolio-proficiency {
	width: 2rem;
	height: auto;
	padding: 0.5rem;

	background-color: var(--clr-tan-tertiary);
	border-radius: 100%;
}

@media only screen and (max-width: 850px) {
	.portfolio-service-box {
		flex-direction: column;
		gap: 36px;
	}
}
</style>
