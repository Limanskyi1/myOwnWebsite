const botToken = '6881210994:AAHO1w7s6ukyyoFnFG5SI-W4ZYWPg979meQ';
const chatId = '668015388';


function sendFormToTelegram(formData) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  let messageText = 'New Form Submission:\n';
  for (const [key, value] of Object.entries(formData)) {
    messageText += `${key}: ${value}\n`;
  }


  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log('Telegram API response:', data);
    })
    .catch(error => {
      console.error('Error sending data to Telegram:', error);
    });
}


const form = document.getElementById('form');

function isValidName(name) {
    return /^[a-zA-Zа-яА-Я\s]+$/.test(name);
}

function isValidPhone(phone) {
  return phone.length === 9;
}

const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      preferredCountries: ['ua','us', 'gb', 'de'], 
      separateDialCode: true
    });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = form.querySelector('#phone');
    const name = form.querySelector('#name');
    const countryCode = form.querySelector('.iti__selected-dial-code');
    console.log(phone.value.length)
    if (isValidPhone(phone.value) && isValidName(name.value)) {
        const formData = {
          country: countryCode.textContent,
          name: name.value,
          phone: phone.value,
        };
        console.log(formData)
        sendFormToTelegram(formData);
        phone.value = '';
        name.value = '';
    } else {
        alert('Введите корректные данные');
    }
});




