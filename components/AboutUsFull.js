import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
// import FullscreenDialog from 'material-ui-fullscreen-dialog'

const StyledAbout = styled.section`
  p {
    font-size: 0.9em;
  }
`;
const StyledImg = styled.img`
  margin-top: 10px;
  margin-right: 10px;
  float: left;
  border: 1px solid #000;
  @media (max-width: 600px) {
    float: none;
  }`;

class AboutUsFull extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const actions = [
      <RaisedButton
        label="OK"
        secondary
        onTouchTap={this.closeModal}
        style={{ width: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      />,
    ];
    return (
      <StyledAbout>
        <FlatButton
          className={'button'}
          labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }}
          label="Read the full story"
          primary
          onClick={this.openModal}
        />
        <Dialog
          title="The History of Three Little Pigs Masonry"
          actions={actions}
          modal
          autoDetectWindowHeight
          autoScrollBodyContent
          repositionOnUpdate={false}
          open={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentStyle={{ width: '98%', maxWidth: 'none', top: '-60px' }}
        >
          <StyledImg src="/images/about-us-photo.jpg" alt="about us" />
          <p>Family owned and operated, we have been proudly serving homeowners since 2004. Our masonry history begins with working across Canada and the United States in commercial masonry building schools, churches plus commercial and industrial projects.</p>
          <p>Our estimator and partner was first introduced to the masonry trade at 19 years old, approximately 40 years ago. Our estimator accomplished a 4 year apprenticeship in Structural and Architectural masonry. He was trained to operate with National Building Code specifications, the most stringent procedures in Canada. Aside from the high rises, churches, many schools, shopping centres and many other commercial projects, our estimator has also been involved on the general contracting side of things. He has won the following awards:</p>
          <li>In 1983, our estimator started his own commercial company and achieved two first place awards from the Canadian Masonry Contractors Association (CMCA).</li>
          <li>In 1992, he won the Best Masonry Workmanship for the Yoahan Shopping Centre in Richmond B.C.</li>
          <li>In 1993, he won Best Innovative Creation by designing a particular concrete block for Concorde Adex (Our Estimator’s Team, Ocean Cement Products, and Dr. Mike Hatzinakolous- Fero Corp.).</li>
          <p>In 2004, our estimator and partner launched Three Little Pigs Masonry, a full service masonry company for the homeowner. His many years of experience allow him to help homeowners with many permanent solutions to their problems where other competitors have failed to succeed.</p>
        </Dialog>
      </StyledAbout>
    );
  }
}

export default AboutUsFull;
