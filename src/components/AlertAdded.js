import Alert from 'react-bootstrap/Alert';

const AlertAdded = () => {
    return (
        <div className='text-center'>
            <Alert style={{ width: '50%', margin: '0 auto' }} variant='warning'>
                You have already seleted this peace!
            </Alert>
        </div>
    );
}

export default AlertAdded;