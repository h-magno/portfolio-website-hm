import { ReactNode } from 'react';

interface RouteTypesLayoutProps {
  children: ReactNode;
}

const RouteTypesLayout = ({ children }: RouteTypesLayoutProps) => {
  return (
    <body style={{
      display: 'flex',
      height: '96vh',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
        {children}
    </body>
  );
};

export default RouteTypesLayout;
