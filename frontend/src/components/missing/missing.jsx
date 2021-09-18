import React from 'react';

class Missing extends React.Component {
    constructor(){
        super();
        this.state={
            fullname="",
            location="",
            photo="",
            
        }
    }
    render() { 
        return <div>missing component</div>;
    }
}
 
export default Missing;