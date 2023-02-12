import { ReactNode } from 'react';
interface SignInProps {
  children: ReactNode;
}

const SignIn = ({ children }: SignInProps) => {
  return <>{children}</>;
};

export default SignIn;
