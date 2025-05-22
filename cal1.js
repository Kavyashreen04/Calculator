
const body = document.body; 
const container = document.getElementById('container');
const display = document.getElementById('display');
const buttonRows = document.querySelectorAll('.button-row'); 
const allButtons = document.querySelectorAll('button');


let currentExpression = "";


function applyInitialStyles() {
   
    body.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.minHeight = '100vh';
    body.style.backgroundColor = '#f0f2f5'; 
    body.style.margin = '0';
    body.style.overflow = 'hidden';

   
    container.style.backgroundColor = '#282c34'; 
    container.style.borderRadius = '15px';
    container.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    container.style.padding = '25px';
    container.style.width = '320px'; 
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '15px'; 

   
    display.style.width = '100%';
    display.style.height = '70px';
    display.style.backgroundColor = '#3a414c';
    display.style.border = 'none';
    display.style.borderRadius = '8px';
    display.style.padding = '0 20px';
    display.style.fontSize = '2.8em';
    display.style.textAlign = 'right';
    display.style.color = '#ffffff';
    display.style.boxSizing = 'border-box';
    display.style.marginBottom = '10px';
    display.style.outline = 'none';

    
    buttonRows.forEach(row => {
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.gap = '10px'; // Space between buttons
    });

    // --- All Buttons General Styles ---
    allButtons.forEach(button => {
        button.style.width = '70px';
        button.style.height = '70px';
        button.style.fontSize = '1.8em';
        button.style.border = 'none';
        button.style.borderRadius = '10px';
        button.style.backgroundColor = '#4a525e'; // Default button color
        button.style.color = '#ffffff';
        button.style.cursor = 'pointer';
        // Transitions are also a bit more complex in pure JS, often handled by classes
        // or dedicated libraries. We'll set the initial properties.
        button.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.3)';
    });

    // --- Specific Button Styles (Operators & Clear) ---
    const operatorButtons = ['plus', 'minus', 'mul', 'div', 'mod', 'equals'];
    operatorButtons.forEach(id => {
        const opButton = document.getElementById(id);
        if (opButton) { // Check if element exists
            opButton.style.backgroundColor = '#ffa500'; // Vibrant orange
            opButton.style.color = '#282c34'; // Dark text for operators
        }
    });

    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.style.width = '100%'; // Full width for clear
        clearButton.style.backgroundColor = '#dc3545'; // Red
        clearButton.style.color = 'white';
        clearButton.style.fontWeight = 'bold';
    }
}

/**
 * Updates the calculator's display with the content of `currentExpression`.
 */
function updateDisplay() {
    display.value = currentExpression;
}

/**
 * Appends a given value (number or operator) to the current expression.
 * It also calls `updateDisplay()` to show the new expression.
 * @param {string} value The character (e.g., '1', '+', '*') to add to the expression.
 */
function appendToExpression(value) {
    currentExpression += value;
    updateDisplay();
}

/**
 * Resets the calculator by clearing the current expression and the display.
 */
function clearDisplay() {
    currentExpression = "";
    updateDisplay();
}

/**
 * Evaluates the current mathematical expression.
 * WARNING: Uses eval(), which can be a security risk for untrusted input.
 * For a production calculator, a safer parsing and evaluation method is recommended.
 */
function calculateResult() {
    try {
        let result = eval(currentExpression);
        if (typeof result === 'number' && !isNaN(result)) {
            display.value = result;
            currentExpression = result.toString();
        } else {
            display.value = "Error";
            currentExpression = "";
            console.error("Evaluation resulted in non-numeric or NaN:", result);
        }
    } catch (error) {
        display.value = "Error";
        currentExpression = "";
        console.error("A calculation error occurred:", error);
    }
}

/**
 * Applies a temporary visual feedback effect to a clicked button.
 * It changes the button's background color temporarily and handles hover/active-like states.
 * @param {HTMLElement} buttonElement The button element that was clicked.
 */
function applyButtonFeedback(buttonElement) {
    // Store original colors for reset
    let initialBgColor;
    let initialTransform;
    let initialBoxShadow;

    // Determine initial colors based on button type
    if (buttonElement.id === 'clear') {
        initialBgColor = '#dc3545';
    } else if (['plus', 'minus', 'mul', 'div', 'mod', 'equals'].includes(buttonElement.id)) {
        initialBgColor = '#ffa500';
    } else {
        initialBgColor = '#4a525e';
    }
    initialTransform = 'scale(1)'; // Original scale
    initialBoxShadow = '0 3px 6px rgba(0, 0, 0, 0.3)';

    // Apply active/pressed state styles immediately
    buttonElement.style.backgroundColor = '#3a414c'; // Darker when pressed
    buttonElement.style.transform = 'scale(0.97)'; // Slight shrink
    buttonElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'; // Flatter shadow

    // Set a transition for smoothness *during* the change back (if not already set globally)
    buttonElement.style.transition = 'background-color 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease';


    // Revert styles after a short delay
    setTimeout(() => {
        buttonElement.style.backgroundColor = initialBgColor;
        buttonElement.style.transform = initialTransform;
        buttonElement.style.boxShadow = initialBoxShadow;
    }, 100); // Revert after 100 milliseconds
}

// --- Event Listeners Initialization ---

// Call the function to apply all initial styles when the script loads
applyInitialStyles();

// Loop through each button and attach a click event listener
allButtons.forEach(button => {
    // Re-apply hover styles dynamically (more complex than CSS :hover)
    button.addEventListener('mouseover', () => {
        if (button.id === 'clear') {
            button.style.backgroundColor = '#c82333'; // Darker red on hover
        } else if (['plus', 'minus', 'mul', 'div', 'mod', 'equals'].includes(button.id)) {
            button.style.backgroundColor = '#e69500'; // Darker orange on hover
        } else {
            button.style.backgroundColor = '#5d6775'; // Lighter grey on hover
        }
        button.style.transform = 'translateY(-2px)'; // Slight lift on hover
        button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.4)';
    });

    button.addEventListener('mouseout', () => {
        // Revert to initial colors
        if (button.id === 'clear') {
            button.style.backgroundColor = '#dc3545';
        } else if (['plus', 'minus', 'mul', 'div', 'mod', 'equals'].includes(button.id)) {
            button.style.backgroundColor = '#ffa500';
        } else {
            button.style.backgroundColor = '#4a525e';
        }
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.3)';
    });

    // Handle click logic
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;

        // Apply visual feedback for the click
        applyButtonFeedback(event.target);

        // Determine which calculator function to call
        if (buttonText === "Clear") {
            clearDisplay();
        } else if (buttonText === "=") {
            calculateResult();
        } else {
            appendToExpression(buttonText);
        }
    });
});