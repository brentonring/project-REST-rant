const React = require('react')
const Def = require('../default')

function Edit ({place, index}) {
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>
                <form method='POST' action={`/places/${index}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input defaultValue={place.name} className='form-control' required id='name' name='name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input defaultValue={place.pic} className='form-control' type='url' id='pic' name='pic'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input defaultValue={place.city} className='form-control' id='city' name='city'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input defaultValue={place.state} className='form-control' id='state' name='state'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input defaultValue={place.cuisines} className='form-control' required id='cuisines' name='cuisines'/>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Edit Place'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit