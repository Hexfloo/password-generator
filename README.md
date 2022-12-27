# Password Generator Chrome Extension :hash::arrows_clockwise:
#### Description:
With this chrome extension, you can generate unique and random passwords based on user specifications.<br> This project was inspired mainly by [this cybersecurity lecture](https://www.youtube.com/watch?v=Kuy4cEXpXEE), and was built with HTML, CSS and JavaScript. You can also view the manifest.json file that is mandatory for chrome.<br>

#### This generator provides the possibility to:
- Choose length of password (1-20 characters long)
- Include/not include uppercase letters
- Include/not include numbers
- Include/not include special symbols
- Copy to clipboard with one easy click

## Why a Password Generator
Strong passwords can be a valuable line of defence against malicious attacks and unwanted access to personal accounts, many of those accounts contain personal information that shouldn't be attained by ill-intentioned adversaries. Weak passwords are an easy target for hackers, but strong passwords are remarkably more difficult to crack.

## Preview
You can try the app [here](https://hexfloo.github.io/password-generator/).<br>
It is important to note that this app is designed as a **chrome extension**, therefore size is fixed accordingly. This link is only for easy preview.

#### Video Demo: https://www.youtube.com/watch?v=aEyzlqz7KVU
[![Password Generator Chrome Extension (CS50 final project)](https://res.cloudinary.com/hexfloo/image/upload/c_scale,q_100,w_385/v1672164406/Picture1_bkkfog.png)](https://www.youtube.com/watch?v=aEyzlqz7KVU)

## My Process
To build this application, I started with listing all of the project's features (listed above). I resumed with clarifying how every feature might be implemented, and which files where need:
- **HTML file** will contain a basic form to capture user's preferences for their password, as well as links for embedded Google Fonts.
- **CSS file** will contain code that specifies the visual implementation of every HTML element.
- **JavaScript file** will contain the logic behind the app - specifically Form handling, DOM manipulation, event listeners and all other supporting functions.
- **Manifest.json file** will contain mandatory information to ensure the app can operate as a chrome extension.

Most of my research  for this application consisted of:
- How to create a chrome extension.
- How to create a proper randomizer: by using Math.random() alongside String.fromCharCode() method to access all wanted characters based on ASCII values.
- and also, how to design a custom range input using CSS.


## CS50
This project was made by me as a final project for Harvard's CS50.<br>
This course is an introduction to computer science taught on Harvard University campus as well as online. It includes subjects such as data structures, algorithms, memory allocation, cybersecurity, frameworks and also several programming languages: C, Python, SQL, HTML, CSS and JavaScript.

More information about CS50 can be found [here](https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0).
