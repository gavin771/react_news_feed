import React from 'react'

const SinglePost = ({ match }) => {
    return (
        <div>
            {match.params.id}
        </div>
    )
}

export default SinglePost