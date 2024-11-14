
// Main function to handle commands
function command(cmd) {
    switch (cmd.toLowerCase().trim()) { // Convert to lowercase and trim white spaces
        case 'help':
            return displayHelp();
        case 'skills':
            return displaySkills();
        case 'projects':
            return displayProjects();
        case 'secret':
            return displaySecret();
        case 'past_experiences':
            return displayPastExperiences();
        case 'contact':
            return displayContact();
        default:
            return "Unknown command. Type 'help' for a list of available commands.";
    }
}

// Function to handle user input and update the terminal output
document.getElementById('terminal-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { // Check if the Enter key is pressed
        e.preventDefault(); // Prevent default action of the Enter key
        const input = e.target.value; // Get the input value
        const output = command(input); // Get the command output
        document.getElementById('terminal-output').innerText += `\n$ ${input}\n${output}\n`; // Update terminal output
        e.target.value = ''; // Clear the input field
    }
});
