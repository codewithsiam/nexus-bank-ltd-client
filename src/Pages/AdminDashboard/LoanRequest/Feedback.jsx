import { useParams } from 'react-router-dom';

function Feedback() {
  const { id } = useParams();

  return (
    <div className='my-20'>
      <h1>Feedback for Loan Request ID: {id}</h1>

    </div>
  );
}

export default Feedback;