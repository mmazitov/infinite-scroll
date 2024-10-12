import './App.css'

import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
  border: '1px solid #333',
  margin: '10px',
  padding: '10px',
}

function App() {
  const [dataSource, setDataSource] = useState(Array.from({length: 20}))
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData = () => {
    if(dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({length: 20})))  // Add more items to the array)
      } ,1000)
    } else {
      setHasMore(false)  // No more items to fetch
    }
    
  }
  return (
   <div className="App">
    <p>Title <b>Infinite Scroll</b></p>
    <InfiniteScroll 
      dataLength={dataSource.length} 
      next={fetchMoreData} 
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      height={500}
    >
      {dataSource.map((item, index) => {
        return <div style={style} >This is a div #{index + 1} inside InfiniteScroll</div>
      })}
    </InfiniteScroll>
   </div>
  )
}

export default App
