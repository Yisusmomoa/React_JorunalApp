import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        {/* agrupador del formulario */}
        <div className='notes__content'>
            <input type='text' 
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'/>
            <textarea placeholder='what happened today?' 
                className='notes__textarea'>
            </textarea>
            <div className='notes__image'>
                <img src='https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80'
                    alt='descr landscape'/>
            </div>
        </div>
    </div>
  )
}

export default NoteScreen