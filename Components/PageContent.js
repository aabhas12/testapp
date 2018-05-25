import React from 'react';
import Page from './Pages/Page';
const pageContent = (props) => {
    if(props.seletedtab === 1){
        return <Page headertitle={"First Page"} cardheading={"FirstPage"} cardbody={"First PageBody"} cardfooter={"First Page Footer"}/>;
    }
    else if(props.seletedtab === 2){
        return <Page headertitle={"Second Page"} cardheading={"Second Page"} cardbody={"Second PageBody"} cardfooter={"Second Page Footer"}/>;
    }
    else if(props.seletedtab === 3){
        return <Page headertitle={"Third Page"} cardheading={"Third Page"} cardbody={"Third PageBody"} cardfooter={"Third Page Footer"}/>;
    }
    else if(props.seletedtab === 4){
        return <Page headertitle={"Fourth Page"} cardheading={"Fourth Page"} cardbody={"Fourth PageBody"} cardfooter={"Fourth Page Footer"}/>;
    }
};

export default pageContent;