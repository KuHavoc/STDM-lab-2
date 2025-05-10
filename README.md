# STDM-lab-2

## Project Overview
This project provides two implementations of a list data structure where elements are characters:
1. <b>Array-based list</b> - Uses TypeScript arrays for storage
2. <b>Doubly linked list</b> - Custom implementation with node-based architecture
---
1. #### Array-Based List
- <b>Storage</b>: Built using TypeScript's native arrays
- <b>Key Operations</b>:
  - `append(element)`: Add to end (O(1))
  - `insert(index, element)`: Insert at position (O(n))
  - `delete(index)`: Remove by position (O(n))
  - `deleteAll(element)`: Bulk removal (O(n))
  - `reverse()`: In-place reversal (O(n))
  - `clone()`: Deep copy functionality
  - `findFirst()/findLast()`: Efficient index-based searches

2. #### Doubly Linked List
- <b>Storage</b>: Custom node-based implementation with prev/next pointers
- <b>Key Operations</b>:
  - All array list operations with optimized edge cases:
    - `insert(0, element)`: O(1) head insertion
    - `delete(0)`: O(1) head removal
    - `reverse()`: O(n) pointer manipulation
  - Direct head/tail access for efficient boundary operations
  - Memory-safe node cleanup on deletion

#### Shared Functionality
Both implementations provide:
- <b>Index validation</b> (throws RangeError for invalid positions)
- <b>Bulk operations</b>: clear(), extend()
- <b>Full cloning</b> without shared references
- <b>Type safety</b> for character elements

## Variant Calculation
```bash
Variant = 9mod4 = 1
```
### Implementation Requirements:
1. Primary implementation: Doubly linked list
2. Secondary implementation: Array-based list

### Actual Implementations Delivered:
1. <i><u>ArrayList</u></i> - Array-based list using TypeScript arrays
2. <i><u>LinkedList</u></i> - Custom doubly linked list implementation

## Setup Project
1. Ensure [Node.js](https://nodejs.org/) (v18+) is installed
2. Clone repository and install dependencies:
```bash
git clone https://github.com/KuHavoc/STDM-lab-2
cd STDM-lab-2
npm install
```

## Running Tests
Execute comprehensive test suite:
```bash
npm test
```

## [Failed CI Tests Demonstration](https://github.com/KuHavoc/STDM-lab-2/commit/a92de01aca59e129232e4655aa658acf5f5a5865)

## Conclusions
Unit testing and CI/CD practices fundamentally transformed how I approach code quality. Initially skeptical about the time investment, I discovered that:
- Tests act as safety nets, catching hidden edge cases during refactoring (e.g., broken pointer logic in linked lists)
- CI pipelines prevent "works on my machine" syndrome, exposing environment-specific flaws early
- Automated checks enable fearless iteration — I optimized array list operations 3x faster with test-backed confidence

While writing tests felt tedious initially, they saved countless hours in debugging complex list interactions. The true payoff came when extending features: tests immediately flagged regressions, proving their worth as living documentation.

This experience solidified that testing isn’t overhead — it’s essential craftsmanship. Combined with CI’s instant feedback, it shifts development from hopeful guesswork to systematic reliability. I’ll never ship untested code again.