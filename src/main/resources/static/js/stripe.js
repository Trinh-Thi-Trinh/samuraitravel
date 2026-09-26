const stripe = Stripe('pk_test_51UEbngQ6U57VGZVkWarM0EVrEyjFIEyEG0Vge5ZiAMhioimz060miiJogxk79ZfMCRLVnpqlSjaQNHeOMo5pS3rQ00PRSmgVeN');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});