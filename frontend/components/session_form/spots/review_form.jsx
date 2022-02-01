import React from "react";
import Link from "react-router-dom";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recommend: true,
                body: '',
                spot_id: this.props.spotId,
                author_id: this.props.authorId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };
    

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
        this.props.history.replace(`/spots/${this.props.spotId}`)
    }

    handleClick = (e) => {
        e.preventDefault();
        $(".selected-option").removeClass("selected-option");
        $(e.currentTarget).addClass("selected-option");
    };

    onChange = (e) => {
        this.setState({
            recommend: e.target.value
        }) 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="review-form">Review
                    <textarea placeholder = 'Let us know what you think about the campsite!' value={this.state.body} onChange={this.update('body')}/>
                    
                    <label id='review-recommend'>
                        <span>Like this campsite?</span>
                        <div className="yes-no-buttons">
                            <label className="recommend">Recommend
                            
                                <input
                                    type="radio"
                                    value={true}
                                    name="recommend"
                                    
                                    className="review-button selected-option"
                                    
                                    onChange={this.onChange}
                                />

                                
                            </label>

                            <label className="recommend">Don't Recommend
                                <input
                                    type="radio"
                                    value={false}
                                    name="recommend"
                                    className="review-button"

                                    onChange={this.onChange}
                                />

                            
                            </label>
                        </div>
                    </label>
                <button className="submit-review" type='submit'>Leave Review</button>
                <button className="review-exit">Close</button>
                </form>

            </div>
        )
    }

}

export default ReviewForm;