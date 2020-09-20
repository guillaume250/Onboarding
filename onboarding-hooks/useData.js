//hook for dummy agent and custom data
import Data from '../resources/questions';
import Img from '../resources/agent.jpg';

const useData = () => {
  const agent = {
    names: {
      firstName: 'Marianne',
      lastName: 'Singer',
    },
    avatar: 'https://dummyimage.com/100x100/c23ac2/fff',
    src: Img,
  };
  const probe = (currentPath) => {
    return Data.find((obj) => obj.id === currentPath);
  };

  return {data: Data || [], probe, agent};
};

export default useData;
