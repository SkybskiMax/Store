import { NOTIFICATION_TYPE_SUCCESS } from 'react-redux-notify'

const addToCartNotification = {
    message: 'Item added to cart!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 2500,
    canDismiss: true,
    showCloseAllBtn: false
}


export default addToCartNotification