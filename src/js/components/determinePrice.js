"use strict"
const determinePrice = (boolValue, discount, price) => {
    return boolValue ? discount.replace("$", "") : price.replace("$", "")
}
export default determinePrice;