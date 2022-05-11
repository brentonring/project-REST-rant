const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>You seem to have gotten lost!</p>
                <div>
                    <img src='/images/404compass.jpg' alt='404 compass picture'/>
                    <div>
                        Photo by Ethan Sykes on Unsplash
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404