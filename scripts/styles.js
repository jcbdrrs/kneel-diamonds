import { setStyleChoice } from "./transientState.js"

export const styleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    const handleStyleChoice = (e) => {
        // Make sure you change this condition if you named your inputs differently
        if (e.target.name === "style") {
            setStyleChoice(parseInt(e.target.value))
        }
    }

    document.addEventListener("change", handleStyleChoice)


    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}