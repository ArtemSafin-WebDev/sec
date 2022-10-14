export default function modalFormSelect() {
    const elements = Array.from(document.querySelectorAll('.js-modal-form-select'));

    elements.forEach(element => {
        const btn = element.querySelector('.modal__form-select-btn');
        const input = element.querySelector('input[type="hidden"]');
        const btnText = element.querySelector('.modal__form-select-btn-text');
        const items = Array.from(element.querySelectorAll('.modal__form-select-item-btn'));

        btn.addEventListener('click', event => {
            event.preventDefault();
            element.classList.toggle('dropdown-shown');
        });

        items.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                const itemValue = item.querySelector('.modal__form-select-item-btn-text')?.textContent;

                input.value = itemValue.trim();
                btnText.textContent = itemValue.trim();
                element.classList.add('selected');
                element.classList.remove('dropdown-shown');
            });
        });
    });
}
