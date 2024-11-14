// Array of help commands with descriptions
const help = [
    'about              Who is TomasK?',
    'skills             His soft and hard skills',
    'projects           View projects',
    'secret             Find the easter egg',
    'past_experiences   His back story',
    'contact            How to reach him'
];

// Function definitions for each command
function displayHelp() {
    return help.join('\n'); // Join array elements into a single string with new lines
}

function displaySkills() {
    return "Skills: JavaScript, Python, HTML, CSS, etc.";
}

function displayProjects() {
    return "Projects: Project A, Project B, Project C, etc.";
}

function displaySecret() {
    return "Secret: This is a hidden command.";
}

function displayPastExperiences() {
    return "Past Experiences: Worked at Company X, Company Y, etc.";
}

function displayContact() {
    return "Contact: Email - example@example.com, Phone - 123-456-7890.";
}
