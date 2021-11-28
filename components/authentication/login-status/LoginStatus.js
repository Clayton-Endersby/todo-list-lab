import {useRouter} from 'next/router'
import { UseAuth } from "../../../hooks/useAuth";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase";
import { IoPersonCircleSharp } from "react-icons/io5";
import {LoginStatus} from './styles'



function UserLoginStatus({ size, color, status, ...props }) {
  const user = UseAuth()
  const router = useRouter()

  function handleClick() {
    signOut(auth)
    .then(()=>{
      router.push('/')
    })
  }

  if (user) {
    return (
      <LoginStatus bgcolor="#92d293" onClick={handleClick}>
        <IoPersonCircleSharp size={size || "1.75rem"} />
        <figcaption>
          <p>Status</p>
          <p>Logout</p>
        </figcaption>
      </LoginStatus>
    );
  }
  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
