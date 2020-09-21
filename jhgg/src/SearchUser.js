import React from 'react'

const SearchUser = (props)=>{
    return(<div>{props.match.params.userName}</div>)
}
export default SearchUser;