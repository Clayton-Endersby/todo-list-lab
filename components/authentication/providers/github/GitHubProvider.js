import Image from "next/image";
import { useRouter } from "next/router";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { useState } from 'react';
import { UseAuth } from '../../../../hooks/useAuth';
import { auth } from '../../../../firebase';
import { ProviderButton } from "./../../../../ui/buttons";

import github from "./github.png";

function GitHubProvider({ children, ...props }) {
  const router = useRouter()
  const user = UseAuth()
  const [isValidUser, setIsValidUser] = useState(null)
  const provider = new GithubAuthProvider()

  async function requestLogin() {
    setIsValidUser(await signInWithPopup(auth, provider))
  }

  function handleClick() {
    requestLogin()
  }

  if (isValidUser) {
    router.push('/todo')
  }
  return (
    <ProviderButton onClick={handleClick} {...props}>
      <div>
        <Image
          src={github}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default GitHubProvider;
