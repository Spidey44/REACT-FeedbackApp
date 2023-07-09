import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
          <h2>{text}</h2>
      </div>
    </header>
  )
}

// nothing is passed, this is the default text
Header.defaultProps = {
  text: 'Feedback UI2',
  bgColor: 'pink',
  textColor: 'yellow'
}

//typescript alternative
// import proptype + check input type or make it required 
Header.propTypes= {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}
export default Header
