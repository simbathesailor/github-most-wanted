import React, { Component} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/MostStarredGitRepoActions';
import {getData} from '../AppServices/AjaxService';
import LoaderComponent from './LoaderComponent';
class MostStarredGitRepoComponent extends Component{
  constructor(props){
		super(props);
		this.state={
			topStarredRepo : [],
			timeOutId : null,
			isFetching:true
		}
		
		this.createHtmlForTopStarred = this.createHtmlForTopStarred.bind(this);
	}
	componentDidMount(){
		var url ='https://api.github.com/search/repositories?q=all&sort=stars&order=desc&page=1';
		this.props.dispatch(actions.getTopStarredRepos(url));
	}
	componentWillReceiveProps(nextProps){
		this.setState({
 			topStarredRepo : nextProps.data.topStarredRepo
 		}); 
 		if(this.state.timeOutId){
 			clearTimeout(this.state.timeOutId);
 		}
 		

 		var timeOutId = setTimeout(()=>{
 			var url ='https://api.github.com/search/repositories?q=all&sort=stars&order=desc&page=1';
 			this.props.dispatch(actions.getTopStarredRepos(url));
 		},10000);
 		this.setState({
 			timeOutId : timeOutId
 		})

	}
	createHtmlForTopStarred(){
		
		var data = this.props.data.topStarredRepo;
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
	      		<span className='star-count bold-font'><span>Star Count :</span>{data[index]['stargazers_count']}</span>
	      	</li>)
		}
		return htmlToBereturned;
	}
	
 	render(){
 		 return (
	    <div className='topstarred-container'>
	      <h2 className='heading-starred'>***Most Starred Repos***</h2>
	      <ul className='topstarred'>
	      	{this.createHtmlForTopStarred()}
	      	{this.props.data.isFetching && <LoaderComponent />}
	      </ul>
	      </div>
  		);	
 	}
 
};

function select(state) {
	return {
		data: state.MostStarredRepoReducer
	};
}


export default connect(select)(MostStarredGitRepoComponent);
