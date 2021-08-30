/* eslint-disable no-useless-constructor */
import React from 'react';
import Leaf from './leaf';
import "./mytree.css";

class MyTree extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.curLeaf = '';

    }

    handleClick(leaf){
        return e => {
            this.setState({curLeaf: leaf});
        };
    }

    render(){
        
        let leaf_display = this.state.curLeaf !== '' ? <Leaf leaf={this.state.curLeaf} currentUser={this.props.user}/> : null;

        let leaves_div = this.props.leaves.map((leaf) => {
            let date = leaf.date.slice(0,10);
            return(
                    <img className='tree-leaf' 
                    src='https://image.flaticon.com/icons/png/512/2049/2049733.png' 
                    height='40'
                    width='40'
                    onClick={this.handleClick(leaf).bind(this)}
                    />
            )
        });

        return(
            <div className='profile-page-tree'>
                <div className='tree-container'>
                    {leaves_div}
                    <img className="mytree-trunk"
                    src="https://image.flaticon.com/icons/png/64/408/408026.png"/>
                </div>
                {leaf_display}
                <div className="tree-trunk">
                </div>
            </div>
        )
    }
}


export default MyTree;