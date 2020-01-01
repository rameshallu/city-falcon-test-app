import React from 'react'
import { useSelector } from 'react-redux'
import './Watchlist.scss'
import StoryPanel from '../../components/StoryPanel'

export default function Watchlist() {
    const stories = useSelector(state => state.watchlist.stories)
    return (
        <div className="Watchlist">
                <div className="content">
                    <h3 className="title">Watchlist</h3>
                    {
                        stories.map(story => <StoryPanel key={story.id} story={story} />)
                    }
                </div>
        </div>
    )
}
