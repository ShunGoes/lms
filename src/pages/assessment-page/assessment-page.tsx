
const AssessmentPage = () => {
  return (
    <div>
      <h1>AssessmentPage</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assessment 1</td>
              <td>Quiz</td>
              <td>In Progress</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>Assessment 1</td>
              <td>Quiz</td>
              <td>In Progress</td>
              <td>Date</td>
            </tr>
          </tbody>
        </table>
        <div>
          <select>
            <option value='all'>All</option>
            <option value='quizzes'>Quizzes</option>
            <option value='assignments'>Assignments</option>
            <option value='tests'>Tests</option>
          </select>

          <input type="text" placeholder="Search assessment" />

          {/* pagination */}
        </div>
      </div>
    </div>
  )
}

export default AssessmentPage