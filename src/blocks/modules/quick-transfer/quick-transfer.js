let index = 1;

const on = (listener, selector, fn) => {
	document.querySelectorAll(selector).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
  item.target.classList.toggle('toggle');
    
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});

on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})