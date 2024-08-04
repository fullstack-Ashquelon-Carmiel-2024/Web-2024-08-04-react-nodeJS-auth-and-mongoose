const avatarStockEl = document.querySelector(`.customer-avatars .stock`);
const cartStockEl = document.querySelector(`.carts .stock`);
const productShelvesEl = document.querySelector(`.products .stock`);
const customerStockEl = document.querySelector(`.customers .stock`);
const btnCreateCustomer = document.querySelector(`.create-customer button`);
const formAddCustomer = document.querySelector(`form.add-customer`);

const chosenAvatarIconParent = document.querySelector('.chosen-customer-avatar');
const chosenAvatarFirstIcon = document.querySelector('.chosen-customer-avatar i');
const chosenCartIconParent = document.querySelector('.chosen-shopping-cart');
const chosenCartFirstIcon = document.querySelector('.chosen-shopping-cart i');

const inpName = document.querySelector('#inpName');
const shoppingCartDiv = document.querySelector('.shopping-cart .stock');

const stocks = [], customers = [];

