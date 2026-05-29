
import App from '@/App';
import { Button } from './ui/button';
import Map from './Pages/Map';

function Home() {
  return (
    <App>
      <div className="flex justify-end">
        <Button size={"xs"} variant={"outline"}>Switch to Charts</Button>
      </div>
      <Map/>
    </App>
  )
}

export default Home