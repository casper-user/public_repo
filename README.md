# 🧮 Advanced Calculator

A modern, feature-rich calculator application built with HTML, CSS, and JavaScript. This calculator includes both basic arithmetic operations and advanced scientific functions, with a beautiful glass-morphism design.

![Calculator Demo](docs/calculator-preview.png)

## ✨ Features

### 🔢 Basic Calculator
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Decimal Support**: Full decimal number calculations
- **Clear Functions**: Clear all (C) and backspace delete (⌫)
- **Memory Display**: Shows previous and current operands
- **Keyboard Support**: Full keyboard input support

### 🧪 Scientific Calculator
- **Trigonometric Functions**: sin, cos, tan (in degrees)
- **Logarithmic Functions**: log (base 10), ln (natural log)
- **Power Functions**: Square (x²), Cube (x³), Square root (√)
- **Mathematical Constants**: π (Pi), e (Euler's number)
- **Percentage Calculations**: Quick percentage conversions

### 📊 Advanced Features
- **Calculation History**: View and reuse previous calculations
- **Local Storage**: History persists between sessions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Glass-morphism UI**: Modern, elegant design with blur effects
- **Error Handling**: Prevents division by zero and invalid operations
- **Scientific Mode Toggle**: Switch between basic and scientific modes

### ⌨️ Keyboard Shortcuts
| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+`, `-`, `*`, `/` | Basic operations |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear all |
| `Backspace` | Delete last digit |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/casper-user/calculator-project.git
   cd calculator-project
   ```

2. **Open the calculator**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## 📱 Usage

### Basic Calculations
1. Enter numbers using the number pad or keyboard
2. Select an operation (+, -, ×, ÷)
3. Enter the second number
4. Press `=` or `Enter` to calculate

### Scientific Functions
1. Click the "Scientific Mode" button to reveal advanced functions
2. Enter a number
3. Click any scientific function button (sin, cos, √, etc.)
4. The result appears immediately

### Using History
1. All calculations are automatically saved to history
2. Click "Scientific Mode" to view the history panel
3. Click any history item to reuse its result
4. Use "Clear History" to remove all saved calculations

## 🏗️ Project Structure

```
calculator-project/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styling and animations
├── js/
│   ├── calculator.js         # Core calculator functionality
│   └── advanced-features.js  # Extended features and utilities
├── docs/
│   ├── API.md               # API documentation
│   └── CONTRIBUTING.md      # Contributing guidelines
└── README.md                # This file
```

## 🎨 Design Features

### Glass-morphism Design
- Semi-transparent backgrounds with blur effects
- Subtle borders and shadows
- Modern gradient backgrounds
- Smooth animations and transitions

### Responsive Layout
- **Mobile First**: Optimized for small screens
- **Tablet Support**: Adjusted layout for medium screens
- **Desktop**: Full feature layout with side panels

### Color Scheme
- **Primary**: Gradient blue-purple background
- **Buttons**: Color-coded by function type
- **Numbers**: Light background for easy reading
- **Operations**: Orange accent for visibility
- **Functions**: Gray for utility functions
- **Scientific**: Red accent for advanced functions

## 🔧 Technical Details

### Core Technologies
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks or libraries
- **ES6+**: Modern JavaScript features (Classes, Arrow functions, etc.)

### Key Components

#### Calculator Class
The main calculator engine handling:
- Number input and validation
- Operation processing
- Display formatting
- History management

#### Advanced Features
- Memory functions (store, recall, clear)
- Statistical calculations
- Unit conversions
- Performance monitoring

#### Theme System
- Multiple color themes
- Dark/Light mode support
- Custom theme creation

## 📊 Performance

### Optimization Features
- Efficient calculation algorithms
- Minimal DOM manipulation
- Local storage for persistence
- Responsive design with CSS Grid

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- Use ES6+ JavaScript features
- Follow semantic HTML practices
- Maintain responsive design
- Add comments for complex logic
- Update documentation as needed

## 📝 API Reference

For detailed API documentation, see [API.md](docs/API.md).

### Basic Usage
```javascript
// Initialize calculator
const calculator = new Calculator(previousElement, currentElement);

// Perform calculation
calculator.appendNumber('5');
calculator.chooseOperation('+');
calculator.appendNumber('3');
calculator.compute(); // Result: 8
```

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern calculator apps
- Mathematical functions from standard JavaScript Math library
- Icons and symbols from Unicode standards
- Community feedback and contributions

## 📧 Contact

- **Developer**: Casper User
- **Email**: [your-email@example.com]
- **GitHub**: [@casper-user](https://github.com/casper-user)

---

⭐ **Star this repository if you found it helpful!**

*Made with ❤️ and lots of ☕*
