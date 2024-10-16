function randomMonyDays(mony, day, scour){
    let numberRandom = 10;
    switch(true){
        case scour < 10:
            numberRandom = 10;
            break;
        case scour < 20 :
            numberRandom = 40;
            break;
        case scour < 40:
            numberRandom = 70;
            break;
        case scour < 70:
            numberRandom = 99;
            break;
    }
    const numberDays = Math.floor(Math.random() * numberRandom) + 1;
    const numberMany = Math.floor(Math.random() * numberRandom) + 1;
    mony.innerHTML = numberMany;
    day.innerHTML = numberDays;
    return [numberMany, numberDays];
}
export default randomMonyDays;