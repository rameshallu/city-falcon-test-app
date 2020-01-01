import React, { useState } from 'react'
import './StoryPanel.scss'
import logo from './img/logo.jpg'
import * as utils from '../../utils'
import classnames from 'classnames'

export default function StoryPanel({ story }) {

    const [collapse, setCollapse] = useState(true)

    const toggleCollapse = e => {
        e.preventDefault()
        setCollapse(!collapse)
    }

    const { title, description, domain_name: domainName, imageUrls, publishTimeDiff, score, url } = story

    return (
        <div className="StoryPanel">
            <div className="card">
                <div className="container">
                    <img src={imageUrls && imageUrls.length ? imageUrls[0] : logo} className="logo" alt="story img" />

                    <div className="title">
                        <a href={url} target="_blank" rel="noopener noreferrer">{ title }</a>
                        <div className="subtitle">
                            <div style={{ flexGrow: 1, display: 'flex', }}>
                                <div>{ domainName }</div>
                                <div className="time">{utils.date.durationInNiceFormat(publishTimeDiff)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="score-bg">
                        <div className="score">{ `${score}%` }</div>
                    </div>

                    <div className="caret" style={{ textAlign: 'end', }} onClick={toggleCollapse}>
                        <i className={classnames('fa', { 'fa-caret-down': collapse, 'fa-caret-up': !collapse })} aria-hidden="true"></i>
                    </div>

                    <div className={classnames('description', { 'd-none': collapse })}>{ description }</div>

                    <div className="more-or-less-container" style={{ marginTop: collapse ? -25 : 0, }} onClick={toggleCollapse}>
                        <div className="more-or-less"> { collapse ? 'More' : 'Less'} </div>
                        <i className={classnames('fa', { 'fa-caret-down': collapse, 'fa-caret-up': !collapse })} aria-hidden="true"></i>
                    </div>

                </div>
                <div className={classnames('curation', { 'd-none': collapse })}>
                    <div className="icon">
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        <div>Bookmark</div>
                    </div>
                    <div className="icon">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <div>Like</div>
                    </div>
                    <div className="icon">
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                        <div>Dislike</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
