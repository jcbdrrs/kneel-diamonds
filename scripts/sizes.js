import { setSizeChoice } from "./transientState.js"

export const sizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    const handleSizeChoice = (e) => {
        // Make sure you change this condition if you named your inputs differently
        if (e.target.name === "size") {
            setSizeChoice(parseInt(e.target.value))
        }
    }

    document.addEventListener("change", handleSizeChoice)

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = await sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}