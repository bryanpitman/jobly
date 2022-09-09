/** Function for rendering an alert message
 * Props:
 * - message: The message to be shown
 * - type: the type of alert message (success, danger, etc)
 */

 function Alert({ message, type }) {
  return (
      <div className={`mb-3 alert alert-${type}`} role="alert">{message}
      </div>
  )
}

export default Alert;

// Could refactor this so that you don't need a whole new alert for each message,
// instead could make it so that one alert holds all the messages
// this is a stylistic choice!