# Calculator API Documentation

## Calculator Class

### Constructor
```javascript
new Calculator(previousOperandElement, currentOperandElement)
```
Creates a new calculator instance.

**Parameters:**
- `previousOperandElement` (HTMLElement): Element to display the previous operand
- `currentOperandElement` (HTMLElement): Element to display the current operand

### Methods

#### Basic Operations

##### `clear()`
Resets the calculator to initial state.
```javascript
calculator.clear();
```

##### `delete()`
Removes the last entered digit.
```javascript
calculator.delete();
```

##### `appendNumber(number)`
Adds a digit to the current operand.
```javascript
calculator.appendNumber('5');
calculator.appendNumber('.');
```

##### `chooseOperation(operation)`
Sets the mathematical operation.
```javascript
calculator.chooseOperation('+');
calculator.chooseOperation('×');
calculator.chooseOperation('√');
```

**Supported Operations:**
- Basic: `+`, `-`, `×`, `÷`
- Scientific: `√`, `x²`, `x³`, `sin`, `cos`, `tan`, `log`, `ln`, `%`
- Constants: `π`, `e`

##### `compute()`
Executes the current calculation.
```javascript
calculator.compute();
```

#### Display Methods

##### `updateDisplay()`
Refreshes the calculator display.
```javascript
calculator.updateDisplay();
```

##### `getDisplayNumber(number)`
Formats a number for display.
```javascript
const formatted = calculator.getDisplayNumber(1234.567);
// Returns: "1,234.567"
```

#### History Methods

##### `addToHistory(expression, result)`
Adds a calculation to history.
```javascript
calculator.addToHistory('5 + 3', 8);
```

##### `clearHistory()`
Removes all history entries.
```javascript
calculator.clearHistory();
```

##### `updateHistoryDisplay()`
Refreshes the history panel.
```javascript
calculator.updateHistoryDisplay();
```

## AdvancedCalculator Class

Extends the base Calculator with additional features.

### Memory Operations

##### `memoryStore()`
Saves current operand to memory.
```javascript
advancedCalculator.memoryStore();
```

##### `memoryRecall()`
Retrieves value from memory.
```javascript
advancedCalculator.memoryRecall();
```

##### `memoryAdd()`
Adds current operand to memory.
```javascript
advancedCalculator.memoryAdd();
```

##### `memoryClear()`
Clears memory.
```javascript
advancedCalculator.memoryClear();
```

### Mathematical Functions

##### `factorial(n)`
Calculates factorial of n.
```javascript
const result = advancedCalculator.factorial(5); // 120
```

##### `permutation(n, r)`
Calculates permutations (nPr).
```javascript
const result = advancedCalculator.permutation(5, 3); // 60
```

##### `combination(n, r)`
Calculates combinations (nCr).
```javascript
const result = advancedCalculator.combination(5, 3); // 10
```

### Unit Conversions

##### `convertUnits(value, fromUnit, toUnit)`
Converts between units.
```javascript
const meters = advancedCalculator.convertUnits(100, 'cm', 'm'); // 1
```

**Supported Units:**
- Length: mm, cm, m, km, in, ft, yd, mi
- Weight: mg, g, kg, oz, lb

##### `celsiusToFahrenheit(celsius)`
```javascript
const fahrenheit = advancedCalculator.celsiusToFahrenheit(0); // 32
```

##### `fahrenheitToCelsius(fahrenheit)`
```javascript
const celsius = advancedCalculator.fahrenheitToCelsius(32); // 0
```

### Statistics

##### `calculateStatistics(numbers)`
Calculates statistical measures.
```javascript
const stats = advancedCalculator.calculateStatistics([1, 2, 3, 4, 5]);
// Returns: {count, sum, mean, median, mode, variance, standardDeviation, min, max}
```

## ThemeManager Class

Manages calculator themes.

### Constructor
```javascript
new ThemeManager()
```

### Methods

##### `applyTheme(themeName)`
Applies a theme to the calculator.
```javascript
themeManager.applyTheme('dark');
```

**Available Themes:**
- `default`: Blue-purple gradient
- `dark`: Dark gray theme
- `light`: Light blue theme
- `neon`: Bright neon colors

##### `getAvailableThemes()`
Returns array of available theme names.
```javascript
const themes = themeManager.getAvailableThemes();
```

## PerformanceMonitor Class

Monitors calculation performance.

### Constructor
```javascript
new PerformanceMonitor()
```

### Methods

##### `startTimer(operation)`
Starts timing an operation.
```javascript
const timer = monitor.startTimer('addition');
```

##### `endTimer(timer)`
Stops timing and records duration.
```javascript
const duration = monitor.endTimer(timer);
```

##### `getAverageTime(operation)`
Gets average time for an operation.
```javascript
const avgTime = monitor.getAverageTime('addition');
```

##### `getMetricsReport()`
Returns comprehensive performance report.
```javascript
const report = monitor.getMetricsReport();
```

## Events

The calculator emits no custom events but responds to standard DOM events:

### Keyboard Events
- Number keys (0-9)
- Operation keys (+, -, *, /)
- Enter/Return (equals)
- Escape (clear)
- Backspace (delete)

### Button Events
All calculator buttons use click events with data attributes:
- `data-number`: Number buttons
- `data-operation`: Operation buttons
- `data-equals`: Equals button
- `data-clear`: Clear button
- `data-delete`: Delete button
- `data-decimal`: Decimal point

## Error Handling

### Division by Zero
```javascript
// Automatically handled, displays alert
calculator.appendNumber('5');
calculator.chooseOperation('÷');
calculator.appendNumber('0');
calculator.compute(); // Shows "Cannot divide by zero!" alert
```

### Invalid Operations
Invalid operations return NaN and are handled gracefully:
```javascript
const result = Math.sqrt(-1); // NaN - handled in display
```

## Local Storage

### History Persistence
History is automatically saved to localStorage with key 'calculatorHistory':
```javascript
// Automatically managed, but can be accessed:
const history = JSON.parse(localStorage.getItem('calculatorHistory'));
```

### Theme Persistence
Selected theme is saved with key 'calculatorTheme':
```javascript
const theme = localStorage.getItem('calculatorTheme');
```

## Browser Compatibility

### Required Features
- ES6 Classes
- Local Storage
- CSS Grid
- CSS Flexbox
- addEventListener

### Polyfill Recommendations
For older browsers, consider polyfills for:
- Promise
- Array.from
- Object.assign
