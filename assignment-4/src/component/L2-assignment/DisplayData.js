import React, { useState } from 'react'
import Paginator from './Paginator';
import PracticeData from './PracticeData';

export const DisplayData = () => {

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
        <div className='container'>
            <div className='main-div'>
                <h2 className='mt-3 mb-2 text-center'>Pagination</h2>
                <table>
                        <tr>
                            <th>UserId</th>
                            <th>Job Title Name</th>
                            <th>Employee Name</th>
                            <th>Region</th>
                            <th>Phone no</th>
                            <th>Email</th>
                        </tr>
                {
                    post.slice(pagination.start, pagination.end).map((post) => {
                    return  <tr>
                                <td style={{padding:"10px"}}>{post.userId}</td> 
                                <td style={{padding:"10px"}}>{post.jobTitleName}</td>
                                <td style={{padding:"10px"}}>{post.preferredFullName}</td>
                                <td style={{padding:"10px"}}>{post.region}</td>
                                <td style={{padding:"10px"}}>{post.phoneNumber}</td>
                                <td style={{padding:"10px"}}>{post.emailAddress}</td>
                            </tr> 
                    })
                }
                   </table>
                <Paginator showPerpage={showPerpage} onPaginationChange={onPaginationChange} total={post.length}/>
            </div>
        </div>
    )
}
