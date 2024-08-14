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
     {/* <PutPatch></PutPatch> */}
     <Update></Update>
    </>
  )
}

export default App