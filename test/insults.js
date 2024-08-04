const insults = [
	"Borink es un furro",
	"Borink es un ñangon",
	"Borink es un pendejo",
	// Agrega más insultos aquí
];

const forgivenessMessages = [
	"¡Lo siento, Borink!",
	"Perdón, Borink, no fue mi intención",
	"¡Hagamos las paces, Borink!",
	// Agrega más mensajes de perdón aquí
];

const insultButton = document.getElementById("insult-button");
const forgivenessButton = document.getElementById("forgiveness-button");
const insultText = document.getElementById("insult-text");

insultButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * insults.length);
	insultText.textContent = insults[randomIndex];
});

forgivenessButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * forgivenessMessages.length);
	insultText.textContent = forgivenessMessages[randomIndex];
});

