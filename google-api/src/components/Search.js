import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
function Search({hidebuttons}) {

  const [{},dispatch] = useStateValue();
  
  const [input, setInput] = useState("");
  
  const history = useNavigate();

  const search=(e)=>{
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    history('/search')
  }
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon/>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <MicIcon/>
      </div>
      {
        !hidebuttons ? (<div className='search__buttons'>
        <Button type="submit" onClick={search} variant="outline">Google Search</Button>
        <Button type="submit" variant="outline">I'm feeling lucky</Button>
      </div>) : (
        <div className='search__buttons' style={{display:'none'}}>
        <Button type="submit" onClick={search} variant="outline">Google Search</Button>
      </div>
      )
      }
      
    </form>
  )
}

export default Search
