// عندما يتم تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد عناصر النموذج
    const modal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const cancelButton = document.getElementById('cancelPassword');
    
    let targetUrl = '';

    // دالة لعرض نموذج كلمة المرور
    window.passwordPrompt = function(url) {
        targetUrl = url;
        modal.style.display = 'flex';
        passwordInput.value = '';
        passwordInput.focus();
    };

    // دالة للتحقق من كلمة المرور
    function checkPassword() {
        const password = passwordInput.value.trim();
        if (password === '2025') {
            modal.style.display = 'none';
            // فتح الرابط في نافذة جديدة
            window.open(targetUrl, '_blank');
        } else {
            alert('كلمة المرور غير صحيحة!');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    // إغلاق النموذج
    function closeModal() {
        modal.style.display = 'none';
    }

    // معالجة النقر على زر التأكيد
    submitButton.addEventListener('click', checkPassword);

    // معالجة النقر على زر الإلغاء
    cancelButton.addEventListener('click', closeModal);

    // معالجة الضغط على زر Enter في حقل كلمة المرور
    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // إغلاق النموذج عند النقر خارجه
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
