/* =============================================
   NÚCLEO COMPARTIDO DE LOS OVAS — NO MODIFICAR
   Comportamiento común a todos los OVAs:
     1. Navegación entre secciones (sidebar + mobile)
     2. Acordeones de la sección Contenido
     3. Motor del quiz de Evaluación
   Cargado por cada index.html mediante
   <script src="../assets/ova-core.js"></script>
   colocado al final del <body>.

   El quiz se alimenta de la variable global `quizData`
   (un arreglo de { question, options, correct }) que
   cada OVA define en un <script> ANTES de cargar este
   archivo. Si no hay `quizData` o no existe el contenedor
   del quiz, el motor simplemente no hace nada.
   ============================================= */
(function () {
    'use strict';

    function initNavegacion() {
        // Navegación desktop (sidebar)
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const target = this.dataset.target;
                document.querySelectorAll('.content-pane').forEach(p => p.classList.remove('active'));
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                const pane = document.getElementById(target);
                if (pane) pane.classList.add('active');
                this.classList.add('active');
            });
        });

        // Navegación mobile (select)
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
            mobileNav.addEventListener('change', function () {
                document.querySelectorAll('.content-pane').forEach(p => p.classList.remove('active'));
                const pane = document.getElementById(this.value);
                if (pane) pane.classList.add('active');
            });
        }
    }

    function initAcordeones() {
        document.querySelectorAll('.accordion-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const panel = document.querySelector(this.dataset.target);
                if (!panel) return;
                const icon = this.querySelector('span:last-child');
                if (panel.classList.contains('hidden')) {
                    panel.classList.remove('hidden');
                    if (icon) icon.textContent = '➖';
                } else {
                    panel.classList.add('hidden');
                    if (icon) icon.textContent = '➕';
                }
            });
        });
    }

    function initQuiz() {
        const data = (typeof quizData !== 'undefined') ? quizData : (window.quizData || null);
        const quizContainer = document.getElementById('quiz-container');
        if (!Array.isArray(data) || !quizContainer) return;

        data.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('mb-6');
            div.innerHTML = `
                <p class="font-semibold text-slate-800 mb-3">${index + 1}. ${item.question}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 options-grid">
                    ${item.options.map((opt, i) => `
                        <div class="quiz-option border-2 border-slate-200 rounded-lg p-3 cursor-pointer transition-colors"
                             data-question="${index}" data-option="${i}">
                            <span class="font-medium text-green-700 mr-2">${String.fromCharCode(65 + i)}.</span> ${opt}
                        </div>
                    `).join('')}
                </div>
            `;
            quizContainer.appendChild(div);
        });

        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.addEventListener('click', function () {
                const q = this.dataset.question;
                document.querySelectorAll(`[data-question="${q}"]`).forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        const submitBtn = document.getElementById('submit-quiz-btn');
        if (!submitBtn) return;
        submitBtn.addEventListener('click', () => {
            let score = 0;
            data.forEach((item, index) => {
                const selected = document.querySelector(`.quiz-option.selected[data-question="${index}"]`);
                if (selected && parseInt(selected.dataset.option) === item.correct) score++;
            });
            const result = document.getElementById('quiz-result');
            if (!result) return;
            const pct = Math.round((score / data.length) * 100);
            const aprobado = pct >= 60;
            result.textContent = `Obtuviste ${score} de ${data.length} (${pct}%)`;
            result.textContent += aprobado ? ' 🎉 ¡Excelente trabajo!' : ' 💪 ¡Sigue practicando!';
            result.className = `mt-4 text-lg font-bold ${aprobado ? 'text-green-700' : 'text-red-600'}`;
        });
    }

    function init() {
        initNavegacion();
        initAcordeones();
        initQuiz();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
