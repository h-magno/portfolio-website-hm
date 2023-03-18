import { ReactNode } from 'react';

interface SignInProps {
  children: ReactNode;
}

function SignIn({ children }: SignInProps) {
  return <>{children}</>;
}

export default SignIn;
