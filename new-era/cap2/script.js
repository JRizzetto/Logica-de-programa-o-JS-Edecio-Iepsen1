// 2.10-A
// const inputPrice = document.getElementById("inputPrice");
// const buttonClick = document.getElementById("buttonClick");
// const textPromotion = document.getElementById("textPromotion");
// const inputText = document.getElementById("inputText");
// buttonClick.addEventListener("click", () => {
//     let inputName = inputText;
//     let inputNumber = Number(inputPrice.value);
//     let promotion = 2 * inputNumber * 0.85;
//     console.log(inputName)
//     textPromotion.innerText = `Promoção de ${inputText.value} \n Leve 2 por apenas R$: ${promotion.toFixed(2)}.`
// })


// 2.10-B
// const inputMin = document.getElementById("inputMin");
// const inputTime = document.getElementById("inputTime");
// const buttonClick = document.getElementById("buttonClick");
// const valueToPay = document.getElementById("valueToPay");
// buttonClick.addEventListener("click", () => {
//     let valueTime = Number(inputMin.value);
//     let timeUse = Number(inputTime.value);
//     let totalTopay = Math.ceil(timeUse / 15);  
//     valueToPay.innerText = `Valor a pagar: R$ ${(totalTopay * valueTime).toFixed(2)}.`
// })

// 2.10-C
const inputProduct = document.getElementById("inputProduct");
const inputTime = document.getElementById("inputTime");
const buttonClick = document.getElementById("buttonClick");
const valueToPay = document.getElementById("valueToPay");

buttonClick.addEventListener("click", () => {
    let inputValue = Number(inputTime.value);
    let inputText = inputProduct.value;

    let promotionProduct = inputValue * 0.5;
    let promotionValue = (inputValue * 3) - promotionProduct;

    valueToPay.innerText = `
    ${inputText} - Promoção: Leve 3 por apenas R$: ${promotionValue.toFixed(2)}.\n 
    O terceiro Produto sai por apenas R$: ${promotionProduct.toFixed(2)}.`;

    inputProduct.value = "";
    inputTime.value = "";
})
