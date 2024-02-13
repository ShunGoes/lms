import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-white">
      <h1>
      This app is under development
        </h1> 
      <Link to='dashboard' className="text-blue-500">Visit the dashboard page to see recent development</Link>
    </div>
  )
}

export default Home