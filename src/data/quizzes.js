// src/data/quizzes.js

export const quizzes = {
  JavaScript: [
    // Easy Questions
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Oracle"],
      correctAnswer: "Netscape",
      difficulty: "Easy",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "#", "/* */"],
      correctAnswer: "//",
      difficulty: "Easy",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var myVar;", "int myVar;", "declare myVar;", "dim myVar;"],
      correctAnswer: "var myVar;",
      difficulty: "Easy",
    },
    {
      question: "Which of these is a JavaScript data type?",
      options: ["string", "number", "boolean", "All of the above"],
      correctAnswer: "All of the above",
      difficulty: "Easy",
    },
    {
      question: "What is the correct syntax to print a message in the console in JavaScript?",
      options: ["console.log('message');", "print('message');", "echo('message');", "printf('message');"],
      correctAnswer: "console.log('message');",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "Which method converts a JSON string to a JavaScript object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toObject()"],
      correctAnswer: "JSON.parse()",
      difficulty: "Medium",
    },
    {
      question: "What will be the output of '5' - 2 in JavaScript?",
      options: ["3", "52", "NaN", "TypeError"],
      correctAnswer: "3",
      difficulty: "Medium",
    },
    {
      question: "Which keyword is used to create a class in JavaScript ES6?",
      options: ["class", "constructor", "object", "function"],
      correctAnswer: "class",
      difficulty: "Medium",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current object",
        "The global object",
        "The previous object",
        "None of the above",
      ],
      correctAnswer: "The current object",
      difficulty: "Medium",
    },
    {
      question: "Which of the following is a way to create an array in JavaScript?",
      options: [
        "let arr = [];",
        "let arr = new Array();",
        "let arr = Array();",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is a closure in JavaScript?",
      options: [
        "An inner function that has access to the outer function's variables",
        "A function that calls itself",
        "A function that returns another function",
        "An object with methods",
      ],
      correctAnswer: "An inner function that has access to the outer function's variables",
      difficulty: "Hard",
    },
    {
      question: "How do you check if a variable 'x' is NaN?",
      options: ["x == NaN", "x === NaN", "isNaN(x)", "typeof x === 'NaN'"],
      correctAnswer: "isNaN(x)",
      difficulty: "Hard",
    },
    {
      question: "What will be the output of console.log(0.1 + 0.2 === 0.3);",
      options: ["true", "false", "NaN", "undefined"],
      correctAnswer: "false",
      difficulty: "Hard",
    },
    {
      question: "Which of the following is not a falsy value in JavaScript?",
      options: ["0", "'0'", "null", "undefined"],
      correctAnswer: "'0'",
      difficulty: "Hard",
    },
    {
      question: "What is the purpose of the 'use strict' directive in JavaScript?",
      options: [
        "Enables strict mode which catches common coding mistakes",
        "Defines variables globally",
        "Allows the use of undeclared variables",
        "Disables JavaScript warnings",
      ],
      correctAnswer: "Enables strict mode which catches common coding mistakes",
      difficulty: "Hard",
    },
  ],

  React: [
    // Easy Questions
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "A templating language",
        "A library for state management",
        "A type of database",
      ],
      correctAnswer: "JavaScript XML",
      difficulty: "Easy",
    },
    {
      question: "Which command is used to create a new React project?",
      options: [
        "npx create-react-app my-app",
        "npm install react",
        "react-new-app my-app",
        "npm init react-app",
      ],
      correctAnswer: "npx create-react-app my-app",
      difficulty: "Easy",
    },
    {
      question: "How do you pass data from parent to child in React?",
      options: ["Using props", "Using state", "Using context", "Using reducers"],
      correctAnswer: "Using props",
      difficulty: "Easy",
    },
    {
      question: "What is a state in React?",
      options: [
        "An internal data store (object) of a component",
        "A permanent storage",
        "External storage of a component",
        "None of the above",
      ],
      correctAnswer: "An internal data store (object) of a component",
      difficulty: "Easy",
    },
    {
      question: "Which method is used to render React content to the DOM?",
      options: ["ReactDOM.render()", "React.render()", "render()", "DOM.render()"],
      correctAnswer: "ReactDOM.render()",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "What is the purpose of React's useEffect hook?",
      options: [
        "To perform side effects in function components",
        "To manage state",
        "To create context",
        "To render HTML",
      ],
      correctAnswer: "To perform side effects in function components",
      difficulty: "Medium",
    },
    {
      question: "How do you create a context in React?",
      options: [
        "Using React.createContext()",
        "Using React.useContext()",
        "Using React.Context()",
        "Using React.makeContext()",
      ],
      correctAnswer: "Using React.createContext()",
      difficulty: "Medium",
    },
    {
      question: "What is a higher-order component (HOC) in React?",
      options: [
        "A function that takes a component and returns a new component",
        "A component that returns another component",
        "A component that manages state",
        "A component that handles errors",
      ],
      correctAnswer: "A function that takes a component and returns a new component",
      difficulty: "Medium",
    },
    {
      question: "What does lifting state up mean in React?",
      options: [
        "Moving state to a common ancestor component",
        "Using Redux for state management",
        "Storing state in localStorage",
        "Passing state down via props",
      ],
      correctAnswer: "Moving state to a common ancestor component",
      difficulty: "Medium",
    },
    {
      question: "How do you memoize a component in React?",
      options: ["Using React.memo()", "Using React.useMemo()", "Using React.useState()", "Using React.PureComponent"],
      correctAnswer: "Using React.memo()",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is the purpose of React's useReducer hook?",
      options: [
        "To manage complex state logic",
        "To fetch data from APIs",
        "To replace useEffect",
        "To optimize performance",
      ],
      correctAnswer: "To manage complex state logic",
      difficulty: "Hard",
    },
    {
      question: "What are React portals used for?",
      options: [
        "To render children into a DOM node outside of the parent component's DOM hierarchy",
        "To optimize performance",
        "To handle errors",
        "To manage state",
      ],
      correctAnswer: "To render children into a DOM node outside of the parent component's DOM hierarchy",
      difficulty: "Hard",
    },
    {
      question: "How do you handle errors in React components?",
      options: [
        "Using error boundaries",
        "Using try-catch blocks",
        "Using componentDidCatch",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      difficulty: "Hard",
    },
    {
      question: "What is the difference between useEffect and useLayoutEffect?",
      options: [
        "useLayoutEffect runs synchronously after render",
        "useEffect runs before render",
        "They are the same",
        "useEffect runs synchronously after render",
      ],
      correctAnswer: "useLayoutEffect runs synchronously after render",
      difficulty: "Hard",
    },
    {
      question: "What is reconciliation in React?",
      options: [
        "The process of updating the DOM to match the React elements",
        "Handling state changes",
        "Fetching data from APIs",
        "Error handling",
      ],
      correctAnswer: "The process of updating the DOM to match the React elements",
      difficulty: "Hard",
    },
  ],

  Python: [
    // Easy Questions
    {
      question: "How do you create a function in Python?",
      options: ["def myFunction():", "function myFunction():", "create myFunction():", "func myFunction():"],
      correctAnswer: "def myFunction():",
      difficulty: "Easy",
    },
    {
      question: "Which of the following is used to create a comment in Python?",
      options: ["#", "//", "<!-- -->", "/* */"],
      correctAnswer: "#",
      difficulty: "Easy",
    },
    {
      question: "How do you create a variable with the numeric value 5 in Python?",
      options: ["x = 5", "int x = 5", "x := 5", "x == 5"],
      correctAnswer: "x = 5",
      difficulty: "Easy",
    },
    {
      question: "Which method can be used to remove any whitespace from both the beginning and the end of a string in Python?",
      options: ["strip()", "trim()", "len()", "startswith()"],
      correctAnswer: "strip()",
      difficulty: "Easy",
    },
    {
      question: "How do you insert COMMENTS in Python code?",
      options: ["Using #", "Using //", "Using <!-- -->", "Using /* */"],
      correctAnswer: "Using #",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "What is the output of print(2 ** 3) in Python?",
      options: ["8", "6", "9", "Error"],
      correctAnswer: "8",
      difficulty: "Medium",
    },
    {
      question: "How do you start a while loop in Python?",
      options: ["while condition:", "while (condition) {", "while condition do", "do while condition"],
      correctAnswer: "while condition:",
      difficulty: "Medium",
    },
    {
      question: "What is the correct way to import a module named 'math' in Python?",
      options: ["import math", "include math", "using math", "require 'math'"],
      correctAnswer: "import math",
      difficulty: "Medium",
    },
    {
      question: "Which operator is used for floor division in Python?",
      options: ["/", "//", "%", "**"],
      correctAnswer: "//",
      difficulty: "Medium",
    },
    {
      question: "How do you create a dictionary in Python?",
      options: ["Using curly braces {}", "Using square brackets []", "Using parentheses ()", "Using angle brackets <>"],
      correctAnswer: "Using curly braces {}",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is a generator in Python?",
      options: [
        "A function that returns an iterator",
        "A loop that generates numbers",
        "A built-in function",
        "A module",
      ],
      correctAnswer: "A function that returns an iterator",
      difficulty: "Hard",
    },
    {
      question: "What is the GIL in Python?",
      options: [
        "Global Interpreter Lock",
        "General Indexing Library",
        "Graphical Interface Layer",
        "Generic Input Logic",
      ],
      correctAnswer: "Global Interpreter Lock",
      difficulty: "Hard",
    },
    {
      question: "What is the output of list(range(0)) in Python?",
      options: ["[]", "[0]", "Error", "None"],
      correctAnswer: "[]",
      difficulty: "Hard",
    },
    {
      question: "What is monkey patching in Python?",
      options: [
        "Dynamic modifications of a class or module at runtime",
        "A type of exception",
        "A debugging technique",
        "A way to handle errors",
      ],
      correctAnswer: "Dynamic modifications of a class or module at runtime",
      difficulty: "Hard",
    },
    {
      question: "How do you perform unit testing in Python?",
      options: ["Using the unittest module", "Using the test module", "Using the pytest module", "All of the above"],
      correctAnswer: "All of the above",
      difficulty: "Hard",
    },
  ],

  C: [
    // Easy Questions
    {
      question: "Which data type is used to store whole numbers in C?",
      options: ["int", "float", "char", "string"],
      correctAnswer: "int",
      difficulty: "Easy",
    },
    {
      question: "What does the printf() function do?",
      options: [
        "Prints output to the screen",
        "Reads input from the user",
        "Executes a loop",
        "Closes a program",
      ],
      correctAnswer: "Prints output to the screen",
      difficulty: "Easy",
    },
    {
      question: "Which symbol is used to comment a single line in C?",
      options: ["//", "/* */", "#", ";"],
      correctAnswer: "//",
      difficulty: "Easy",
    },
    {
      question: "Which header file is essential for input/output functions in C?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      correctAnswer: "stdio.h",
      difficulty: "Easy",
    },
    {
      question: "How do you declare a variable in C?",
      options: ["type name;", "var name;", "let name;", "declare name;"],
      correctAnswer: "type name;",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "What is a pointer in C?",
      options: [
        "A variable that stores the memory address of another variable",
        "A function argument",
        "An array",
        "A type of loop",
      ],
      correctAnswer: "A variable that stores the memory address of another variable",
      difficulty: "Medium",
    },
    {
      question: "What is the correct way to allocate memory dynamically in C?",
      options: ["malloc()", "alloc()", "new()", "create()"],
      correctAnswer: "malloc()",
      difficulty: "Medium",
    },
    {
      question: "Which operator is used to access the value at the address stored in a pointer?",
      options: ["*", "&", "->", "."],
      correctAnswer: "*",
      difficulty: "Medium",
    },
    {
      question: "What is the size of an int in C (assuming a 32-bit system)?",
      options: ["4 bytes", "2 bytes", "8 bytes", "Depends on the compiler"],
      correctAnswer: "4 bytes",
      difficulty: "Medium",
    },
    {
      question: "What does the 'extern' keyword signify in C?",
      options: [
        "Declaration without definition",
        "Variable is global",
        "Variable is static",
        "None of the above",
      ],
      correctAnswer: "Declaration without definition",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is the purpose of the 'volatile' keyword in C?",
      options: [
        "Indicates that a variable may change unexpectedly",
        "Makes a variable read-only",
        "Optimizes the variable",
        "None of the above",
      ],
      correctAnswer: "Indicates that a variable may change unexpectedly",
      difficulty: "Hard",
    },
    {
      question: "What is a segmentation fault in C?",
      options: [
        "An error caused by accessing memory that the program doesn't own",
        "A compiler error",
        "An operating system error",
        "A logical error in code",
      ],
      correctAnswer: "An error caused by accessing memory that the program doesn't own",
      difficulty: "Hard",
    },
    {
      question: "What is a dangling pointer in C?",
      options: [
        "A pointer pointing to freed memory",
        "A pointer that is not initialized",
        "A null pointer",
        "A pointer pointing to another pointer",
      ],
      correctAnswer: "A pointer pointing to freed memory",
      difficulty: "Hard",
    },
    {
      question: "How do you prevent a header file from being included multiple times?",
      options: [
        "Using include guards",
        "Using #pragma once",
        "Using conditional compilation",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      difficulty: "Hard",
    },
    {
      question: "What is the output of the expression (5/2)*2 in C?",
      options: ["4", "5", "5.0", "2.5"],
      correctAnswer: "4",
      difficulty: "Hard",
    },
  ],

  SQL: [
    // Easy Questions
    {
      question: "Which SQL keyword is used to retrieve data from a database?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      correctAnswer: "SELECT",
      difficulty: "Easy",
    },
    {
      question: "How do you specify conditions in SQL?",
      options: ["WHERE", "IF", "CASE", "LIKE"],
      correctAnswer: "WHERE",
      difficulty: "Easy",
    },
    {
      question: "What does JOIN do in SQL?",
      options: [
        "Combines rows from two tables",
        "Deletes rows from a table",
        "Updates rows in a table",
        "Retrieves a subset of columns",
      ],
      correctAnswer: "Combines rows from two tables",
      difficulty: "Easy",
    },
    {
      question: "Which SQL statement is used to insert new data into a database?",
      options: ["INSERT INTO", "ADD NEW", "UPDATE", "ADD RECORD"],
      correctAnswer: "INSERT INTO",
      difficulty: "Easy",
    },
    {
      question: "What does the SQL ORDER BY clause do?",
      options: ["Sorts the result-set", "Filters records", "Groups records", "Deletes records"],
      correctAnswer: "Sorts the result-set",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "Which operator is used to select values within a range?",
      options: ["BETWEEN", "IN", "LIKE", "RANGE"],
      correctAnswer: "BETWEEN",
      difficulty: "Medium",
    },
    {
      question: "What does the SQL GROUP BY statement do?",
      options: [
        "Aggregates data across multiple records",
        "Sorts data",
        "Filters data",
        "Joins tables",
      ],
      correctAnswer: "Aggregates data across multiple records",
      difficulty: "Medium",
    },
    {
      question: "What is a primary key in SQL?",
      options: [
        "A unique identifier for a record",
        "A foreign key",
        "A key used for encryption",
        "None of the above",
      ],
      correctAnswer: "A unique identifier for a record",
      difficulty: "Medium",
    },
    {
      question: "Which SQL function is used to count the number of rows?",
      options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"],
      correctAnswer: "COUNT()",
      difficulty: "Medium",
    },
    {
      question: "How do you rename a column in the result set?",
      options: ["Using AS", "Using RENAME", "Using CHANGE", "Using MODIFY"],
      correctAnswer: "Using AS",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is a foreign key in SQL?",
      options: [
        "A key used to link two tables together",
        "A key that uniquely identifies a record",
        "A key that encrypts data",
        "None of the above",
      ],
      correctAnswer: "A key used to link two tables together",
      difficulty: "Hard",
    },
    {
      question: "What does ACID stand for in databases?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Automatic, Consistent, Immediate, Data",
        "Access, Control, Integrity, Data",
        "None of the above",
      ],
      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
      difficulty: "Hard",
    },
    {
      question: "What is a stored procedure in SQL?",
      options: [
        "A prepared SQL code that you can save and reuse",
        "A function to backup data",
        "A method to optimize queries",
        "None of the above",
      ],
      correctAnswer: "A prepared SQL code that you can save and reuse",
      difficulty: "Hard",
    },
    {
      question: "What is normalization in databases?",
      options: [
        "Organizing data to reduce redundancy",
        "Increasing data redundancy",
        "Compressing data",
        "Encrypting data",
      ],
      correctAnswer: "Organizing data to reduce redundancy",
      difficulty: "Hard",
    },
    {
      question: "What is a HAVING clause used for in SQL?",
      options: [
        "To specify conditions on groups",
        "To specify conditions on individual records",
        "To join tables",
        "To order results",
      ],
      correctAnswer: "To specify conditions on groups",
      difficulty: "Hard",
    },
  ],

  Java: [
    // Easy Questions
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["class", "Class", "new", "struct"],
      correctAnswer: "class",
      difficulty: "Easy",
    },
    {
      question: "How do you create an object in Java?",
      options: [
        "new ClassName()",
        "ClassName()",
        "create ClassName()",
        "new Object()",
      ],
      correctAnswer: "new ClassName()",
      difficulty: "Easy",
    },
    {
      question: "What does public static void main() mean in Java?",
      options: [
        "The entry point of a Java program",
        "A function to print output",
        "A loop in Java",
        "A class constructor",
      ],
      correctAnswer: "The entry point of a Java program",
      difficulty: "Easy",
    },
    {
      question: "Which method prints text to the console in Java?",
      options: ["System.out.println()", "print()", "console.log()", "printf()"],
      correctAnswer: "System.out.println()",
      difficulty: "Easy",
    },
    {
      question: "Which keyword is used for inheritance in Java?",
      options: ["extends", "implements", "inherits", "super"],
      correctAnswer: "extends",
      difficulty: "Easy",
    },
    // Medium Questions
    {
      question: "What is encapsulation in Java?",
      options: [
        "Wrapping data and methods into a single unit",
        "Hiding implementation details",
        "Using inheritance",
        "Overloading methods",
      ],
      correctAnswer: "Wrapping data and methods into a single unit",
      difficulty: "Medium",
    },
    {
      question: "What is an interface in Java?",
      options: [
        "A reference type that can contain only abstract methods",
        "A class",
        "A primitive type",
        "A package",
      ],
      correctAnswer: "A reference type that can contain only abstract methods",
      difficulty: "Medium",
    },
    {
      question: "What is method overloading in Java?",
      options: [
        "Having multiple methods with the same name but different parameters",
        "Replacing a method in a subclass",
        "Extending a method",
        "None of the above",
      ],
      correctAnswer: "Having multiple methods with the same name but different parameters",
      difficulty: "Medium",
    },
    {
      question: "How do you handle exceptions in Java?",
      options: ["Using try-catch blocks", "Using if-else statements", "Using switch-case", "Using error handlers"],
      correctAnswer: "Using try-catch blocks",
      difficulty: "Medium",
    },
    {
      question: "What is the output of 10 / 3 in Java?",
      options: ["3", "3.3333", "3.0", "Error"],
      correctAnswer: "3",
      difficulty: "Medium",
    },
    // Hard Questions
    {
      question: "What is the purpose of the 'final' keyword in Java?",
      options: [
        "To declare constants",
        "To prevent method overriding",
        "To prevent inheritance",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      difficulty: "Hard",
    },
    {
      question: "What is the difference between '==' and 'equals()' in Java?",
      options: [
        "'==' checks reference equality, 'equals()' checks value equality",
        "'==' checks value equality, 'equals()' checks reference equality",
        "They are the same",
        "None of the above",
      ],
      correctAnswer: "'==' checks reference equality, 'equals()' checks value equality",
      difficulty: "Hard",
    },
    {
      question: "What is the purpose of garbage collection in Java?",
      options: [
        "To free memory by destroying unreachable objects",
        "To manage memory allocation",
        "To optimize performance",
        "To handle exceptions",
      ],
      correctAnswer: "To free memory by destroying unreachable objects",
      difficulty: "Hard",
    },
    {
      question: "What is a thread in Java?",
      options: [
        "A lightweight subprocess",
        "A data structure",
        "A type of exception",
        "A method",
      ],
      correctAnswer: "A lightweight subprocess",
      difficulty: "Hard",
    },
    {
      question: "What is a Java package and what is its significance?",
      options: [
        "A namespace that organizes classes and interfaces",
        "A type of class",
        "A collection of methods",
        "An interface",
      ],
      correctAnswer: "A namespace that organizes classes and interfaces",
      difficulty: "Hard",
    },
  ],
};
