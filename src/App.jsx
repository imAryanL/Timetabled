import './App.css';
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className="App">
      <h1>Itinerary for 7 days in Paris 🗼</h1>
      <h2>Welcome to your schedule, Alina! Check out this calender to get to know the city and see all the sights during your stay.</h2>
      <h5 className="author-info">
        <span>Aryan Lakhani</span>
        <span>Z Number- Z23724811</span>
      </h5>   
      <Calendar />
    </div>
  )
}

export default App