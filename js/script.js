document.addEventListener('DOMContentLoaded', function() {
    // Password validation functionality
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>يرجى إدخال كلمة المرور</h3>
            <input type="password" id="password-input" placeholder="كلمة المرور">
            <div class="modal-buttons">
                <button class="modal-btn submit" id="submit-password">تأكيد</button>
                <button class="modal-btn cancel" id="cancel-password">إلغاء</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Variables to store the URL
    let currentUrl = '';

    // Function to show the password modal
    window.passwordPrompt = function(url) {
        currentUrl = url;
        modal.classList.add('show');
        document.getElementById('password-input').focus();
        return false;
    };

    // Function to hide the modal
    function hideModal() {
        modal.classList.remove('show');
        document.getElementById('password-input').value = '';
    }

    // Handle submit button click
    document.getElementById('submit-password').addEventListener('click', function() {
        const password = document.getElementById('password-input').value;
        if (password === '2025') {
            hideModal();
            window.open(currentUrl, '_blank');
        } else {
            alert('كلمة المرور غير صحيحة');
        }
    });

    // Handle cancel button click
    document.getElementById('cancel-password').addEventListener('click', hideModal);

    // Handle Enter key press in password input
    document.getElementById('password-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('submit-password').click();
        }
    });

    // Close the modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Animation effects for page elements
    const animateElements = document.querySelectorAll('.btn, .session-card');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });

    // Staggered animation on page load
    setTimeout(() => {
        let delay = 100;
        animateElements.forEach(element => {
            setTimeout(() => {
                element.style.transition = 'all 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
            delay += 100;
        });
    }, 300);
});
