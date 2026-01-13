// Advanced Calculator Features
class AdvancedCalculator extends Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        super(previousOperandElement, currentOperandElement);
        this.memory = 0;
        this.setupAdvancedEventListeners();
    }

    // Memory functions
    memoryStore() {
        this.memory = parseFloat(this.currentOperand) || 0;
        this.showNotification('Memory Stored');
    }

    memoryRecall() {
        this.currentOperand = this.memory.toString();
        this.shouldResetScreen = true;
        this.updateDisplay();
        this.showNotification('Memory Recalled');
    }

    memoryAdd() {
        this.memory += parseFloat(this.currentOperand) || 0;
        this.showNotification('Added to Memory');
    }

    memoryClear() {
        this.memory = 0;
        this.showNotification('Memory Cleared');
    }

    // Advanced mathematical operations
    factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    permutation(n, r) {
        return this.factorial(n) / this.factorial(n - r);
    }

    combination(n, r) {
        return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    }

    // Unit conversions
    convertUnits(value, fromUnit, toUnit) {
        const conversions = {
            // Length (to meters)
            'mm': 0.001,
            'cm': 0.01,
            'm': 1,
            'km': 1000,
            'in': 0.0254,
            'ft': 0.3048,
            'yd': 0.9144,
            'mi': 1609.34,
            
            // Weight (to grams)
            'mg': 0.001,
            'g': 1,
            'kg': 1000,
            'oz': 28.3495,
            'lb': 453.592,
            
            // Temperature conversions handled separately
        };
        
        if (fromUnit in conversions && toUnit in conversions) {
            const baseValue = value * conversions[fromUnit];
            return baseValue / conversions[toUnit];
        }
        
        return value; // Return original if conversion not found
    }

    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Expression parser for complex calculations
    parseExpression(expression) {
        try {
            // Replace calculator symbols with JavaScript operators
            const jsExpression = expression
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/π/g, Math.PI)
                .replace(/e/g, Math.E);
            
            // Evaluate safely (in a real app, use a proper expression parser)
            return Function('"use strict"; return (' + jsExpression + ')')();
        } catch (error) {
            return NaN;
        }
    }

    // Statistical functions
    calculateStatistics(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return null;
        
        const sum = numbers.reduce((a, b) => a + b, 0);
        const mean = sum / numbers.length;
        
        const sortedNumbers = [...numbers].sort((a, b) => a - b);
        const median = sortedNumbers.length % 2 === 0
            ? (sortedNumbers[sortedNumbers.length / 2 - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2
            : sortedNumbers[Math.floor(sortedNumbers.length / 2)];
        
        const variance = numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / numbers.length;
        const standardDeviation = Math.sqrt(variance);
        
        return {
            count: numbers.length,
            sum: sum,
            mean: mean,
            median: median,
            mode: this.calculateMode(numbers),
            variance: variance,
            standardDeviation: standardDeviation,
            min: Math.min(...numbers),
            max: Math.max(...numbers)
        };
    }

    calculateMode(numbers) {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];
        
        numbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
            if (frequency[num] > maxFreq) {
                maxFreq = frequency[num];
            }
        });
        
        Object.keys(frequency).forEach(num => {
            if (frequency[num] === maxFreq) {
                modes.push(parseFloat(num));
            }
        });
        
        return modes.length === numbers.length ? null : modes;
    }

    // Notification system
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(40, 167, 69, 0.9);
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    setupAdvancedEventListeners() {
        // Add CSS for notifications
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Theme manager for calculator
class ThemeManager {
    constructor() {
        this.themes = {
            default: {
                primary: '#667eea',
                secondary: '#764ba2',
                accent: '#ff6b35'
            },
            dark: {
                primary: '#2c3e50',
                secondary: '#34495e',
                accent: '#e74c3c'
            },
            light: {
                primary: '#3498db',
                secondary: '#2980b9',
                accent: '#f39c12'
            },
            neon: {
                primary: '#ff006e',
                secondary: '#8338ec',
                accent: '#3a86ff'
            }
        };
        this.currentTheme = localStorage.getItem('calculatorTheme') || 'default';
        this.applyTheme(this.currentTheme);
    }

    applyTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        const theme = this.themes[themeName];
        const root = document.documentElement;
        
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--secondary-color', theme.secondary);
        root.style.setProperty('--accent-color', theme.accent);
        
        localStorage.setItem('calculatorTheme', themeName);
        this.currentTheme = themeName;
    }

    getAvailableThemes() {
        return Object.keys(this.themes);
    }
}

// Performance monitor for calculations
class PerformanceMonitor {
    constructor() {
        this.metrics = [];
    }

    startTimer(operation) {
        return {
            operation: operation,
            startTime: performance.now()
        };
    }

    endTimer(timer) {
        const endTime = performance.now();
        const duration = endTime - timer.startTime;
        
        this.metrics.push({
            operation: timer.operation,
            duration: duration,
            timestamp: new Date()
        });
        
        // Keep only last 100 operations
        if (this.metrics.length > 100) {
            this.metrics = this.metrics.slice(-100);
        }
        
        return duration;
    }

    getAverageTime(operation) {
        const operationMetrics = this.metrics.filter(m => m.operation === operation);
        if (operationMetrics.length === 0) return 0;
        
        const totalTime = operationMetrics.reduce((sum, m) => sum + m.duration, 0);
        return totalTime / operationMetrics.length;
    }

    getMetricsReport() {
        const operations = [...new Set(this.metrics.map(m => m.operation))];
        const report = {};
        
        operations.forEach(op => {
            const opMetrics = this.metrics.filter(m => m.operation === op);
            report[op] = {
                count: opMetrics.length,
                averageTime: this.getAverageTime(op),
                totalTime: opMetrics.reduce((sum, m) => sum + m.duration, 0)
            };
        });
        
        return report;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdvancedCalculator, ThemeManager, PerformanceMonitor };
}
