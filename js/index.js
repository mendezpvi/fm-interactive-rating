const card = document.getElementById("card")
const ratings = document.getElementById("ratings")
const submitBtn = document.getElementById("submit-btn")
let selectedRating = ""

ratings.addEventListener("change", selectedOption)
submitBtn.addEventListener("click", thankYouCard)

function selectedOption(e) {
  selectedRating = e.target.value
  submitBtn.disabled = false
}

function thankYouCard() {
  const thankYouCardCreated = createCard()
  card.innerHTML = thankYouCardCreated
}
function createCard() {
  let newCard = `
    <header class="thank-card-header">
      <img src="./assets/image/illustration-thank-you.svg" aria-hidden="true">
      <p>You selected ${selectedRating} out of 5</p>
    </header>
    <div class="thank-card-body">
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  `
  return newCard
}
