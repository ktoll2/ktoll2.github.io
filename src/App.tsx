import './App.css';
import { Job } from './components/job'
import { JobInfo } from './interfaces/JobInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
function App() {

  var jobs: JobInfo[] = [
    {
      CompanyName: "Google",
      CompanyUrl: "https://google.com",
      JobTitle: "Software Engineer",
      JobDescription: "Make Bits Move",
      StartDate: "Dec 2022",
      EndDate: "present",
      Skills: ["go", "aws", "mangement"]
    },
    {
      CompanyName: "Google",
      CompanyUrl: "https://google.com",
      JobTitle: "Software Engineer",
      JobDescription: "Make Bits Move",
      StartDate: "Dec 2022",
      EndDate: "present",
      Skills: ["go", "aws", "mangement"]
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <p className='text-green-200 bg-black'>
          This is some green text, from tailwind
        </p>
        <span><FontAwesomeIcon icon={faLinkedin} /></span>
        <span><FontAwesomeIcon icon={faGithub} /></span>
      </header>
      <div className='flex flex-row'>
        <div className=''>
          {jobs.map(j => <Job job={j}></Job>)}
        </div>
        <div className=''>
          Projects
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
