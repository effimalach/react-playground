import './App.css';
import Initials from './Initials'
import DayOfWeek from './DayOfWeek.js';
import Article from './Article/Article.js';
import Menu from './menu/Menu.js';
import MenuItem from './menu/menuItem/MenuItem.js';
import Counter from './counter/Counter.js';
import StudentPicker from './StudentPicker';
import RandomColorSquare from './RandomColorSquare';


function App() {
  function clickHandler(params) {
    console.log('you clicked')
  }
  return (
    <div className="container">
{/* ===============================homeWork-1================================================== */}
       <Menu>
       <MenuItem>
        <a href="/">
        <h1>Homepage</h1>
        <i className="fas fa-home"></i>
        </a>
        </MenuItem>
        <MenuItem>
        <a href="/Gallery">
        <h1>Gallery</h1>
        <i className="fas fa-palette"></i>
        </a>
        </MenuItem>
        <MenuItem>
        <a href="/Contact">
        <h1>Contact</h1>
        <i className="fas fa-address-book"></i>
        </a>
        </MenuItem>
      </Menu> 

{/* ===============================homeWork-2================================================== */}
<RandomColorSquare />
{/* ===============================classWork-1================================================== */}

      {/* <StudentPicker /> */}
      {/* <button onClick={clickHandler}>Click me</button>*/}
      {/*<Counter /> */}
      {/* <Menu>
        <MenuItem lable={"Homepage"} link={"/"}/>
        <MenuItem lable={"Gallery"} link={"/Gallery"}/>
        <MenuItem lable={"Contact"} link={"/Contact"}/>
      </Menu> */}

      {/*<Initials name="effi malach"/>*/}
      {/* <DayOfWeek day={3} /> */}
      {/* <Article content={" very cool article"} title={"great title"} />   */}
    </div>
  );
}

export default App;
