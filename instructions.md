Personal Blog Project (React) - Part 1
Introduction
You are going to create a personal blog using React. You will be practicing the following concepts:

create React project.
create React components.
JS import/export.
Breaking down the UI into components.
The blog will have the Following pages:

Home page: this page will display a welcome message and the last 3 posts.
Posts page: this page will display all the posts.
Post page: this page will display the post content.
About page: this page will display information about the blog owner.
Contact page: this page will display a contact form.
Admin page: this page will display a form to add a new post.
You will be using React.

First step:
Create a new React project using the following command:

npx create-react-app <my-blog>

Second step:
Create the following components for each page:

Home: this component will display the home page.
Posts: this component will display the posts page.
Post: this component will display the post page.
About: this component will display the about page.
Contact: this component will display the contact page.
Admin: this component will display the admin page.

In addition, create shared components as follows:

Header: this component will display the header of the page.
Footer: this component will display the footer of the page.

Your AppComponent should look like this:

function App() {
   return (
       <div>
         <Header />
           <Home />
           <Posts />
           <Post />
           <About />
           <Contact />
           <Admin />
           <Footer />
       </div>
   );
 }

 Third step:
 inside Posts page:

 create a component called PostCard that will display the post title, image, and description.
 create a component called PostList that will display a list of PostCard components.

 inside admin page:

 create a component called PostForm that will display a form to add a new post.

 iniside contact page:

 create a component called ContactForm that will display a form to send a message.
 
Please note!:
 You can choose one of these options:

 Use the provided Figma design to create the components.
 Create your own design.
 Use the same project from the HTML/CSS project and convert it to React.
 You don't have to:
 Use useState
 Add any functionality to the pages.



     Personal blog day 2
 Notes:
     No CSS!!! No CSS!!! No CSS!!
     We will practice useState and conditions
 Instructions:
     complete all components from yesterday
inside App.js component
Create empty array of posts using useState
Pass the posts array to Posts component with props
    Posts component should display the number of posts (posts.length)
Posts component should display all posts by using the PostList component,
    Pass the posts array from Posts component to the PostList component with props
    The PostLIst component should display all posts by using the PostCard component
The PostList component should use map to loop over the posts array, and return a PostCard component for each post
The PostList component should pass the post object to the PostCard component with props
    The PostCard component should display the post title and body
practice passing functions as props:
    create a function in App.js that will add a new post to the posts array. use the setPosts from the useState function.
pass the function to the Admin component with props
    inside admin component, get the data from the newPost form using the onSubmit event (<form onSubmit='')
Bonus!! Bonus!! Bonus!! (no CSS)
inside App.js component create a state (using useState) named: pageName (string).
    create 3 buttons, each should set the pageName to the page names you would like to show:
    create a condition that will display the correct component according to the pageName state 4. start with: 'Home', 'Posts', 'Admin'
create a condition that will display the correct component according to the pageName state 6. use ternary operator to display the correct component:
{pageName === 'Home' ? <Home /> : null}
experience with swith statement:
    switch(pageName) {
        case 'Home':
            return <Home />
        case 'Posts':
            return <Posts />
        case 'Admin':
            return <Admin />
        default:
            return null
    }


Personal blog day 3
Part 1: Using react router
complete all the steps in the previous exercise. (All components should exist)
practice routing system with react router:
    install react router DOM using npm install react-router-dom
inside index.js import BrowserRouter from react-router-dom and use RouterProvider component as fllows:
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
create the route object, look at index.js for reference (inside this project)
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            Use the Link component from react-router-dom to navigate between pages
            <Link to="/">Home</Link>
            Part 2: Use useEffect to fetch data from the server
inside Posts.js use fetch to get all posts from the server, see example in Posts.js inside this project;
inside Post.js use fetch to get a single post from the server, see example in Post.js inside this project;
create a "dynamic route" for the post page, see example in index.js inside this project;
{
    path: "/post/:id",
        element: <Post />,
},
use th useParams to get the id from the route, to the Post Component inside Post.js - see example in Post.js inside this project;
IMPORTANT!!!
    NO CSS! NO CSS! NO CSS! (unless you have extra time or patience)
No use of anything other then: useState, useEffect', fetch`, ternary operators. NO NEW STUFF!



    day 4

# State management

### Description
- we will practice context API in React
- No CSS! No CSS! No CSS! No CSS!
    - Implement `signIn` and `BlogContext` use the code from class as a reference

### Mandatory:
    - ALl pages should have access to `posts` with `useContext`
- All pages should have access to `user` with `useContext`
- if user is not null, show `admin` route in menu
- if user is null, the `Admin` component should return 'please sign in' text
- the `admin` component should work:
    - use `useContext` to get the `addPost` method from context
- You should use the `children` prop from React to create "wrapper" components

### Optional:
    - implement all other "blog" methods:
    - admin only: remove post
- admin only: update post (change title and body)
- challenge: add "search (filter)" on all posts:
    - add `input` at the top of the posts list
- when the user type inside the `input`, filter the posts to display matched text

### Very very optional (for VIS):
- use the posts in context, implement `getPostById`, and remove the fetch from `Post` component


day 5

Personal blog: Forms!
    description
we will practice how to handle forms, wit ha popular 3rd party library
NO CSS! NO CSS! NO CSS! NO CSS!
    steps
install the react-use-form library using npm: https://www.react-hook-form.com/
use the library in the admin component, where you can create new post

mandatory
complete all the mandatory steps from last time
Get the values out if the form using the react-use-form library
Add required validation to the title with a message
If you are an admin, show a remove button on the postCard and remove the post

Optional(!!!)
add extra validation messages for minLength, pattern (regex)
    pattern validation: use regex to make sure that the title contain only english letters (no code or HTML)
add extra field to the admin form: createdDate (input type date)
watch the createDate - if it's in the past - show message to the user

Bonus(!!!)
implement th edit post feature:
    as an admin, you can click a post, and move to the admin form to edit it



day 6 
# Final SUBMIT

## Focus
- The personal blog application should be a React application.
- Clean code: no redundant comments!
- No unused code!
- No `console.log()`
- Function and variables names. think about meaningful names.
- Project no in ZIP files!  upload to GitHub

## Features
- 4 Pages:
    - Home page:  show some welcome message
    - Posts: show a list of posts
    - PostPage: show a single pots
    - Admin : form to add new post
- use `react router` for navigation between pages
- use https://react-hook-form.com/ for admin form (add new post)
- use `context` to handle all posts methods
    - set posts in `useState`
    - addPost, editPost, removePost (reuse the admin form?) (only if user!)
- In posts page:
    - show all posts
    - filter posts by title (add `input`)
- use `context` to handle user
    - set user objet in `useState` `{name: 'nir}`
    - signIn, signOut (reuse the admin form?)
    - if user exist (signedIn), make the `admin` page accessible


are these implied?
- Clean code: no redundant comments!
- No unused code!
- No `console.log()`
- Function and variables names. think about meaningful names.


