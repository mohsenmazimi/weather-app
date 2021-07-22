import { React, Component } from "react";
class SearchBar extends Component {
	state = {
		term: "",
  };
  onChangeCountry = (e) => {
      this.setState({term:e.target.value})
  }
  onSubmitFrom = (e)=>{
    e.preventDefault();
    this.props.onsubmit(this.state.term)
  }
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitFrom}>
					<div className='mb-4 m-auto text-center ' style={{width:"570px"}}>
						<label htmlFor='exampleInputEmail1' className='form-label'></label>
						<input
							type='text'
							className='form-control'
							id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={this.state.term}
              onChange={this.onChangeCountry}
						/>
					</div>
					<div className='mt-3 mx-auto text-center' style={{width:"570px"}}>
						<button type='submit' className='btn btn-primary w-100'>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;