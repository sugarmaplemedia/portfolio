<footer>
	<hr />
	<p id="copyright">
		Website developed by Harrison Bouche. © {new Date().getFullYear()}
	</p>
</footer>

<style>
footer {
	padding-top: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

hr {
	width: 90%;
	max-width: 575px;
	height: 0px;

	border: 0;
	border-top: 5px dotted;
}

p {
	margin: 1rem;

	color: var(--clr-tan-primary);

	font-weight: bold;
}
</style>
