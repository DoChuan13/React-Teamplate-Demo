<!-- 1. React App and Libaries -->
<!--Can install all Libaries in one time-->

//`npm install --save react-router-dom react-redux redux axios sass react-bootstrap bootstrap antd react-hook-form react-icons react-toastify`
//`yarn add --save react-router-dom react-redux redux axios sass react-bootstrap bootstrap antd react-hook-form react-icons react-toastify`

### React App `npx create-react-app`

### React Router Dom: `npm install react-router-dom --save`

### React Redux Provider Store: `npm install react-redux --save`

### Redux Store & Reducer: `npm install redux --save`

### Axios Mock API: `npm install axios --save`

### Group SCSS Files: `npm install sass --save`

### UI Framework (`Optional, but Suggest Bootstrap, Ant Design, React-Icons and Toastify`)

### 1. React-Bootstrap & Bootstrap: `npm install react-bootstrap bootstrap --save`

//For Modal, Toasty, Form propotype

//For Beauty Toastify

1. Importing Components
   `import Button from'react-bootstrap/Button';`
   // or less ideally
   `import { Button } from'react-bootstrap'`
   //Detail refer to bellow link
   [https://react-bootstrap.netlify.app/getting-started/introduction]

2. CSS
   {/_ The following line can be included in your src/index.js or App.js file _/}
   `import'bootstrap/dist/css/bootstrap.min.css';`
3. Sass
   `@import"~bootstrap/scss/bootstrap";`

### 2. Ant Design `npm install antd --save`

### 3. Metarial UI:

//`npm install --save @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components @fontsource/roboto @mui/icons-material`
//`yarn add --save @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components @fontsource/roboto @mui/icons-material`

`npm install @mui/material @emotion/react @emotion/styled`
`npm install @mui/material @mui/styled-engine-sc styled-components`
`npm install @fontsource/roboto`
`npm install @mui/icons-material`

### 4. Redux Hook Form `npm install react-hook-form --save`

### React Icon: `npm install react-icons --save`

### Toastify for Nofitication `npm install react-toastify --save`

<!-- 2. Structure Folders -->

### Assets Folder

As the name says, it contains assets of our project. It consists of images and styling files. Here we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also. But that depends on developer comfortability.
Layouts Folder

As the name says, it contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.

### Components Folder

Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.

### Pages Folder

The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation. It usually consists of various components grouped.
An asynchronous programming model where the developer process the stream of coming data to propagate the changes in code. Click to explore about, Reactive Programming Solutions for Monitoring Platform
[https://www.xenonstack.com/blog/reactive-programming-monitoring]

### Middleware Folder

This folder consists of middleware that allows for side effects in the application. It is used when we are using redux with it. Here we keep all our custom middleware.

### Routes Folder

This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.

### Config Folder

This folder consists of a configuration file where we store environment variables in config.js. We will use this file to set up multi-environment configurations in your application.

### Services Folder

This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states. The actions and reducers will be called in almost all the pages, so create actions, reducers & constants according to pages name.

### Utils Folder

Utils folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.
