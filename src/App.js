import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import { useEffect, useState } from 'react';
import Popup from './components/popup/Popup';

function App() {
  useEffect(()=>{
    console.log("useEffect")
  })
  const [isOpen, setIsOpen] = useState(false);
  const [title,setTitle]=useState("New operation");
 
  const [eventList,setEventList]=useState([
    {
      id: 1,
      startAt: '2022-04-28T18:00:00.000Z',
      endAt: '2022-04-28T21:00:00.000Z',
      timezoneStartAt: 'Europe/Berlin', // optional
      summary: 'test',
      color: 'blue',
      calendarID: 'work'
  },
  {
      id: 2,
      startAt: '2022-04-29T18:00:00.000Z',
      endAt: '2022-04-30T19:00:00.000Z',
      timezoneStartAt: 'Europe/Berlin', // optional
      summary: 'test <div> kjkdhgkj </div>',
      color: '#abeffe'
  },
  {
    id: 3,
    startAt: '2022-05-01T17:00:00',
    endAt: '2022-05-01T19:00:00',
    timezoneStartAt: 'Europe/Berlin', // optional
    summary: 'operation',
    color: 'green'
}
  ]);

  const handleChange =(e)=>{
      setTitle(e.target.value); 
  }
  return (
    <div>

    <Topbar />

    <div className="container">
    <Sidebar />

    <div className='right' style={{height:"800px"}}>
   
       {isOpen &&  <input onchange={handleChange} />&& <button>enter un nom</button>}
       <Kalend
        events={eventList}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        onNewEventClick={data=>{
        data.event.summary=
        data.event.id=Math.ceil(Math.random()*10)+4;
          setEventList([...eventList,{
            id: data.event.id,
            startAt: data.startAt,
            endAt: data.endAt,
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: title,
            color: '#abeffe'
          }]);
        }}
        onEventClick={(data)=>console.log(data)}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'fr'}
      />
    </div> 
    </div>
    </div>
  );
}

export default App;
