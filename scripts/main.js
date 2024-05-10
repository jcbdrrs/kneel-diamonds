// ----------> json-server database.json -p 8088  <----------- (git command for starting json server in api folder)

import { metalOptions } from './metals.js'
import { sizeOptions } from './sizes.js'
import { styleOptions } from './styles.js'
import { placeOrder } from './placeOrder.js'
import { orders } from './orders.js'

const mainContainer = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await metalOptions()
    const styleOptionsHTML = await styleOptions()
    const sizeOptionsHTML = await sizeOptions()
    const placeOrderHTML = await placeOrder()
    const ordersHTML = await orders()

    const composedHTML = `
    <h1>Kneel Diamonds</h1>

    <article class="choices">
        <section class="choices__metals options">
            <h2>Choose Your Metal:</h2>
            ${metalOptionsHTML}
        </section>
        <section class="choices__sizes options">
            <h2>Choose Your Style:</h2>
            ${styleOptionsHTML}
        </section>
        <section class="choices__styles options">
        <h2>Choose Your Size:</h2>
        ${sizeOptionsHTML}
        </section>
    </article>

   

    <article>
        ${placeOrderHTML}

    </article>

    <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        ${ordersHTML}
    </article>
    `

    mainContainer.innerHTML = composedHTML
}

render()
// document.addEventListener("newOrder", render)
document.addEventListener("newOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})