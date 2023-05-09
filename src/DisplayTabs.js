import React from 'react'

const DisplayTabs = (props) => {
  return (
    <>
    <div className='d-flex'>
    {props.tabs.map((t, index) => (<div key={"tab " + index} className={(index === props.tab ? 'd-flex my-2 mx-1 p-1 border rounded bg-primary' : 'd-flex my-2 mx-1 p-1 border rounded')} onClick={e => props.setTab(index)} >Tab {index + 1}</div>))}
    </div>
    {props.tabs.map((t, index) => (<div key={index + " content"} className='d-block border rounded m-2 p-1'>{t.content}</div>)).filter((t, index) => (index === props.tab))}
    </>
  )
}

export default DisplayTabs