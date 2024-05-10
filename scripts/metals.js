import { setMetalChoice } from "./transientState.js"

export const metalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    const handleMetalChoice = (e) => {
        // Make sure you change this condition if you named your inputs differently
        if (e.target.name === "metal") {
            setMetalChoice(parseInt(e.target.value))
        }
    }

    document.addEventListener("change", handleMetalChoice)

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = await metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}




