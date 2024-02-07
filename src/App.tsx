import './App.css'
import Overview from './layout/overview/overview'
import {Route,Routes} from 'react-router-dom'
import DashboardPage from './pages/dashboard-page/dashboard-page'
import Home from './pages/home/home'
import {AssessmentPage,FeedbackPage,CoursePage,NotificationPage,PaymentPage,SettingsPage} from './pages'
import SignIn from './pages/authentication/sign-in'
import SignUp from './pages/authentication/sign-up'



function App() {

  return (
    <main className='app' id='elem'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='signin' element={<SignIn />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='/dashboard' element={<Overview />} >
          <Route index   element={<DashboardPage />}/>
          <Route path='courses'   element={<CoursePage />}/>
          <Route path='assessment'   element={<AssessmentPage />}/>
          <Route path='notification'   element={<NotificationPage />}/>
          <Route path='feedback'   element={<FeedbackPage />}/>
          <Route path='payment'   element={<PaymentPage />}/>
          <Route path='settings'   element={<SettingsPage />}/>
        </Route>
      </Routes>
      
    </main>
  )
}

export default App
