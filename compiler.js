// Script to handle code execution
document.getElementById('run-btn').addEventListener('click', function() {
    const code = document.getElementById('code-editor').value; // Get code from the textarea
    const outputElement = document.getElementById('output'); // Output element
  
    try {
      // Clear previous output
      outputElement.textContent = '';
  
      // Use eval() to execute the JavaScript code entered by the user
      const result = eval(code);
  
      // Display the result in the output element
      outputElement.textContent = result !== undefined ? result : 'Code executed successfully, but no output.';
    } catch (error) {
      // Display any errors that occur during code execution
      outputElement.textContent = `Error: ${error.message}`;
    }
  });
  