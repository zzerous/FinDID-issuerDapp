import React from 'react';

function UserInfo() {
    return (
        <div className="userInfo">
            <h1>userInfo</h1>
        </div>
    );
}

export default UserInfo;

// class UserCard extends Component {
//     render() {
//         return (
//             <div>
//                 <span>나의 카드 목록</span>
//                 <div className="CardList">
        
//                     <CardButton 
//                         name="Add Card" 
//                         onClick={this.openModal} 
//                     />
//                     <Modal 
//                         open={modalOpen} 
//                         close={this.closeModal}
//                         submit={this.submit}
//                         title="카드 정보"
//                     >
//                     Modal 내용 넣기
//                     </Modal>
//                     {cards.length !== 0
//                     ? cards.map(({
//                         name,
//                         id
//                     }) => {
//                         return (
//                             <div key={id}>
//                                 <CardButton name={name} id={id}/>
//                             </div>
//                         )
//                     })
//                     : <span className="CardList__empty">Empty :D</span>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
