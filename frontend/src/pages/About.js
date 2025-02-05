// about.js

document.addEventListener('DOMContentLoaded', function () {
    // Update hero section
    const heroSection = document.createElement('div');
    heroSection.className = 'hero';
    heroSection.innerHTML = `
        <h1>Discover the Joy of Car DIY</h1>
        <p>From tools to tips, explore everything you need to maintain and customize your car.</p>
    `;
    document.body.prepend(heroSection);

    // Add sections below hero
    const sectionsContainer = document.createElement('div');
    sectionsContainer.className = 'sections';
    sectionsContainer.innerHTML = `
        <div class="section">
            <img src="placeholder-diy.png" alt="DIY">
            <h3>DIY Projects</h3>
            <p>Learn how to take care of your car with simple step-by-step guides.</p>
        </div>
        <div class="section">
            <img src="placeholder-tools.png" alt="Tools">
            <h3>Essential Tools</h3>
            <p>Find the tools that make every car project easier and more efficient.</p>
        </div>
        <div class="section">
            <img src="placeholder-community.png" alt="Community">
            <h3>Join the Community</h3>
            <p>Connect with car enthusiasts and share your journey.</p>
        </div>
    `;
    document.body.appendChild(sectionsContainer);
