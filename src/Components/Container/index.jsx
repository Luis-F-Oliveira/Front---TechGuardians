import PropTypes from 'prop-types';

const Container = ({children}) => {
  Container.propTypes = {
    children: PropTypes.node,
  };

  return (
    <div className='min-h-screen w-full flex flex-col'>
      {children}
    </div>
  )
}

export default Container