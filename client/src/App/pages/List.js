import React, { useState,useEffect } from "react";
import CardList from "./cardList";
import Pagination from "./Pagination"
import axios from 'axios';
import "./list.css";
const List =() => {
  // Initialize the state
  const[list,setList]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const [postPerPage]=useState(3);
  // Fetch the list on first mount
  useEffect(()=>{
    const fetchList = async()=>{
      const res = await axios.get("/api/getList");
      setList(res.data)
    }
    fetchList();
  },[])
  
const indexOfLastPost=currentPage*postPerPage;
const indexOfFirstPost=indexOfLastPost-postPerPage;
const currentPost=list.slice(indexOfFirstPost,indexOfLastPost);
  // Retrieves the list of items from the Express app
 
  const paginate = pageNumber =>setCurrentPage(pageNumber);
    return !list.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>List of Employees</h1>

        <CardList list={currentPost} />
        {/*<button onClick={()=>setCurrentPage(currentPage+1)}>More</button>*/}
        <Pagination
        postsPerPage={postPerPage}
        totalPosts={list.length}
       paginate={paginate}
      />
      </div>
    );
  }


export default List;
