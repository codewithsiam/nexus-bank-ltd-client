
const Feedback = () => {



    const handleFeedback = (event) => {

      };
      
    return (
        <div>
            <h2 className="text-3xl text-center mb-10">Feedback For Instructor</h2>
            <div className="w-3/4 mx-auto bg-[#e5e8ec] p-10 h-96">
                <form onSubmit={handleFeedback} action="">
                    <textarea
                        name="feedback"
                        className="textarea w-full h-48"
                        placeholder="Write Feedback"
                    ></textarea>
                    <div className="text-end">
                        <button type="submit" className="btn bg-green-500 border-0 ">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Feedback;