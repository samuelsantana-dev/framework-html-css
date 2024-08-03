document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.querySelector('.toggle-checkbox');
    const toggleText = document.querySelector('.toggle-inner');

    toggleCheckbox.addEventListener('change', function () {
        if (toggleCheckbox.checked) {
            toggleText.textContent = 'esconder';
        } else {
            toggleText.textContent = 'mostrar';
        }
    });
});
