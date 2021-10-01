# Contributing guidelines

## Before contributing

Welcome to [friskycodeur/curated-project-list](https://github.com/friskycodeur/curated-project-list). Before sending your pull requests, make sure that you **read the whole guidelines**.If you have any doubt on the contributing guide, please feel free to [state it clearly in an issue](https://github.com/friskycodeur/curated-project-list/issues/new).

### Contribution

We appreciate any contribution, from fixing a grammar mistake in a comment to implementing complex algorithms. Please read this section if you are contributing your work.


We want your work to be readable by others; therefore, we encourage you to note the following:
#### Coding Style for JavaScript

- To maximize the readability and correctness of our code, we require that new submissions follow [JavaScript Standard Style](https://standardjs.com/).
- Use camelCase with the leading character as lowercase for identifier names (variables and functions).
- Names start with a letter
- follow code indentation
  - Always use 2 spaces for indentation of code blocks
    ```
    function sumOfArray (arrayOfNumbers) {
      let sum = 0
      for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
      }
      return (sum)
    }
    ```
- Avoid using global variables and avoid '=='
- Please use 'let' over 'var'
- Please use 'console.log()'
- We strongly recommend the use of ECMAScript 6



#### Coding Style for Python

- Follow PEP8 guidelines. Read more about it <a href="https://pep8.org/"> here. </a>
- Please write in Python 3.7+.  __print()__ is a function in Python 3 so __print "Hello"__ will _not_ work but __print("Hello")__ will.
- Please focus hard on naming of functions, classes, and variables.  Help your reader by using __descriptive names__ that can help you to remove redundant comments.
  - Please follow the [Python Naming Conventions](https://pep8.org/#prescriptive-naming-conventions) so variable_names and function_names should be lower_case, CONSTANTS in UPPERCASE, ClassNames should be CamelCase, etc.
  - Expand acronyms because __gcf()__ is hard to understand but __greatest_common_factor()__ is not.
  
- Avoid importing external libraries for basic algorithms. Only use those libraries for complicated algorithms.
- If you need a third party module that is not in the file __requirements.txt__, please add it to that file as part of your submission.

#### Other points to remember while submitting your work: 
- If you have modified/added code work, make sure the code compiles before submitting.
- Don't forget to add readme file to elaborate the project.You can refer to [this sample readme.](https://github.com/friskycodeur/curated-project-list/blob/main/resources/sample_readme.md)
- If you have modified/added documentation work, ensure your language is concise and contains no grammar errors.
- At once, you are asslowed to get 3 issues per segment.
- Do not update the README.md and CONTRIBUTING.md.
Happy Coding :)
