var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React TImer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="ative-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://github.com/jacksnt" target="_blank">Jack</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
