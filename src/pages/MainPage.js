import React from 'react'
import CardList from 'components/CardList';
import './MainPage.scss'

//vp검증된 나의 카드목록들 불러오기
const card = {
  name: 'card1',
  id: '001'
}
const card2 = {
   name: 'card2',
   id: '002'
}

const list = [card, card2]
const MainPage = () => (
  <main className="MainPage">
      <CardList cards={list}/>
  </main>
)

export default MainPage