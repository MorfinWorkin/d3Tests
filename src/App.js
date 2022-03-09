import './App.css';
import { ReactComponent as Iconbb } from './Iconbb.svg';
import BarChart from './BarChart';
import { ReactComponent as Sil1 } from './silhouette1.svg';

const data1 = [
   { year: 2010, efficiency: 33.9, sales: 5636000 },
   { year: 2011, efficiency: 33.1, sales: 6093000 },
   { year: 2012, efficiency: 35.3, sales: 7245000 },
   { year: 2013, efficiency: 36.4, sales: 7586000 },
   { year: 2014, efficiency: 36.5, sales: 7708000 },
   { year: 2015, efficiency: 37.2, sales: 7517000 },
   { year: 2016, efficiency: 37.7, sales: 6873000 },
   { year: 2017, efficiency: 39.4, sales: 6081000 },
];
const data2 = [
   { year: 2014, efficiency: 0.1, sales: 1 },
   { year: 2015, efficiency: 0.2, sales: 2 },
   { year: 2016, efficiency: 0.3, sales: 3 },
   { year: 2017, efficiency: 0.4, sales: 4 },
   { year: 2018, efficiency: 0.5, sales: 5 },
   { year: 2019, efficiency: 0.6, sales: 6 },
   { year: 2020, efficiency: 0.7, sales: 7 },
   { year: 2021, efficiency: 0.8, sales: 8 },
   { year: 2022, efficiency: 0.9, sales: 9 },
];

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <Iconbb />
            <div>
               <Sil1 />
            </div>

            <p>
               <BarChart data={data1} />
            </p>

            <p>
               <BarChart data={data2} />
            </p>
         </header>
      </div>
   );
}

export default App;
