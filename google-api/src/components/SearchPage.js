import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from './useGoogleSearch';
// import SearchIcon from '@mui/icons-material/Search';
function SearchPage() {

    const [{term}] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(term);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to="/">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        </Link>

        <div className='searchPage__headerBody'>
          <Search hidebuttons/>

          <div className='searchPage__optionsLeft'>
            <div className='searchPage__options'>
                <Link to="/all">All</Link>
            </div>
            <div className='searchPage__options'>
                <Link to="/images">Images</Link>
            </div>
            <div className='searchPage__options'>
                <Link to="/videos">Videos</Link>
            </div>
            <div className='searchPage__options'>
                <Link to="/shopping">Shopping</Link>
            </div>
            <div className='searchPage__options'>
                <Link to="/shopping">Shopping</Link>
            </div>
            <div className='searchPage__options'>
                <Link to="/more">More</Link>
            </div>
            <div className='searchPage__optionsRight'>
                <div className='searchPage__options'>
                    <Link to="/settings">Settings</Link>
                </div>
                <div className='searchPage__options'>
                    <Link to="/tools">Tools</Link>
                </div>
          </div>
          </div>
        </div>
      </div>
{
  term && (
      <div className='searchPage__results'>
        <p className='searchPage__resultsCount'>
            About {data?.searchInformation.formattedTotalResults} results { data?.searchInformation.formattedSearchTime } for {term}
        </p>

{
  data?.items.map((item)=>(
    <div className='searchPage__result'>
      <a href={item.link} className='searchPage__resultLink'>
        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
          <img src={item.pagemap?.cse_image[0]?.src} alt="" className='searchPage__resultImage' /> 
        )}
          {item.displayLink}
      </a>

      <a href={item.link} className='searchPage__resultTitle'>
          <h2>{item.title}</h2>
      </a>
      <p className='searchPage__resultdescription'>
          {item.snippet}
      </p>

  </div>
  ))
}

        
  
      </div>
  )}    
    </div>
  );
}

export default SearchPage;
