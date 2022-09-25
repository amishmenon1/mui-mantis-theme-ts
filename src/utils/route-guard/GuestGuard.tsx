import { useEffect } from 'react';

// next
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

// project import
import { DEFAULT_PATH } from 'config';

// types
import { GuardProps } from 'types/auth';
import Loader from 'components/Loader';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: GuardProps) => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/auth/protected');
      const json = await res.json();
      if (json.protected) {
        push(DEFAULT_PATH);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, [session]);

  if (status === 'loading' || session?.user) return <Loader />;

  return children;
};

export default GuestGuard;
