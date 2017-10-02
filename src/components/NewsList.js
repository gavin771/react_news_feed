import React from 'react'

const NewsList = (props) => {

    const items = props.news.map((n) => {
        return (
            <div key={n.id}>
                <h3>{n.title}</h3>
                <div>
                    {n.feed}
                </div>
            </div>
        )
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default NewsList