

    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenProjects = document.querySelectorAll('.project-box.hidden');

    showMoreBtn.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.classList.remove('hidden');
        });
        showMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    });

    showLessBtn.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.classList.add('hidden');
        });
        showLessBtn.classList.add('hidden');
        showMoreBtn.classList.remove('hidden');
    });

