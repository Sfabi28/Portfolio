const input = document.getElementById("commandInput");
const output = document.getElementById("outputArea");

document.addEventListener("click", () => {
    input.focus();
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = input.value;
        
        createHistoryLine(command);
        
        processCommand(command.trim().toLowerCase());
        
        input.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function createHistoryLine(cmd) {
    const newLine = document.createElement("div");
    
    newLine.className = "history-line";
    
    const promptHTML = `
        <span class="user">user</span>
        <span class="points">:</span>
        <span class="Portfolio">~/Portfolio</span>
    `;
    
    newLine.innerHTML = `${promptHTML} ${cmd}`;
    output.appendChild(newLine);
}

function processCommand(cmd) {
    if (cmd === "") return;

    let response = "";

    switch(cmd) {
        case "help":
            response = "Available commands:<br>&nbsp;&nbsp;whoami&nbsp;&nbsp;&nbsp;- Info about me<br>&nbsp;&nbsp;ls&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List projects<br>&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;- Clear terminal<br>&nbsp;&nbsp;social&nbsp;&nbsp;&nbsp;- GitHub & Contacts";
            break;
        
        case "whoami":
            response = "I am Sfabi28, a student at 42 School.<br>I love automation, C, and building strict testers.";
            break;

        case "ls":
            response = `
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <div><a href="https://github.com/Sfabi28/libft_tester" target="_blank">libft_tester</a></div>
                <div><a href="https://github.com/Sfabi28/printf_tester" target="_blank">printf_tester</a></div>
                <div><a href="https://github.com/Sfabi28/gnl_tester" target="_blank">gnl_tester</a></div>
                <div><a href="https://github.com/Sfabi28/push_swap_tester" target="_blank">push_swap_tester</a></div>
            </div>`;
            break;

        case "social":
            response = 'Find me on <a href="https://github.com/Sfabi28" target="_blank">GitHub</a>.';
            break;

        case "clear":
            output.innerHTML = "";
            return;

        default:
            response = `Command not found: ${cmd}. Type 'help' to see available commands.`;
            break;
    }

    if (response) {
        const respDiv = document.createElement("div");
        respDiv.style.marginBottom = "15px";
        respDiv.style.color = "#cccccc";
        respDiv.innerHTML = response;
        output.appendChild(respDiv);
    }
}