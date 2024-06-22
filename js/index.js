const ratingForm = document.getElementById("rating-form")
const radiosWrapper = document.querySelector(".radios-wrapper")
const submitBtn = document.getElementById("submit-btn")

const thanksBox = document.getElementById("thanks-box")
const boxResult = document.getElementById("box-result")

radiosWrapper.addEventListener("change", () => {
  submitBtn.disabled = false
})

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let ratingValue = document.querySelector("input[type='radio']:checked").value
  ratingForm.style.display = "none"
  thanksBox.style.display = 'block'
  boxResult.textContent = `You selected ${ratingValue} out of 5`
  ratingForm.reset()
  submitBtn.disabled = true
})

thanksBox.addEventListener("click", () => {
  thanksBox.style.display = "none"
  ratingForm.style.display = "block"
})
