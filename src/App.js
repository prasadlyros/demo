import TimeOut from "./TimeOut/TimeOut"
import TodoComponent from "./TodoApp/TodoComponent"
import TodoForm from "./TodoApp/TodoForm"
import data from "./data"
import clothing from "./WithoutHOC/clothing"
import ClothingCatagery from "./WithHOC/ClothingCatagery"
import productDetails from "./WithoutHOC/electronic"
import ElectronicCatagery from "./WithHOC/ElectronicCatagery"
import SimpleApi from "./components/SimpleApi"
import Axios from "./components/Axios"
import ChildComponent from "./Axios/ChildComponent"
import Algolia from "./components/Algolia"
import ContactManager from "./Contact/ContactManager"
import PutPatch from "./Contact/PutPatch"
import Update from "./Contact/Update"
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom"
import LoginForm from "./Forms/LoginForm"
import Feedback from "./Forms/Feedback"
import Register from "./Forms/Register"
import LeaderBoard from "./ScoreBoard/Leaderboard"
import Rank from "./ScoreBoard/Rank"
import Age from "./ScoreBoard/Age"
import Points from "./ScoreBoard/Points"
import Name from "./ScoreBoard/Name"
import NavComponent from "./ScoreBoard/NavComponent"
import MainPage from "./NestedRoutes/MainPage"
import LoginNested from "./NestedRoutes/LoginNested"
import PagenotFound from "./NestedRoutes/PagenotFound"
import LoginHooksClass from "./Hooks/LoginHooksClass"
import NavigateFun from "./Hooks/NavigateFun"
import Dashboard from "./Hooks/Dashboard"
import Params from "./Hooks/Params"
import NavlinkComp from "./Hooks/NavlinkComp"

const userData = [
  {
    id:1,
    title : "trainig",
    desc : "Doing todo app",
    status : true,
    active : true
  },
  {
    id:2,
    title : "assignment",
    desc : "Doing count",
    status : true,
    active : true
  },
  {
    id:3,
    title : "assement",
    desc : "Doing todo app",
    status : false,
    active : true
  },
]

function App(){
  return(
    <>
      {/*<BrowserRouter>
        <Link to="/Login">Login</Link>
        <Link to="/Feedback">Feedback</Link>
        <Link to="/Register">Register</Link>
        <Routes>
          <Route path="Login" element = {<LoginForm></LoginForm>}></Route>
          <Route path="Feedback" element = {<Feedback></Feedback>}></Route>
          <Route path="Register" element= {<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>*/}
      
      {/*<BrowserRouter>
       <NavComponent keyword = {6}></NavComponent> 
          <Routes>
            <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
            <Route path="rank" element= {<Rank></Rank>}></Route>
            <Route path="age" element= {<Age></Age>}></Route>
            <Route path="points" element={<Points></Points>}></Route>
            <Route path="name" element= {<Name></Name>}></Route>
          </Routes>
      </BrowserRouter>*/}
      <BrowserRouter>
        <NavlinkComp></NavlinkComp>
        <Routes>
          {/* <Link to ="/mainpage">Main</Link> 
          <Route path="/mainpage" element ={<MainPage></MainPage>}>
            <Route path="login" element = {<LoginNested></LoginNested>}></Route>
            <Route path="*" element = {<PagenotFound></PagenotFound>}></Route>
          </Route>
          <Route path="*" element = {<PagenotFound></PagenotFound>}></Route>*/}
          <Route path="/login" element = {<NavigateFun></NavigateFun>}></Route>
          <Route path="/dashboard/:username" element={<Params></Params>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App