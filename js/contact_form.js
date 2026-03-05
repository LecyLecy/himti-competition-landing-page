document.addEventListener('submit', function (e) {
    const form = e.target;

    if (!form.classList || !form.classList.contains('contact__form')) {
        return;
    }

    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    if (nameInput) {
        nameInput.value = '';
    }

    if (emailInput) {
        emailInput.value = '';
    }

    if (messageInput) {
        messageInput.value = '';
    }

    let statusEl = form.querySelector('.contact__status');

    if (!statusEl) {
        statusEl = document.createElement('p');
        statusEl.className = 'contact__status';
        statusEl.setAttribute('role', 'status');
        statusEl.setAttribute('aria-live', 'polite');
        form.appendChild(statusEl);
    }

    statusEl.textContent = 'Your message has been submitted';
    statusEl.classList.add('is-visible');
});

document.addEventListener('input', function (e) {
    const form = e.target && e.target.closest ? e.target.closest('.contact__form') : null;

    if (!form) {
    return;
    }

    const statusEl = form.querySelector('.contact__status');

    if (!statusEl) {
    return;
    }

    statusEl.textContent = '';
    statusEl.classList.remove('is-visible');
}, true);