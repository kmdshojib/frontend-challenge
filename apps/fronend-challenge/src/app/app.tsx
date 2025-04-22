import { counterAtom } from '@fronend-challenge/recoil';
import { useRecoilState } from 'recoil';

import { Ui,Button } from "@fronend-challenge/ui";

export function App() {
  const [count, setCount] = useRecoilState(counterAtom);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-2xl font-bold'>Count: {count}</h1>
      <Ui />
      <Button className='bg-violet-400' name='Add Item' onClick={handleClick} />
    </div>
  );
}

export default App;
