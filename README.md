# S3IP
<h1> Semester 3 individueel project A. van Heteren </h1>

 Het project is een social media en trading platform voor golfers die hun scores en prestaties willen delen.
 
 <h6>De front-end bestaat uit React, Next.js 13 en Typescript.</h6>
 <h6>De Back-end bestaat uit Node.js, Express & typescript.</h6>
  
[link naar de backend repository](https://github.com/einstein43/s3backendcicd)


 
Op de main branch in de web/frontend/golftrader folder staat de front end.

Repository wordt wekelijks geupdatet.

Trello board link: https://trello.com/b/wYC5AMMO/s3ip

<h2>Architectuur API:</h2>

![image](https://github.com/einstein43/S3IP/assets/104003514/fa344d1f-b427-4c01-91b2-e632890e9770)
![image](https://github.com/einstein43/S3IP/assets/104003514/396a9d3f-3979-497d-8e05-5dfb23803cda)
![image](https://github.com/einstein43/S3IP/assets/104003514/0f8c93ec-d905-492f-8355-28c76270a601)
![image](https://github.com/einstein43/S3IP/assets/104003514/3579c49e-e6c5-42a2-ab0e-42e934a6c24b)

<h2>User stories:</h2>

![image](https://github.com/einstein43/S3IP/assets/104003514/090167d5-64b8-436b-8ccc-511f60ea003a)

<h2> Designs: </h2>

![image](https://github.com/einstein43/S3IP/assets/104003514/6e29b22b-a457-49e4-8b57-0b79ae2d362d)


<h1> Research reports: </h1>

 # SQL Injection Prevention

## Table of Contents
- [Introduction](#introduction)
- [Methodology](#methodology)
  - [Research Strategies](#research-strategies)
  - [Instruments](#instruments)
  - [Limitations](#limitations)
- [Results](#results)
  - [Sources](#sources)

## Introduction
SQL injection is a common web application vulnerability that occurs when malicious SQL statements are inserted into user-supplied data, allowing attackers to manipulate the application's database. This report aims to explore SQL injection prevention technique.

## Methodology
To investigate SQL injection prevention, the following research strategies will be employed:

### Research Strategies
1. Internet Research: Gathering information from trusted sources, security websites, and development forums to understand SQL injection prevention techniques.
2. Case Studies: Analyzing real-world examples of SQL injection attacks and the corresponding prevention measures employed.
3. Expert Interviews: Conducting interviews with cybersecurity professionals and web developers to gain insights into their approaches and best practices for preventing SQL injection.

### Instruments
- Internet research
- Case studies
- Expert interviews

### Limitations
- The scope of this report is focused on SQL injection prevention in the context of CORS.
- The research is limited to the available resources and expertise of the researcher.

## Results
SQL injection prevention involves implementing various techniques and best practices to mitigate the risk of SQL injection attacks. Some key strategies include:

Preventing SQL injection involves implementing techniques and practices to reduce the risk of attacks. Key strategies include:

1. Input Validation: Validate user input to ensure trusted and expected data is processed.

2. Prepared Statements and Parameterized Queries: Use statements that separate SQL logic from user input.

3. Least Privilege Principle: Grant minimal privileges to limit the impact of attacks.

4. Regular Security Patching: Keep software up to date to address vulnerabilities.

5. Security Testing and Code Review: Assess system vulnerabilities through testing and audits.

6. Security Education and Awareness: Train personnel on secure coding practices.

7. Web Application Firewalls (WAF): Use firewalls to detect and block suspicious requests.

Implementing these strategies helps mitigate SQL injection risks. Regular updates and a proactive approach are essential to stay ahead of emerging threats.

 
 

## Bronne
- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Acunetix - How to Prevent SQL Injection Attacks](https://www.acunetix.com/blog/sql-injection/how-to-prevent-sql-injection-attacks/)
- [PortSwigger - SQL Injection](https://portswigger.net/web-security/sql-injection)
- [Imperva - SQL Injection](https://www.imperva.com/learn/application-security/sql-injection-sqli/)
- [W3schools - SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)
