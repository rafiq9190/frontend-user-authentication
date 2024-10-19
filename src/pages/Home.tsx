export default function Home() {
  return (
    <div className="container text-gray-900 dark:text-white mx-auto text-center">
      <h1 className="text-3xl font-medium capitalize">
        Warn Thanks for concidering me!
      </h1>
      <p className="leading-4 mb-2 text-base">Let talk about the project</p>
      <p className="text-2xl font-medium leading-5 mb-3">
        This project contains following
      </p>
      <ul>
        <li>User role base authentication</li>
        <li>Input fields validation</li>
        <li>User redirect according to role</li>
        <li>Loader on singin and singup button</li>
        <li>Tooltip on light and dark mode button in header</li>
        <li>Dark and light Theme configure</li>
        <li>User authentication base JWT</li>
        <li>Mobile responsive</li>
        <li>Presist user state and theme mode</li>
        <li>Handling UI and UX</li>
      </ul>

      <h2 className="text-2xl font-medium">Stack used for this project</h2>
      <ul>
        <li className="text-[22px]">
          <strong>For Frontend</strong>
          <ul className="text-lg">
            <li>React js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>Context Api</li>
          </ul>
        </li>
        <li className="text-[22px]">
          <strong>For Backend</strong>
          <ul className="text-lg">
            <li>Node js</li>
            <li>Express</li>
            <li>Json file for user storeage</li>
            <li>JWT</li>
          </ul>
        </li>
      </ul>
      <h2 className="text-2xl font-medium">
        How to install both project locally
      </h2>
      <p className="text-lg font-medium">Frontend</p>
      <p>1:- Clone the project from github and with this command</p>
      <p>2:- After install open terminal and write command "npm install"</p>
      <p className="mb-3">3:- Then write command "npm run dev"</p>
      <p className="text-lg font-medium">Backend</p>
      <p>1:- Clone the project from github and with this command</p>
      <p>2:-After installing open terminal and write command "npm install"</p>
      <p>3:- Then write command "node server.js"</p>
    </div>
  );
}
