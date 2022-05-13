const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <img src={data.place.pic}/>
                <div className='container'>
                    <h1>{data.place.name}</h1>
                </div>
                <p>{data.place.cuisines}</p>
                <p>Located in {data.place.city}, {data.place.state}</p>
                <div className='container'>
                    <h2>Rating</h2>
                    <p>Not rated</p>
                </div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                <div className='container'>
                    <h2>Comments</h2>
                    <p>No comments yet</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show