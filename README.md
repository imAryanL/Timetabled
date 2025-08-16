# 🗼 Timetabled — Paris Week Planner

A simple, responsive weekly calendar that visualizes a one-week itinerary in Paris for Alina. Built with React and styled as a clean grid with one-hour blocks, color‑coded events, and locations.

![Timetabled Demo](https://github.com/user-attachments/assets/7be72145-d9c2-4e15-bfe8-065bef144c97)

## ✨ Features
- Grid-style weekly calendar (Sunday → Saturday)
- One-hour time slots (8am–5pm)
- Color-coded activities: pink, blue, green
- Per-event location details
- Responsive layout

## ✅ Requirements Met
- [x] One-week calendar with one-hour blocks
- [x] Distinct event titles
- [x] Different colors per event type

## 🌟 Stretch
- [x] Extra info per event: description/location shown on each card

## 🧭 Architecture
- `App.jsx`: Page header, author info, renders `Calendar`
- `Calendar.jsx`: 7-day table with hourly rows; places `Event` cells
- `Event.jsx`: Displays event title and location; applies color class via `props.color`

## 🚀 Run Locally
```bash
npm install
npm run dev
# open http://localhost:5173
```
