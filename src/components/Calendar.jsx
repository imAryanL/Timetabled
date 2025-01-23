import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Breakfast at local café 🎩" location="Downtown Cafe" color="green" />
            <td></td>
            <td></td>
            <Event event="Breakfast at Louvre" location="Café Richelieu" color="blue" />
            <td></td>
            <Event event="Croissants & Coffee 🥐" location="Le Marais" color="pink" />
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <Event event="Eiffel Tower Visit 🗼" location="Champ de Mars" color="blue" />
            <td></td>
            <Event event="Art Gallery Tour 🎨" location="Musée d'Orsay" color="pink" />
            <td></td>
            <Event event="Shopping" location="Champs-Élysées" color="green" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Palace Tour 👑" location="Versailles" color="blue" />
            <td></td>
            <Event event="Pastry Class 🥐" location="Le Cordon Bleu" color="pink" />
            <td></td>
            <Event event="River Cruise 🚢" location="Seine River" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event event="Cathedral Visit ⛪" location="Notre-Dame" color="pink" />
            <td></td>
            <td></td>
            <Event event="Wine Tasting 🍷" location="Le Marais" color="blue" />
            <td></td>
            <td></td>
            <Event event="Market Visit 🥖" location="Rue Cler" color="green" />
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event="Lunch 🍽️" location="Café de Flore" color="green" />
            <td></td>
            <Event event="Picnic 🧺" location="Luxembourg Gardens" color="pink" />
            <td></td>
            <Event event="Bistro Lunch" location="Le Marais" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <Event event="Art Museum 🎨" location="Centre Pompidou" color="blue" />
            <td></td>
            <Event event="Garden Visit 🌸" location="Tuileries" color="green" />
            <td></td>
            <td></td>
            <Event event="Fashion Show 👗" location="Galeries Lafayette" color="pink" />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <Event event="Catacombs Tour 💀" location="Les Catacombes" color="pink" />
            <td></td>
            <Event event="Cheese Tasting 🧀" location="Marché d'Aligre" color="blue" />
            <td></td>
            <td></td>
            <Event event="Bike Tour 🚲" location="Montmartre" color="green" />
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <Event event="Opera Visit 🎭" location="Palais Garnier" color="green" />
            <td></td>
            <td></td>
            <Event event="Photography 📸" location="Trocadéro" color="pink" />
            <td></td>
            <Event event="Canal Walk 🚶‍♂️" location="Canal St-Martin" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event="Macarons Class 🍪" location="Ladurée" color="blue" />
            <td></td>
            <td></td>
            <Event event="Sunset View 🌅" location="Sacré-Cœur" color="green" />
            <td></td>
            <Event event="Street Art Tour" location="Belleville" color="pink" />
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Evening Cruise 🌙" location="Seine River" color="pink" />
            <td></td>
            <Event event="Wine Bar 🍷" location="Saint-Germain" color="green" />
            <td></td>
            <Event event="Jazz Club 🎷" location="Le Petit Journal" color="blue" />
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;