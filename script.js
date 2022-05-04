//getting sections

const rating = document.querySelector('.rating');
const thanking = document.querySelector('.thanking');
const thankingRate = document.querySelector('.thanking-rate');

let rate = 0;

const selectRate = (num) => {
 rate = num;
}


const toggleDisplay = () => {
    rating.style.display = "none";
    thanking.style.display = "flex";
    thankingRate.innerText = `You selected ${rate} out of 5`;
    
}