import React from 'react'

const BookDetails = () => {
  return (
    <div>
        <h3>Book Title</h3>
        <p> Enter your book title exactly as it appears on the cover. 
            Subtitles will be separated by a colon. Please double-check 
            spelling, as this field cannot be edited after publication.
        </p>
        <p>Book Title</p>
        <input 
          type='text' 
          required
          id='title'
          />
        <p>Subtitle (Optional)</p>
        <input 
          type='text' 
          required
          id='subtitle'
          />

          <h3>Author</h3>
          <p>Enter the primary author's or contributor's name. 
            Include middle names or prefixes in the 'First Name' 
            field, and suffixes (e.g., Jr., Sr.) in the 'Last Name' 
            field.vv</p>
            <h3>Primary Author or Contributor</h3>

            <div>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
            </div>
            <p>Tell your readers/listeners more about you</p>

            <h3>Bio</h3>
            <textarea></textarea>

            <h3>Contributors</h3>
            <p>Add up to 5 contributors. They will appear on 
                itan in the order you list them below.</p>
            <p><span>Contributors</span>(Optional)</p>

            <div>
              <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
              </select>
              <input type='text' placeholder='First Name'/>
              <input type='text' placeholder='Last Name'/>
            </div>

            <div>
                <button>Remove</button>
                <button>Add Author</button>
            </div>

            <h3>Edition Number</h3>
            <p>The edition number tells readers/listeners whether 
                the book is an original or updated version. Note: 
                This cannot be changed after the book is uploaded.
            </p>
            <p><span>Edition Number</span> (Optional)</p>
            <input type='text' id='editionNo'/>
    </div>
  )
}

export default BookDetails