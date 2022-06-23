import './App.css';
import { useState } from 'react';
import PracticeData from './PracticeData';
import Paginator from './component/Paginator';

function App() {
  const [post, setPost] = useState(PracticeData);
  console.log(post);

  const[showPerpage, setshowPerpage] = useState(4);

  const [pagination, setpagination] = useState({ 
    start:0,
    end:4
  }); 


  const onPaginationChange= (start, end) => {
    // console.log(start, end);
    setpagination({start:start, end:end});
  }

  return (
    <div className='main-div col-md-6'>
      <h1>Pagination</h1>
      {
        post.slice(pagination.start, pagination.end).map((post) => {
          return <table>
              <tr>
                <td style={{width:"50px", padding:"10px"}}>{post.id}</td> 
                <td style={{padding:"10px"}}>{post.title}</td>
              
              </tr>
          </table>
          
          
        })
      }
      <Paginator showPerpage={showPerpage} onPaginationChange={onPaginationChange} total={post.length}/>
    </div>
  );
}

export default App;
