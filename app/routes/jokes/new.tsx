

export default function JokesNew() {
  return(
    <>
      <p>Add your own joke</p>
        <form method="post">
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" id="name"></input>
          </div>
          <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content"></textarea>
          </div>
          <button type="submit">Add</button>    
        </form>
    </>


  )
}