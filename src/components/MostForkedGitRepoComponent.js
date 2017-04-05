import React, { Component} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/MostForkedGitRepoActions';
import {getData} from '../AppServices/AjaxService';
import LoaderComponent from './LoaderComponent';

class MostForkedGitRepoComponent extends Component {
	constructor(props){
		super(props);
		this.state ={
			topForkedRepo : [],
			timeOutId : null,
			isFetching:true
		}
		this.createHtmlForTopForked = this.createHtmlForTopForked.bind(this);
	}
	componentDidMount(){
		var url ='https://api.github.com/search/repositories?q=all&sort=forks&order=desc&page=1';
		this.props.dispatch(actions.getTopForkedRepos(url));
	}
	componentWillReceiveProps(nextProps){
		this.setState({
 			topForkedRepo : nextProps.data.topForkedRepo
 		});
 		var timeOutId = setTimeout(()=>{
 			var url ='https://api.github.com/search/repositories?q=all&sort=forks&order=desc&page=1';
			this.props.dispatch(actions.getTopForkedRepos(url));
 		},10000)
	}

	createHtmlForTopForked(){
		
		var data = this.props.data.topForkedRepo;
		if(data.length==0){
			return null;
		}
		var htmlToBereturned=[];
		function shortenName(name){
			var newName =name;
			if(name.length>14){
				var nameArr=name.split('');
				nameArr.splice(14);
				newName = nameArr.join('')+'...';

			}
			return newName;
		}
		for(var index=0;index<10;index++){
			htmlToBereturned.push(<li key={Math.random()+'topforkeditem'}>
	      		<span className='repo-name'><span>Name :</span>{shortenName(data[index].name)}</span>
	      		<img className='repo-owner-img' src={data[index].owner['avatar_url']}/>
	      		<span className='star-count bold-font'><span>Fork Count :</span>{data[index].forks}</span>
	      	</li>)
		}
		return htmlToBereturned;
	}
	render(){
		return (
	    <div className='toprepo-container'>
	      <h2 className='heading-forked'>***Most Popular/Forked Repos***</h2>
	      <ul className='toprepo'>
	    	{this.createHtmlForTopForked()}
	    	{this.props.data.isFetching && <LoaderComponent />}
	      </ul>  	
	      </div>
	  );
	}

}
function select(state) {
	return {
		data: state.MostForkedRepoReducer
	};
}


export default connect(select)(MostForkedGitRepoComponent);


