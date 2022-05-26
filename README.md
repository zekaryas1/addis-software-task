# addis-software-task

## How to test the project
### backend
the backedn uses docker thus it will be simple, 
- create .env file with a mongodb database connection string
- <code>docker build . -t <your username>/employee-back-end</code>
- <code>docker run -p 8080:8080 -d <your username>/employee-back-end</code>
- open up a browser and you will see an API documentation, on how to access the project
  
#### backedn featured
  - MVC architecture
  - Swagger API documentation
  
## front-end
the front-end is a react project, follow the following setup
  - <code>npm install & npm run start</code>
  - follow the page it open in the browser ans you should see the following homepage.
  
#### front-end techs used
  - react + typescript
  - redux
  - react router
  - styled components
