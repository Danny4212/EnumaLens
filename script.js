let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
};

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const kameraSelect = document.getElementById('KAMERA');
  const lensaSelect = document.getElementById('LENSA');

  if (kameraSelect && lensaSelect) {
    const kamera = kameraSelect.options[kameraSelect.selectedIndex].text;
    const lensa = lensaSelect.options[lensaSelect.selectedIndex].text;

    const quantity = document.getElementById('quantity').value.trim();

    if (name === '' || email === '' || message === '' || quantity === '') {
      alert('Please fill out all fields.');
    } else if (quantity <= 0) {
      alert('Quantity Not Valid.');
    } else {
      alert(`Thank you, ${name}! Your ${message} For Add on and rental request for ${quantity} unit(s) of ${kamera} and ${lensa} have been sent.Stay Tune On Your EMAIL!`);

      document.getElementById('contactForm').reset();
    }
  } else {
    console.error('Camera or lens element not found.');
  }
});
