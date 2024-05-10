const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}


export const setMetalChoice = (chosenMetalId) => {
    transientState.metalId = chosenMetalId
    console.log(transientState)
}


export const setStyleChoice = (chosenStyleId) => {
    transientState.styleId = chosenStyleId
    console.log(transientState)
}


export const setSizeChoice = (chosenSizeId) => {
    transientState.sizeId = chosenSizeId
    console.log(transientState)
}


export const saveOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrder")
    document.dispatchEvent(customEvent)

}