// انتظر حتى يتم تحميل المستند
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات إضافية مع التأخير لتحميل العناصر
    animateElementsWithDelay();
    
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
        
        // إضافة تأثير الحركة عند المرور بالماوس
        button.addEventListener('mouseover', function() {
            this.querySelector('i').classList.add('fa-beat');
        });
        
        button.addEventListener('mouseout', function() {
            this.querySelector('i').classList.remove('fa-beat');
        });
    });
    
    // إضافة تأثيرات للبطاقات
    const sessionCards = document.querySelectorAll('.session-card');
    
    sessionCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // تجاهل إذا تم النقر على الزر
            if (e.target.classList.contains('details-btn') || e.target.parentElement.classList.contains('details-btn')) {
                return;
            }
            
            // إضافة تأثير النقر على البطاقات
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // إضافة فصل النشاط إلى البطاقة
            toggleActiveCard(this);
        });
        
        // إضافة مستمعي الأحداث لزر التفاصيل
        const detailsBtn = card.querySelector('.details-btn');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // منع انتشار الحدث إلى البطاقة
                const card = this.closest('.session-card');
                showSessionDetails(card);
            });
        }
    });
    
    // إضافة مستمعي أحداث للنافذة المنبثقة
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            closeModal();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    }
    
    // إغلاق النافذة المنبثقة عند النقر خارجها
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });
    
    // إضافة استجابة لمفتاح Esc لإغلاق النافذة المنبثقة
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // تنفيذ إجراءات مختلفة حسب الزر المنقور
    function handleButtonClick(button) {
        if (button.classList.contains('agenda')) {
            showCustomAlert('جدول الأعمال', 'سيتم عرض جدول الأعمال التفصيلي للفعالية هنا، مع توقيتات الجلسات والمتحدثين وعناوين كل جلسة.');
        } else if (button.classList.contains('post-assessment')) {
            showCustomAlert('الاختبار البعدي', 'سيتم فتح نموذج الاختبار البعدي لقياس مستوى استيعاب المشاركين بعد الفعالية.');
        } else if (button.classList.contains('pre-assessment')) {
            showCustomAlert('الاختبار القبلي', 'سيتم فتح نموذج الاختبار القبلي لقياس المستوى المبدئي للمشاركين قبل الفعالية.');
        } else if (button.classList.contains('video-resources')) {
            showCustomAlert('موارد الفيديو', 'سيتم عرض قائمة بموارد الفيديو والمحتوى المرئي المتعلق بالفعالية والمواضيع ذات الصلة.');
        } else if (button.classList.contains('text-resources')) {
            showCustomAlert('المصادر والمراجع', 'سيتم عرض قائمة بالمصادر والمراجع والمقالات المتعلقة بمواضيع الفعالية.');
        }
    }
    
    // عرض تفاصيل الجلسة في النافذة المنبثقة
    function showSessionDetails(card) {
        const sessionTitle = card.querySelector('h2').textContent;
        const sessionContent = card.querySelector('.session-content').textContent;
        
        // تعيين محتوى النافذة المنبثقة
        document.getElementById('modal-title').textContent = sessionTitle;
        
        // إضافة محتوى مختلف حسب نوع الجلسة
        let detailedContent = '';
        
        if (card.classList.contains('morning')) {
            detailedContent = `
                <p>${sessionContent}</p>
                <hr>
                <h3>تفاصيل الجلسة:</h3>
                <ul>
                    <li>الموعد: 9:00 صباحاً - 12:30 ظهراً</li>
                    <li>المكان: قاعة الاجتماعات الرئيسية</li>
                    <li>المحاور الرئيسية:
                        <ul>
                            <li>أساسيات الحوار البناء</li>
                            <li>تقنيات حل النزاعات</li>
                            <li>دور الشباب في بناء السلام المجتمعي</li>
                        </ul>
                    </li>
                    <li>المتحدثون:
                        <ul>
                            <li>د. أحمد محمود - خبير في بناء السلام</li>
                            <li>أ. سارة علي - مستشارة في حل النزاعات</li>
                        </ul>
                    </li>
                </ul>`;
        } else if (card.classList.contains('evening-1')) {
            detailedContent = `
                <p>${sessionContent}</p>
                <hr>
                <h3>تفاصيل الجلسة:</h3>
                <ul>
                    <li>الموعد: 1:30 مساءً - 4:30 مساءً</li>
                    <li>المكان: قاعة الاجتماعات الرئيسية</li>
                    <li>المحاور الرئيسية:
                        <ul>
                            <li>أنواع النزاعات المجتمعية الشائعة</li>
                            <li>الأسباب الجذرية للنزاعات</li>
                            <li>استراتيجيات التدخل المجتمعي</li>
                        </ul>
                    </li>
                    <li>المتحدثون:
                        <ul>
                            <li>د. محمد حسن - باحث في علم الاجتماع</li>
                            <li>أ. ليلى عمر - ناشطة مجتمعية</li>
                        </ul>
                    </li>
                </ul>`;
        } else if (card.classList.contains('evening-2')) {
            detailedContent = `
                <p>${sessionContent}</p>
                <hr>
                <h3>تفاصيل الجلسة:</h3>
                <ul>
                    <li>الموعد: 1:30 مساءً - 4:30 مساءً</li>
                    <li>المكان: قاعة الاجتماعات الرئيسية</li>
                    <li>المحاور الرئيسية:
                        <ul>
                            <li>مفهوم العمليات التشاركية</li>
                            <li>أساليب إشراك الشباب في صنع القرار</li>
                            <li>آليات تنفيذ جدول أعمال الشباب والسلام والأمن</li>
                        </ul>
                    </li>
                    <li>المتحدثون:
                        <ul>
                            <li>د. سمير قاسم - خبير في السياسات الشبابية</li>
                            <li>أ. نور محمد - مستشارة في برامج الشباب</li>
                        </ul>
                    </li>
                </ul>`;
        } else {
            detailedContent = `
                <p>${sessionContent}</p>
                <hr>
                <h3>تفاصيل الجلسة:</h3>
                <ul>
                    <li>الموعد: 9:00 صباحاً - 12:30 ظهراً</li>
                    <li>المكان: قاعة الاجتماعات الرئيسية</li>
                    <li>المحاور الرئيسية:
                        <ul>
                            <li>مفهوم المشاركة المجتمعية</li>
                            <li>أدوات وتقنيات تعزيز الانخراط المجتمعي</li>
                            <li>نماذج ناجحة للمشاركة المجتمعية</li>
                        </ul>
                    </li>
                    <li>المتحدثون:
                        <ul>
                            <li>د. فاطمة أحمد - خبيرة في التنمية المجتمعية</li>
                            <li>أ. خالد عمر - مدير مشاريع تنموية</li>
                        </ul>
                    </li>
                </ul>`;
        }
        
        document.getElementById('modal-content').innerHTML = detailedContent;
        
        // عرض النافذة المنبثقة
        modal.style.display = 'flex';
        
        // إضافة تأثير حركة للنافذة المنبثقة
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.animation = 'none';
        setTimeout(() => {
            modalContent.style.animation = 'animate__zoomIn 0.4s';
        }, 10);
    }
    
    // إغلاق النافذة المنبثقة
    function closeModal() {
        const modalContent = document.querySelector('.modal-content');
        
        // إضافة تأثير حركة للإغلاق
        modalContent.classList.remove('animate__zoomIn');
        modalContent.classList.add('animate__zoomOut');
        
        // انتظار إكمال التأثير ثم إخفاء النافذة
        setTimeout(() => {
            modal.style.display = 'none';
            modalContent.classList.remove('animate__zoomOut');
            modalContent.classList.add('animate__zoomIn');
        }, 300);
    }
    
    // عرض تنبيه مخصص
    function showCustomAlert(title, message) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-content').innerHTML = `<p>${message}</p>`;
        modal.style.display = 'flex';
    }
    
    // تبديل فصل البطاقة النشطة
    function toggleActiveCard(card) {
        // إلغاء النشاط من جميع البطاقات
        document.querySelectorAll('.session-card').forEach(c => {
            c.classList.remove('active-card');
        });
        
        // تنشيط البطاقة الحالية
        card.classList.add('active-card');
    }
    
    // إضافة تأثيرات تحميل العناصر بالتتابع
    function animateElementsWithDelay() {
        // إضافة تأثير عائم لبعض العناصر
        setTimeout(() => {
            document.querySelectorAll('.icon-container').forEach((icon, index) => {
                icon.style.animation = `float 3s infinite ease-in-out ${index * 0.2}s`;
            });
        }, 1500);
    }
    
    // إضافة تأثير تحميل للصفحة
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
    }, 100);
});
