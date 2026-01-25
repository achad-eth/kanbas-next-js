export default function Modules() {
  return (
    <div id="wd-modules">
      {}
      <div id="wd-modules-toolbar">
        <button>Collapse All</button>{" "}
        <button>View Progress</button>{" "}
        <select defaultValue="PUBLISH_ALL">
          <option value="PUBLISH_ALL">Publish All</option>
          <option value="PUBLISH_ALL_MODULES_ITEMS">Publish all modules and items</option>
          <option value="UNPUBLISH_ALL_MODULES_ITEMS">Unpublish all modules and items</option>
        </select>{" "}
        <button>+ Module</button>
      </div>

      <br />

      {}
      <ul>
        <li>
          Lecture 1 - Building React User Interfaces
          <ul>
            <li>
              LEARNING OBJECTIVES
              <ul>
                <li>Introduction to the course</li>
                <li>What is Web Development</li>
                <li>Setting up the Development Environment</li>
                <li>Creating a React Web Application</li>
                <li>Getting started with the Assignment 1</li>
              </ul>
            </li>
            <li>
              READING
              <ul>
                <li>
                  Developing Full Stack Next.js Web Applications - Chapter 1 - Building React
                  User Interfaces with HTML
                </li>
              </ul>
            </li>
            <li>
              INTRO AND SETTING UP DEVELOPMENT ENVIRONMENT
              <ul>
                <li>Introduction to Web Development</li>
                <li>Installing Node.js</li>
                <li>Creating a Next.js React Application</li>
                <li>Commit your source to GitHub.com</li>
                <li>Deploying to Vercel</li>
              </ul>
            </li>
            <li>
              EVALUATIONS
              <ul>
                <li>A1</li>
                <li>Final Project</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Lecture 2 - Getting Started with Assignment 1 Lab Exercises
          <ul>
            <li>
              LEARNING OBJECTIVES
              <ul>
                <li>Learn how to create user interfaces with HTML</li>
                <li>Get started on Assignment 1 Lab exercises</li>
                <li>Deploy the assignment to Vercel</li>
              </ul>
            </li>
            <li>
              READING
              <ul>
                <li>
                  Developing Full Stack Next.js Web Applications - Chapter 1 - Building React
                  User Interfaces with HTML
                </li>
              </ul>
            </li>
            <li>
              ASSIGNMENT 1 - HTML LAB EXERCISES
              <ul>
                <li>Introduction to HTML and the DOM</li>
                <li>Formatting Web content with Headings and Paragraphs</li>
                <li>Formatting content with Lists and Tables</li>
                <li>Creating Web Forms</li>
                <li>Navigating with Anchors</li>
                <li>Single Page Navigation</li>
              </ul>
            </li>
            <li>
              EVALUATIONS
              <ul>
                <li>A1</li>
                <li>Final Project</li>
                <li>Project - Kambaz Quizzes</li>
                <li>Project - Kambaz Piazza</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Lecture 3 - Getting Started with the Kambaz Web Application
          <ul>
            <li>
              LEARNING OBJECTIVES
              <ul>
                <li>Learn how to create user interfaces with HTML</li>
                <li>Start implementing the Kambaz Web Application</li>
                <li>Update Vercel deployment</li>
              </ul>
            </li>
            <li>
              READING
              <ul>
                <li>
                  Developing Full Stack Next.js Web Applications - Chapter 1 - Building React
                  User Interfaces with HTML
                </li>
              </ul>
            </li>
            <li>
              ASSIGNMENT 1 - PROTOTYPING THE KAMBAZ REACT APPLICATION WITH HTML
              <ul>
                <li>Implementing the Kambaz Account Screens</li>
                <li>Implementing the Kambaz Dashboard Screen</li>
                <li>Implementing the Kambaz Courses Screen</li>
                <li>Implementing the Kambaz Modules Screen</li>
                <li>Implementing the Kambaz Assignments Screens</li>
                <li>Kanbas Web App on Netlify</li>
              </ul>
            </li>
            <li>
              EVALUATIONS
              <ul>
                <li>A1</li>
                <li>Final Project</li>
                <li>Project - Kambaz Quizzes</li>
                <li>Project - Kambaz Piazza</li>
                <li>Project - Open-Ended Web Application Final Project</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}