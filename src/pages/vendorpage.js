import React from 'react';

export default function VendorPage(props) {
    

    return (
        <React.Fragment>
<h2>You are looking at:<br />
{props.vendortitle}
</h2>

<div class='vendorpage-header'><img src=`url(${props.vendorheader})` /></div>


        </React.Fragment>
    )

}