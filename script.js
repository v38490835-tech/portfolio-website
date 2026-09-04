document.getElementById("name").textContent =
portfolio.name;

document.getElementById("role").textContent =
portfolio.role;

document.getElementById("tagline").textContent =
portfolio.tagline;

document.getElementById("aboutText").textContent =
portfolio.about;

document.getElementById("email").textContent =
portfolio.email;

document.getElementById("githubLink").href =
portfolio.github;

document.getElementById("linkedinLink").href =
portfolio.linkedin;

const skillsContainer =
document.getElementById("skillsContainer");

portfolio.skills.forEach(skill => {

    const div =
    document.createElement("div");

    div.className = "skill";

    div.textContent = skill;

    skillsContainer.appendChild(div);
});

const projectsContainer =
document.getElementById("projectsContainer");

portfolio.projects.forEach(project => {

    const card =
    document.createElement("div");

    card.className = "project";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <br>
        <a href="${project.link}" target="_blank">
        View Project
        </a>
    `;

    projectsContainer.appendChild(card);
});

document
.getElementById("themeToggle")
.addEventListener("click", () => {

    document.body.classList.toggle("light");
});
