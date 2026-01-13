# Contributing to Advanced Calculator

Thank you for your interest in contributing to the Advanced Calculator project! 🎉

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Issue Guidelines](#issue-guidelines)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites
- Git
- Modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/calculator-project.git
   cd calculator-project
   ```

2. **Create a development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Set up upstream remote**
   ```bash
   git remote add upstream https://github.com/casper-user/calculator-project.git
   ```

## Development Workflow

### Branch Naming Convention
- `feature/feature-name` - New features
- `bugfix/issue-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `test/test-description` - Test additions

### Workflow Steps

1. **Update your local main branch**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create and switch to feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow coding standards
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   - Test in multiple browsers
   - Verify responsive design
   - Check for JavaScript errors
   - Validate HTML and CSS

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new scientific function"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

7. **Create Pull Request**
   - Go to GitHub and create a PR
   - Fill out the PR template
   - Request review from maintainers

## Coding Standards

### HTML Guidelines
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain proper indentation (2 spaces)
- Validate HTML markup

```html
<!-- Good -->
<button class="btn number" data-number="5" aria-label="Number 5">5</button>

<!-- Avoid -->
<div class="button" onclick="addNumber(5)">5</div>
```

### CSS Guidelines
- Follow BEM naming convention when possible
- Use CSS custom properties for theming
- Maintain responsive design principles
- Group related properties together

```css
/* Good */
.calculator {
  background: var(--primary-color);
  border-radius: 20px;
  padding: 25px;
  
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Visual */
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
```

### JavaScript Guidelines
- Use ES6+ features (classes, arrow functions, const/let)
- Follow camelCase naming convention
- Add JSDoc comments for functions
- Handle errors gracefully

```javascript
/**
 * Calculates the factorial of a number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial result
 */
factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

### Commit Message Format
Use the conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: add memory functions to calculator
fix: resolve division by zero error handling
docs: update API documentation for new methods
style: improve button hover animations
```

## Testing Guidelines

### Manual Testing Checklist

#### Basic Functionality
- [ ] All number buttons work correctly
- [ ] Basic operations (+, -, ×, ÷) function properly
- [ ] Decimal point input works
- [ ] Clear and delete functions work
- [ ] Equals button calculates correctly

#### Scientific Functions
- [ ] Trigonometric functions work (sin, cos, tan)
- [ ] Logarithmic functions work (log, ln)
- [ ] Power functions work (√, x², x³)
- [ ] Constants (π, e) insert correctly
- [ ] Percentage calculations work

#### User Interface
- [ ] Responsive design works on different screen sizes
- [ ] Buttons provide visual feedback on interaction
- [ ] Display shows numbers correctly
- [ ] History panel functions properly
- [ ] Scientific mode toggle works

#### Browser Testing
Test in at least three browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari/Edge

#### Keyboard Input
- [ ] Number keys work
- [ ] Operation keys work
- [ ] Enter/Return calculates
- [ ] Escape clears calculator
- [ ] Backspace deletes

### Automated Testing
While we don't currently have automated tests, consider adding:
- Unit tests for calculation functions
- Integration tests for user workflows
- End-to-end tests for critical paths

## Submitting Changes

### Pull Request Guidelines

1. **Fill out the PR template completely**
2. **Include screenshots for UI changes**
3. **Describe the changes clearly**
4. **Reference related issues**
5. **Ensure all checks pass**

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] Browser compatibility verified
- [ ] Responsive design checked

## Screenshots
[Include screenshots for UI changes]

## Related Issues
Fixes #[issue-number]
```

### Review Process
1. **Automated checks** - Code formatting, basic validation
2. **Maintainer review** - Code quality, functionality
3. **Testing** - Manual verification of changes
4. **Merge** - After approval and passing checks

## Issue Guidelines

### Bug Reports
When reporting bugs, include:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Enter '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome 96]
- OS: [e.g. Windows 10]
- Device: [e.g. Desktop, iPhone 12]
```

### Feature Requests
For new features, include:

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots about the feature request.
```

### Question Format
For questions:

```markdown
**What are you trying to do?**
Describe your goal or use case.

**What have you tried?**
What approaches have you already attempted?

**Additional context**
Any other relevant information.
```

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors graph

## Getting Help

- **Documentation**: Check the README and API docs first
- **Issues**: Search existing issues before creating new ones
- **Discussion**: Use GitHub Discussions for general questions
- **Discord**: [Optional community chat link]

## Resources

### Learning Materials
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)

### Browser Testing
- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

Thank you for contributing to the Advanced Calculator! 🧮✨
