 import TextInput from "./../../../ui/forms/TextInput"
 import { Button } from "./../../../ui/buttons"
import Login from "./styled"
 
 
function UserLogin ({...props}){
 
   
    return (
        <>
        <Login {...props} >    
         <TextInput label="Email"  id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password"  type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin