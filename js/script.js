// انتظر حتى يتم تحميل المستند
document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات للأزرار
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // إضافة تأثير النقر
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // تنفيذ الإجراء المناسب حسب الزر
            handleButtonClick(this);
        });
    });
    
    // إضافة تأثيرات للبطاقات
    const sessionCards = document.querySelectorAll('.session-card');
    
    sessionCards.forEach(card => {
        card.addEventListener('click', function() {
            // إضافة تأثير النقر على البطاقات
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // يمكن إضافة وظائف لعرض تفاصيل الجلسة هنا
            showSessionDetails(this);
        });
    });
    
    // تنفيذ إجراءات مختلفة حسب الزر المنقور
    function handleButtonClick(button) {
        if (button.classList.contains('agenda')) {
            alert('سيتم فتح جدول الأعمال التفصيلي للفعالية');
        } else if (button.classList.contains('post-assessment')) {
            alert('سيتم فتح نموذج الاختبار البعدي');
        } else if (button.classList.contains('pre-assessment')) {
            alert('سيتم فتح نموذج الاختبار القبلي');
        } else if (button.classList.contains('video-resources')) {
            alert('سيتم فتح موارد الفيديو المتعلقة بالفعالية');
        } else if (button.classList.contains('text-resources')) {
            alert('سيتم فتح المصادر والمراجع المتعلقة بالفعالية');
        }
    }
    
    // عرض تفاصيل الجلسة
    function showSessionDetails(card) {
        const sessionTitle = card.querySelector('h2').textContent;
        const sessionContent = card.querySelector('.session-content').textContent;
        
        console.log(`تم النقر على: ${sessionTitle}`);
        console.log(`محتوى الجلسة: ${sessionContent}`);
        
        // يمكن هنا إضافة شيفرة لعرض مزيد من التفاصيل في نافذة منبثقة أو قسم مخصص
    }
    
    // إضافة تأثير تحميل للصفحة
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
    }, 100);
});
