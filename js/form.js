// Hent formular
const form = document.querySelector("#webform");

// Outputfelter
const nameOutput = document.querySelector("#name_output");
const emailOutput = document.querySelector("#email_output");
const topicOutput = document.querySelector("#topic_output");
const messageOutput = document.querySelector("#message_output");
const consentOutput = document.querySelector("#consent_output");

// Hvis et felt er invalid → fokusér på det
function cancelPopup(event) {
  event.preventDefault();
  const invalidField = form.querySelector(":invalid");
  if (invalidField) invalidField.focus();
}

// Håndter submit
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const topic = formData.get("topic");
  const message = formData.get("message");
  const consent = formData.get("consent") ? "JA" : "NEJ";

  // Skriv til outputfelter
  nameOutput.textContent = name;
  emailOutput.textContent = email;
  topicOutput.textContent = topic;
  messageOutput.textContent = message;
  consentOutput.textContent = consent;

  // Reset formularen
  form.reset();
}

// Events
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
