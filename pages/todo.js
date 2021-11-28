import { UseAuth } from "../hooks/useAuth";
import { AppBar } from "./../components/appbar";
import {Title} from "./../ui/title"


function ToDoPage(props) {
  const user = UseAuth()

  if (user) {
    return (
      <>
        <AppBar />
        <Title>Render build the to-do list</Title>
      </>
    )
  }
  
  return (
    <>
      <AppBar />
      <Title>Please Go Away</Title>
    </>
  )
}

export default ToDoPage;
