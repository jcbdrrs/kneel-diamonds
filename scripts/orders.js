export const orders = async () => {
    //expand allows us to grab properties from foreign key
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()

    let orderHTML = ""


    const divStringArray = await orders.map(
        (singleOrder) => {
            // console.log(singleOrder)

            const orderPrice = singleOrder?.metal?.price + singleOrder?.size?.price + singleOrder?.style?.price
            return `<div>
            Order: $${orderPrice}
            </div>`
        }
    )

    orderHTML += divStringArray.join("")

    return orderHTML
}