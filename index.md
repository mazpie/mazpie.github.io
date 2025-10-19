---
layout: default
---

<header>
    <div class="container">
        <div class="header-content">
            <div class="profile-photo">
                <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="{{ site.author.name }}">
            </div>
            <div class="header-text">
                <h1>{{ site.author.name }}</h1>
                <p class="subtitle">{{ site.description }}</p>
                <div class="links">
                    <a href="https://scholar.google.com/citations?user={{ site.author.scholar }}" target="_blank">Google Scholar</a>
                    <a href="https://github.com/{{ site.author.github }}" target="_blank">GitHub</a>
                    <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank">X</a>
                    <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank">LinkedIn</a>
                    <!-- <a href="#" onclick="showEmail(event)">Email</a> -->
                </div>
            </div>
        </div>
    </div>
</header>

<nav>
    <div class="container">
        <a href="#about" class="active">About</a>
        <a href="#research-interests">Research interests</a>
        <a href="#publications">Publications</a>
        <!-- <a href="#contact">Contact</a> -->
    </div>
</nav>

<main class="container">
    <section id="about">
        <h2>About</h2>
        <div class="about-content">
            <ul>
                <li>I grew up in Catania, a sunny city next to a <a
                        href="https://en.wikipedia.org/wiki/Mount_Etna">volcano <i
                            class="fa-solid fa-volcano"></i></a> in the east coast of Sicily, Italy.</li>
                <li>During my bachelor, I lived and studied at the superior graduate institute <a
                        href="https://en.wikipedia.org/wiki/Scuola_superiore_di_Catania">Scuola Superiore di
                        Catania</a>, where I was a scholar while attending the BSc Computer Engineering course
                    at the University of Catania.</li>
                <li>For my master degree, I moved to Manchester, UK, where I studied Artificial Intelligence at
                    The University of Manchester.</li>
                <li>I did my PhD at Ghent University, Belgium, supervised by Prof. Bart Dhoedt and Dr. Tim
                    Verbelen. During my PhD, I also interned at Qualcomm AI Research (Amsterdam, Netherlands),
                    Dyson Robot Learning Lab (London, UK) and ServiceNow Research (Montreal, Canada).</li>
            </ul>
        </div>
    </section>
    <section id="research-interests">
        <h2>Research interests</h2>
        <div class="interests">
            <span class="interest-tag">Embodied AI</span>
            <span class="interest-tag">World Models</span>
            <span class="interest-tag">Multimodal Agents</span>
            <span class="interest-tag">Reinforcement Learning</span>
            <span class="interest-tag">Robotics</span>
            <span class="interest-tag">Active Inference</span>
        </div>
    </section>

    <section id="publications">
        <h2>Selected publications</h2>
        <p style="color: var(--text-secondary);">
        Here's a selection of my research contributions. For an exhaustive list, see my Google Scholar profile.
        </p>
        <br>        
        <div class="filter-tabs">
            <button class="filter-tab active" onclick="filterPapers('all')">All</button>
            <button class="filter-tab" onclick="filterPapers('world-models')">World Models</button>
            <button class="filter-tab" onclick="filterPapers('multimodal-agents')">Multimodal Agents</button>
            <button class="filter-tab" onclick="filterPapers('robotics')">Robotics</button>
            <button class="filter-tab" onclick="filterPapers('exploration')">Exploration</button>
            <button class="filter-tab" onclick="filterPapers('active-inference')">Active Inference</button>
        </div>

        <div class="publications-grid" id="papers">
            {% for pub in site.data.publications %}
            <div class="paper-card" data-topics="{{ pub.topics | join: ',' }}">
                <div class="paper-thumbnail">
                    <img src="{{ pub.thumbnail | relative_url }}" alt="{{ pub.title }}">
                </div>
                <div class="paper-content">
                    <div class="paper-title">{{ pub.title }}</div>
                    <div class="paper-authors">{{ pub.authors }}</div>
                    <div class="paper-venue">
                        {% if pub.venue_type == 'conference' %}
                        <span class="venue-badge venue-conference">{{ pub.venue }}</span>
                        {% elsif pub.venue_type == 'journal' %}
                        <span class="venue-badge venue-journal">{{ pub.venue }}</span>
                        {% elsif pub.venue_type == 'workshop' %}
                        <span class="venue-badge venue-workshop">{{ pub.venue }}</span>
                        {% elsif pub.venue_type == 'preprint' %}
                        <span class="venue-badge venue-workshop">{{ pub.venue }}</span>
                        {% endif %}
                        
                        {% if pub.award %}
                        <span class="venue-badge venue-award">{{ pub.award }}</span>
                        {% endif %}
                        
                        <!-- {% for workshop in pub.workshops %}
                        <span class="venue-badge venue-workshop">{{ workshop }}</span>
                        {% endfor %} -->
                    </div>
                    <div class="paper-links">
                        {% for link in pub.links %}
                        <a href="{{ link[1] }}" class="paper-link">{{ link[0] | capitalize }}</a>
                        {% endfor %}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- <section id="contact">
        <h2>Contact</h2>
        <p style="color: var(--text-secondary); line-height: 1.7;">
            I'm always interested in collaborations and discussions about reinforcement learning, world models, and embodied AI. Feel free to reach out via email or connect on social media.
        </p>
        <div class="links" style="margin-top: 20px;">
            <a href="#" onclick="showEmail(event)">Email</a>
        </div>
    </section> -->
</main>

<footer>
    <div class="container">
        <p>&copy; {{ 'now' | date: "%Y" }} {{ site.author.name }}</p>
    </div>
</footer>

<script>
    window.emailUser = "{{ site.author.email_user }}";
    window.emailDomain = "{{ site.author.email_domain }}";
</script>