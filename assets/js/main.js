function filterPapers(topic) {
    const papers = document.querySelectorAll('.paper-card');
    const tabs = document.querySelectorAll('.filter-tab');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    papers.forEach(paper => {
        const topics = paper.dataset.topics || '';
        if (topic === 'all' || topics.includes(topic)) {
            paper.style.display = 'flex';
        } else {
            paper.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function showEmail(e) {
    e.preventDefault();
    const email = window.emailUser + '@' + window.emailDomain;
    window.location.href = 'mailto:' + email;
}