import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import ArtistList from '../views/ArtistList';

class Popular extends Component {

    getContent(offset, limit) {
        APIService.getPopularList(offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    handlePageClick = (data) => {
        let selected = data.selected * this.props.paginationConfig.limit;
        //console.log(selected);

        this.getContent(selected, 20);

    };

    render() {
        return (
            <div className="container center-align max-width">
                <DocumentTitle title={"Popular - SoundMix"} />

                <div className={!this.props.isLoading ? 'hidden' : ''}>Loading...</div>
                <div className={this.props.isLoading ? 'hidden' : ''}>
                    <ArtistList data={this.props.popularList.data} />
                    <ReactPaginate previousLabel={"Previous"}
                                   nextLabel={"Next"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageCount={this.props.paginationConfig.pageCount}
                                   marginPagesDisplayed={0}
                                   pageRangeDisplayed={7}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        popularList: store.api.popularList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(Popular);
