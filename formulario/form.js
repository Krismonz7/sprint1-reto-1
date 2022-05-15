const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  trucazo.setAttribute('href', 
  `mailto:me@kriz.monz707@gmail.com?subject=${form.get('name')}
  ${form.get('email')}
  &body=${form.get('message')}`);
  trucazo.click();
}