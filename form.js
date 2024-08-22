document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prueba");

  let respuestas = [];

  let enviroment = document.querySelector(
    'input[name="radio-q1"]:checked'
  ).value;
  console.log(enviroment);
  respuestas.push(enviroment.split(","));

  let rango = document.getElementById("2").value;
  console.log(rango);
  if (rango < 25) {
    respuestas.push("octo");
    respuestas.push("bear");
  } else if (rango < 50) {
    respuestas.push("owls");
    respuestas.push("fish");
  } else if (rango < 75) {
    respuestas.push("cmel");
    respuestas.push("wolf");
  } else if (rango < 100) {
    respuestas.push("chet");
    respuestas.push("eagl");
  }

  let words = Array.from(
    document.querySelectorAll('input[name="check3"]:checked')
  ).map((e) => e.value);
  respuestas.push(words.flat());

  let frases = Array.from(
    document.querySelectorAll('input[name="check4"]:checked')
  ).map((e) => e.value);
  respuestas.push(frases.flat());

  let sign = document.querySelector('input[name="radio-q5"]:checked').value;
  console.log(sign);
  respuestas.push(sign);

  console.log(respuestas.flat());

  for (let i = 0; i < respuestas.length; i++) {
    const element = respuestas[i];
    animal[element] += 1;
  }

  console.log(animal);
  console.log(getPropertyWithHighestValue(animal));
  showResult(getPropertyWithHighestValue(animal));
});

let animal = {
  fish: 0,
  octo: 0,
  bear: 0,
  wolf: 0,
  eagl: 0,
  owls: 0,
  chet: 0,
  cmel: 0,
};
function getPropertyWithHighestValue(obj) {
  let highestValue = 0;
  let propWithHighestValue = null;

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] > highestValue) {
        highestValue = obj[prop];
        propWithHighestValue = prop;
      }
    }
  }

  return propWithHighestValue;
}

let mensajes = {
  fish: "You are deeply intuitive and adaptable, much like a fish navigating the currents of a vast ocean. Your connection to water symbolizes your ability to flow with changes and your sensitivity to your surroundings. You thrive in peaceful, reflective environments where you can connect deeply with your inner self and others. Your emotional depth allows you to form strong bonds and excel in situations that require empathy and understanding. You find solace in environments that promote introspection and emotional connection.",
  octo: "Resourceful and highly creative, you embody the adaptability of an octopus, capable of blending into various environments. You excel at finding innovative solutions to complex problems and have exceptional multitasking abilities. Your curiosity drives you to explore and learn constantly, and you interact with the world in a unique and insightful way. You perform best when expressing your creativity and flexibility in dynamic situations where your resourcefulness shines.",
  bear: "Strong, resilient, and deeply connected to nature, you possess the solid and reliable presence of a bear. You approach challenges with determination and patience, valuing stability and comfort in your life. The natural world serves as your sanctuary, providing balance and strength. You find joy in routine and the simple pleasures that keep you grounded. Your steadfast nature and appreciation for the comforts of life make you a dependable and comforting presence.",
  wolf: "Loyal, strong, and deeply social, you embody the qualities of a wolf, thriving in the company of others. Your collaborative nature enables you to form lasting and meaningful connections, often placing you in leadership roles. With a strong sense of duty and responsibility, you are dedicated to your loved ones and community. Your resilience and team-oriented approach make you a natural protector and guide, always ready to support those around yousk",
  eagl: "Observant, independent, and free-spirited, you share the keen vision and soaring perspective of an eagle. You seek adventure and are drawn to experiences that broaden your horizons. Your ability to see the bigger picture allows you to approach life with balance and clarity. You value wisdom and knowledge, constantly striving to overcome challenges and explore new heights in both personal and intellectual pursuits.",
  owls: "Wise, introspective, and highly observant, you possess the thoughtful and reflective nature of an owl. You prefer to analyze and understand situations thoroughly before making decisions, valuing precision and accuracy. Solitude and quiet contemplation are where you find strength, enabling you to uncover deeper truths. Your appreciation for knowledge and reflection makes you a source of insight and guidance for others.",
  chet: "Fast, agile, and energetic, you are like a cheetah, always ready to act and make quick decisions. Your dynamic nature drives you to move swiftly through life, embracing challenges with enthusiasm and a forward-thinking mindset. Innovative and independent, you continuously seek new ways to achieve your goals. Your ability to think and act quickly sets you apart, making you a natural leader in fast-paced environments where agility and speed are crucial.",
  cmel: "Resilient, strong, and well-adapted to harsh conditions, you share the endurance and determination of a camel. You thrive in warm, challenging environments where your ability to persevere and maintain strength is tested. Valuing self-reliance and inner power, you often find yourself in roles where others depend on your strength. Your resilience and graceful handling of adversity make you a reliable and steadfast presence in any situation.",
};

let images = {
  fish: "./img/fish.jpeg",
  octo: "./img/pulpo.jpeg",
  bear: "./img/oso.jpeg",
  wolf: "./img/lobo.jpeg",
  eagl: "./img/aguila.jpeg",
  owls: "./img/buho.jpeg",
  chet: "./img/cheeta.jpeg",
  cmel: "./img/camello.jpeg",
};

function showResult(animal) {
  document.getElementById("result").style.zIndex = "50";
  document.getElementById("res_msg").textContent = mensajes[animal];
  document.getElementById("res_img").src = images[animal];
}
