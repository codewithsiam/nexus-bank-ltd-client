import React from 'react';

const EditProfile = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto'>
            <form 
            // onSubmit={handleCollegeUpdate} 
            className="bg-[url(https://rn53themes.net/themes/demo/education-master/images/weather.png)]">
            <div className="p-10">
              <div className="flex gap-4 items-center my-5">
                <span className="text-lg">First Name: </span>
                <input type="text" placeholder="Your First name" name="firstName" className="input input-bordered w-[70%]"/>
              </div>
              <div className="flex gap-4 items-center my-5">
                <span className="text-lg w-[125px]">Last Name: </span>
                <input type="text" placeholder="Your name" name="name" className="input input-bordered w-[70%]"/>
              </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg w-[125px]">User Email</span>
                    <input type="email" placeholder="email" name="email" className="input input-bordered w-[70%]"/>
                </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg w-[125px]">Your Subject:</span>
                <input type="text" placeholder="Your favorite subject" name="subject" className="input input-bordered w-[70%]"/>
              </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg">Phone Number:</span>
                    <input type="number" name="number" placeholder="Enter your phone number" className="input input-bordered w-[70%]" />
                </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg w-[125px]">Your Address:</span>
                    <input type="text" name="address" placeholder='Enter your address' className="input input-bordered w-[70%]" />
                </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg w-[125px]">Date of Birth:</span>
                    <input type="date" id="dob" name="dob" value={dob} onChange={handleChange} className="input input-bordered w-[70%]"/>
                </div>
                <div className="flex gap-4 items-center mb-5">
                    <span className="text-lg w-[125px]">Your Image:</span>
                    <label>
                      <input
                        onChange={event => {
                          handleUploadImage(event.target.files[0])
                        }}
                        className='text-sm cursor-pointer w-36 hidden' type='file' name='photo' id='image' accept='image/*' hidden
                      />
                      <div className='text-gray-400 border border-gray-300 rounded-lg cursor-pointer p-2.5'>
                        {uploadButtonText}
                      </div>
                    </label>
                </div>
                <div className="form-control">
                <input className="btn bg-secondary hover:bg-primary border-0 text-black" type="submit" value="Apply Now"/>
                </div>
            </div>
          </form>
        </div>
    );
};

export default EditProfile;
