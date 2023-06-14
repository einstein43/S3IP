<h1> Research reports: </h1>

 # SQL Injection Prevention in the Golfcaddy web application

## Table of Contents
- [Introduction](#introduction)
- [Methodology](#methodology)
  - [Research Strategies](#research-strategies)
  - [Instruments](#instruments)
  - [Limitations](#limitations)
- [Results](#results)
  - [Sources](#sources)

## Introduction
SQL injection is a common web application vulnerability that occurs when malicious SQL statements are inserted into user-supplied data, allowing attackers to manipulate the application's database. This report aims to explore SQL injection prevention techniques in an application for keeping track of your golf scores.

## Research question
Which of the seven best SQL injection prevention techniques are best fit for the Golftrader application.
## Subquestions
 1. Are Prepared statements alone enough to secure your database from malicious statements?
 2. What are the best practices for secure coding and parameterized queries to prevent SQL injection vulnerabilities in database systems?

### Research Strategies
1. Internet Research: Gathering information from trusted sources, security websites, and development forums to understand SQL injection prevention techniques.
2. Case Studies: Analyzing real-world examples of SQL injection attacks and the corresponding prevention measures employed.
 

### Instruments
- Internet research
- Case studies


### Limitations
- The scope of this report is focused on SQL injection prevention.
- The research is limited to the available resources and expertise of the researcher.

## Results

## Subquestion 1

Prepared statements are an important security measure for protecting databases from SQL injection attacks. By separating SQL code from user-provided data, prepared statements prevent malicious statements from being executed directly. However, while prepared statements provide a significant level of security, they are not the only measure needed to secure a database. Additional security measures, such as input validation, proper access controls, and regular security updates, should also be implemented to ensure comprehensive database security.


## Subquestion 2

Best practices for secure coding and parameterized queries to prevent SQL injection vulnerabilities in database systems include input validation, sanitizing user inputs, using parameterized queries or prepared statements, avoiding dynamic SQL generation, and implementing proper access controls and privilege management.




SQL injection prevention involves implementing various techniques and best practices to mitigate the risk of SQL injection attacks. Some key strategies include:

Preventing SQL injection involves implementing techniques and practices to reduce the risk of attacks. Key strategies include:

1. Input Validation: Validate user input to ensure trusted and expected data is processed.
   - in my personal project 

2. Prepared Statements and Parameterized Queries: Use statements that separate SQL logic from user input.
    -In my personal Golftrader project i am using parameterized queries in the API calls to make sure it is impossible to send malificent data through API requests.
    - I also use Prepared statements and controlled inputs in all the forms in the application that take an input.

3. Least Privilege Principle: Grant minimal privileges to limit the impact of attacks.

4. Regular Security Patching: Keep software up to date to address vulnerabilities.

5. Security Testing and Code Review: Assess system vulnerabilities through testing and audits.

6. Security Education and Awareness: Train personnel on secure coding practices.

7. Web Application Firewalls (WAF): Use firewalls to detect and block suspicious requests.

Implementing these strategies helps mitigate SQL injection risks. Regular updates and a proactive approach are essential to stay ahead of emerging threats.

 
 ## Conclusion
The best SQL injection prevention strategies for the Golftrader application are input validation and prepared statements because of the inputs that are shown on the website,
it is not difficult to accidentally fill in a wrong value for them. Prepared statements fix most of those user errors and make sure the API and database keep working as they should.

## Bronne
- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Acunetix - How to Prevent SQL Injection Attacks](https://www.acunetix.com/blog/sql-injection/how-to-prevent-sql-injection-attacks/)
- [PortSwigger - SQL Injection](https://portswigger.net/web-security/sql-injection)
- [Imperva - SQL Injection](https://www.imperva.com/learn/application-security/sql-injection-sqli/)
- [W3schools - SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)



