
const countryCodes = [
    { Country: 'KG', Code: '+996' },
    { Country: 'UZ', Code: '+998' },
    { Country: 'RU', Code: '+7' },
    { Country: 'UA', Code: '+380' },
];
function detectCountryCode() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const outputElement = document.getElementById('output');
    let phoneNumber = phoneNumberInput.value.trim();
    if (!phoneNumber.startsWith('+')) {
        phoneNumber = '+' + phoneNumber;
    }
    if (!phoneNumber) {
        outputElement.textContent = "";
        return;
    }
    const parts = phoneNumber.split(' ');
    const countryCode = parts[0];
    const foundCountry = countryCodes.find(country => country.Code === countryCode);
    if (foundCountry) {
        outputElement.textContent = foundCountry.Country;
    } else {
        outputElement.textContent = "Неизвестный код страны";
    }
}