function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "16:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("England", "13:00", "Iran") +
      createGame("senegal", "16:00", "Netherlands") +
      createGame("united states", "19:00", "Wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "10:00", "croatia") +
      createGame("germany", "13:00", "japan") +
      createGame("spain", "16:00", "costa rica") +
      createGame("belgium", "19:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("Switzerland", "10:00", "cameroon") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  ) +
  createCard(
    "22/12",
    "terça",
    createGame("argentina", "10:00", "saudi arabia") +
      createGame("denmark", "13:00", "tunisia") +
      createGame("mexico", "16:00", "poland") +
      createGame("france", "19:00", "australia")
  )
