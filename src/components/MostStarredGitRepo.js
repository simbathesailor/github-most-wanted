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
			intervalId : null,
			isFetching:true
		}
		
		this.createHtmlForTopStarred = this.createHtmlForTopStarred.bind(this);
	}
	componentDidMount(){
		var callback = (success,error)=>{
			
			this.setState({
				isFetching : false
			})
			if(success){
				this.setState({
					topStarredRepo : success.items,
					intervalId : null
				})
			}
			if(error){

			}
		};
		getData('https://api.github.com/search/repositories?q=all&sort=stars&order=desc&page=1',callback);
		this.setState
		var that = this;

		var intervalId=setInterval(function(){
			if(!that.state.intervalId){
			getData('https://api.github.com/search/repositories?q=all&sort=stars&order=desc&page=1',callback);
			}
			that.setState({
				isFetching : true
			})
		},10000);	

		this.setState({
			intervalId : intervalId
		});
		
		
	}
	componentWillReceiveProps(nextProps){
 		this.setState({
 			topStarredRepo : nextProps.data.topStarredRepo
 		});
	}
	createHtmlForTopStarred(){
		
		var data = this.state.topStarredRepo;
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
	      	{this.state.isFetching && <LoaderComponent />}
	      </ul>
	      </div>
  		);	
 	}
 
};

function select(state) {
	return {
		data: state.topStarredRepo
	};
}


export default connect(select)(MostStarredGitRepoComponent);
