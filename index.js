function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));

function greet(name, language = "en") {
  if (language === "es") {
      return `¡Hola, ${name}!`;
  } else if (language === "fr") {
      return `Bonjour, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("World", "es"));