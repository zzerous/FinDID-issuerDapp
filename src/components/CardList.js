import React, { Component } from 'react'
import axios from 'axios'
import CardButton from 'components/CardButton';
import Modal from 'components/Modal';

import './CardList.scss'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: !props.cards,
      modalOpen: false,
      card: {
        cardName: 'A CARD',
        cardNumber: '0000 0000 0000 0000',
        cardEXP: '04/2027',
        cardOwner: 'GILDONG HONG',
        ownerAddr: '42, Hannam daero, Yongsan gu, Seoul',
        ownerPhone: '010-0000-0000',
        ownerReg: '850101-1234567'
      }
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const isUpdatedList = (nextProps.cards !== prevState.cards) && (nextProps.cards !== null)
    if (isUpdatedList) {
      return { isLoading: false }
    }
    return null
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  submit = async () => {
    //크리덴셜 발급 요청 -> To, wallet
    await axios
  }

  render() {
    const { cards } = this.props;
    const { modalOpen, card } = this.state;
    console.log(cards)
    //if (this.state.isLoading) return <Loading />
    return (
    <>
      <div className="CardList">
        
        <Modal 
          open={modalOpen} 
          close={this.closeModal}
          submit={this.submit}
          title="카드 정보"
          data={JSON.stringify(card)}
        />
        {cards.length !== 0
          ? cards.map(({
            name,
            id
          }) => {
            return (
              <div key={id}>
                  <CardButton name={name} id={id} onClick={this.openModal}/>
              </div>
            )
          })
          : <span className="CardList__empty">Empty :D</span>
        }
      </div>
    </>
    )
  }
}

// const mapStateToProps = (state) => ({
//   feed: state.photos.feed,
//   userAddress: state.auth.address,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getFeed: () => dispatch(photoActions.getFeed()),
// })

export default CardList
