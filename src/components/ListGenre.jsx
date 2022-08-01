import React from 'react'

export default function ListGenre({ clickBtngenre, dataGenre }) {
  // console.log(dataGenre)

  let genres = []

  if (dataGenre !== undefined) {
    genres = [...dataGenre]
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="list-inline-item">
            <div>
              {genres.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    clickBtngenre(item.id) //diplayMoviesWithGenre
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
