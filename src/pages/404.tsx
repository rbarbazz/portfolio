import { navigate } from 'gatsby';
import { useEffect } from 'react';

const NotFound: React.FC = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};

export default NotFound;
