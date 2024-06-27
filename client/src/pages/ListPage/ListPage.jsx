import './ListPage.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Map from '../../components/Map/Map'
import { Await, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'

function ListPage() {
  const data = useLoaderData()
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          <Suspense fallback={<p>Loading... </p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className='mapContainer'>
        <Suspense fallback={<p>Loading... </p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default ListPage

/*

.listPage {
  display: flex;
  height: 100vh;

  .listContainer {
    flex: 3;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .wrapper {
      padding-right: 50px;
      display: flex;
      flex-direction: column;
      gap: 50px;
      overflow-y: auto;
      flex-grow: 1;
    }
  }
  .mapContainer {
    flex: 2;
    background-color: #fcf5f3;
  }
}

*/
