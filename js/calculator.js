class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
        this.clear();
        this.setupEventListeners();
        this.updateHistoryDisplay();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
    }

    delete() {
        if (this.currentOperand === '0') return;
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
    }

    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        
        // Handle special constants
        if (operation === 'π') {
            this.currentOperand = Math.PI.toString();
            this.shouldResetScreen = true;
            return;
        }
        if (operation === 'e') {
            this.currentOperand = Math.E.toString();
            this.shouldResetScreen = true;
            return;
        }

        // Handle unary operations
        if (this.isUnaryOperation(operation)) {
            this.performUnaryOperation(operation);
            return;
        }

        if (this.previousOperand !== '' && !this.shouldResetScreen) {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.shouldResetScreen = true;
    }

    isUnaryOperation(operation) {
        return ['√', 'x²', 'x³', 'sin', 'cos', 'tan', 'log', 'ln', '%'].includes(operation);
    }

    performUnaryOperation(operation) {
        const current = parseFloat(this.currentOperand);
        let result;

        switch (operation) {
            case '√':
                result = Math.sqrt(current);
                break;
            case 'x²':
                result = Math.pow(current, 2);
                break;
            case 'x³':
                result = Math.pow(current, 3);
                break;
            case 'sin':
                result = Math.sin(this.toRadians(current));
                break;
            case 'cos':
                result = Math.cos(this.toRadians(current));
                break;
            case 'tan':
                result = Math.tan(this.toRadians(current));
                break;
            case 'log':
                result = Math.log10(current);
                break;
            case 'ln':
                result = Math.log(current);
                break;
            case '%':
                result = current / 100;
                break;
            default:
                return;
        }

        // Add to history
        this.addToHistory(`${operation}(${current})`, result);
        
        this.currentOperand = result.toString();
        this.shouldResetScreen = true;
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert("Cannot divide by zero!");
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Add to history
        const expression = `${prev} ${this.operation} ${current}`;
        this.addToHistory(expression, computation);

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    addToHistory(expression, result) {
        const historyItem = {
            expression: expression,
            result: this.formatResult(result),
            timestamp: new Date().toLocaleTimeString()
        };
        
        this.history.unshift(historyItem);
        
        // Keep only last 50 calculations
        if (this.history.length > 50) {
            this.history = this.history.slice(0, 50);
        }
        
        // Save to localStorage
        localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
        this.updateHistoryDisplay();
    }

    formatResult(number) {
        if (number === undefined || number === null) return '';
        
        // Handle very large and very small numbers
        if (Math.abs(number) > 1e15 || (Math.abs(number) < 1e-6 && number !== 0)) {
            return number.toExponential(6);
        }
        
        // Format with appropriate decimal places
        const formatted = parseFloat(number.toPrecision(12));
        return formatted.toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.textContent = this.getDisplayNumber(this.currentOperand);
        
        if (this.operation != null) {
            this.previousOperandElement.textContent = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }

    updateHistoryDisplay() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        
        this.history.forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-expression">${item.expression}</div>
                <div class="history-result">= ${item.result}</div>
            `;
            
            // Click to use result
            historyItem.addEventListener('click', () => {
                this.currentOperand = item.result;
                this.shouldResetScreen = true;
                this.updateDisplay();
            });
            
            historyList.appendChild(historyItem);
        });
    }

    clearHistory() {
        this.history = [];
        localStorage.removeItem('calculatorHistory');
        this.updateHistoryDisplay();
    }

    setupEventListeners() {
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9' || e.key === '.') {
                this.appendNumber(e.key);
                this.updateDisplay();
            }
            
            if (e.key === '+' || e.key === '-') {
                this.chooseOperation(e.key);
                this.updateDisplay();
            }
            
            if (e.key === '*') {
                this.chooseOperation('×');
                this.updateDisplay();
            }
            
            if (e.key === '/') {
                e.preventDefault();
                this.chooseOperation('÷');
                this.updateDisplay();
            }
            
            if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                this.compute();
                this.updateDisplay();
            }
            
            if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                this.clear();
                this.updateDisplay();
            }
            
            if (e.key === 'Backspace') {
                this.delete();
                this.updateDisplay();
            }
        });
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const previousOperandElement = document.getElementById('previous-operand');
    const currentOperandElement = document.getElementById('current-operand');
    const calculator = new Calculator(previousOperandElement, currentOperandElement);

    // Number buttons
    document.querySelectorAll('[data-number]').forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.textContent);
            calculator.updateDisplay();
        });
    });

    // Operation buttons
    document.querySelectorAll('[data-operation]').forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.textContent);
            calculator.updateDisplay();
        });
    });

    // Equals button
    document.querySelector('[data-equals]').addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay();
    });

    // Clear button
    document.querySelector('[data-clear]').addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
    });

    // Delete button
    document.querySelector('[data-delete]').addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
    });

    // Decimal button
    document.querySelector('[data-decimal]').addEventListener('click', () => {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    });

    // Scientific mode toggle
    const toggleScientific = document.getElementById('toggle-scientific');
    const scientificPanel = document.querySelector('.scientific-panel');
    const historyPanel = document.getElementById('history-panel');
    
    toggleScientific.addEventListener('click', () => {
        scientificPanel.classList.toggle('active');
        historyPanel.classList.toggle('active');
        toggleScientific.classList.toggle('active');
        
        if (toggleScientific.classList.contains('active')) {
            toggleScientific.innerHTML = '<span>Basic Mode</span>';
        } else {
            toggleScientific.innerHTML = '<span>Scientific Mode</span>';
        }
    });

    // Clear history button
    document.getElementById('clear-history').addEventListener('click', () => {
        calculator.clearHistory();
    });

    // Initial display update
    calculator.updateDisplay();
});

// Add some utility functions for enhanced functionality
class CalculatorUtils {
    static formatExpression(expression) {
        return expression
            .replace(/\*/g, '×')
            .replace(/\//g, '÷');
    }
    
    static isValidNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }
    
    static limitDecimalPlaces(num, places = 10) {
        return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
    }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Calculator, CalculatorUtils };
}
