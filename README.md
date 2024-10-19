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
 Well, challenges is a part of every thing and i love to face chanllenges because it force to you for thinking. when a human start thinking then must be find solution. I face many issues in this project but i am happy that many things are recall and learn many new things like JWT encode and decode. In tranditional way, we save info in local storage for future use or any other reason. but I used another techique instead follow trandition way, i decode JWT and complete my task for security reason.
 #### Chanllenge
 I want to redirect user when user register instead of redirect to Home page . I want to redirect to related page base on role.
 so in start i failed many time. Then check login function on backend , its return jwt encode with user info. I did used same technique on register function and handle on frontend side
 #### chanllenge
 when user register or login once i refresh browser . Every thing start from zero. I need to stop it. So i already recevied JWT . I did store it in local storage and check when browser restart then decode it and utilize it on frontend side . Now this issue resolve
 #### chanllenge
 I want to stop duplication of email address in json db. so i did checked my existing user with find function and return massage like user already exist . it will show in network.
 
