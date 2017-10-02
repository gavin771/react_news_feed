import React from 'react'
import NewsListItem from './NewsListItem'

const NewsList= (props) => {

    const items = props.news.map((n) => {
        return (
            <NewsListItem  key={n.id} item={n}/>
        )
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default NewsList