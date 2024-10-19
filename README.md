# frontend-user-authentication
### Clone the project from github 
### Write change branch command "git checkout master"
### After install open terminal and write command "npm install"
### Then write command "npm run dev"
# This project contains following

### User role base authentication
### Input fields validation
### User redirect according to role
### Loader on singin and singup button
### Tooltip on light and dark mode button in header
### Dark and light Theme configure
### User authentication base JWT decoding
### Mobile responsive
### Presist user state and theme mode
### Handling UI and UX
# Stack for frontend developement
### React js
### Typescript
### Tailwind CSS
### Context Api for user state managment

### Design choices and thought process
well, its not easy to choice perfect design.But I did start from search on google, see different design one of them i like login and register form . So i choice them 


 ### How AI tools were used and their value.
 AI is like having a reliable friend that helps me quickly find answers. It saves me a lot of time compared to traditional methods, such as searching on Google, opening links one by one, and manually looking for solutions. AI is revolutionizing the way we work and live, so it's essential to embrace it and use it to enhance our productivity and overall work experience.
 
 ### Challenges encountered and how they were resolved
 Challenges are a part of every project, and I enjoy facing them because they push me to think critically. When we start thinking deeply, solutions often follow. I encountered several issues in this project, but I’m grateful for the learning opportunities. I was able to recall important concepts and learn new techniques, such as encoding and decoding JWT. Traditionally, information is stored in local storage for various purposes, but I took a different approach for security reasons by decoding the JWT and completing my task more securely.

### Challenge 1: Role-Based Redirection After Registration
Initially, I struggled with redirecting users to the appropriate page based on their role after registration, instead of redirecting everyone to the home page. I examined the login function on the backend, which returned a JWT encoded with user information. By applying the same technique to the registration function and managing the JWT on the frontend, I successfully implemented role-based redirection.

### Challenge 2: Persisting User State After Refresh
When a user logged in or registered, the app reset everything upon refreshing the browser. To solve this, I stored the received JWT in local storage and, upon browser reload, I decoded the token and used the information to maintain the user state on the frontend. This approach resolved the issue.

### Challenge 3: Preventing Duplicate Email Registration
To avoid duplicate email addresses in the JSON database, I used the find function to check for existing users based on their email addresses. If a match was found, I returned a message like "User already exists," which was visible in the network response, ensuring a clear and secure flow.
