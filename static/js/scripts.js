document.querySelector('[data-toggle-where]').onclick = () => {
    document.querySelectorAll('.where').forEach(where => {
        where.classList.toggle('hidden');
    });
}
