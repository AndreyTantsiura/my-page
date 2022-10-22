import { PureComponent } from "react";

const footer = {
    fontSize: '20px',
    position: 'absolute',
    bottom: '0',
    transform: 'translate(-50%, -50%)',
    marginLeft: '50%'
  }

class Footer extends PureComponent {
    render () {
        return (
            <div style = {footer as any}>
                <p>Footer {new Date().getFullYear()}</p>
            </div>
        )
    }
}

export default Footer